import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import {
  collection,
  where,
  getDocs,
  query,
  setDoc,
  doc,
} from 'firebase/firestore';
import { v4 } from 'uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  try {
    // 이미 존재하는 이메일인지 확인
    const docSnap = await getDocs(
      query(
        collection(db, 'redis'),
        where('refresh_token', '==', body.refreshtoken),
      ),
    );

    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // 유저가 존재하는지 확인
    if (docSnap.docs.length > 0) {
      const accessToken = v4();

      const userRef = doc(db, 'redis', data[0].id);

      res.setHeader('Set-Cookie', [
        `access_token=${accessToken}; Path=/; Max-Age=300;`,
      ]);

      await setDoc(
        userRef,
        {
          user_id: data[0].id,
          access_token: accessToken,
        },
        { merge: true },
      );

      return res.status(200).json({
        code: '1013',
        data: {
          access_token: accessToken,
          id: data[0].id,
        },
      });
    } else {
      return res.status(400).json({
        code: '1014',
        data: { message: '토큰 이상한거 주셨어요 ㅋㅋ' },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'API 이상하게 요청하셨어요 ㅋㅋ' });
  }
};

export default handler;
