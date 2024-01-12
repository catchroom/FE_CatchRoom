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
        collection(db, 'user'),
        where('email', '==', body.email),
        where('password', '==', body.password),
      ),
    );

    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // 유저가 존재하는지 확인
    if (docSnap.docs.length > 0) {
      const accessToken = v4();
      const refreshToken = v4();

      const userRef = doc(db, 'redis', data[0].id);

      await setDoc(
        userRef,
        {
          user_id: data[0].id,
          access_token: accessToken,
          refresh_token: refreshToken,
        },
        { merge: true },
      );

      return res.status(200).json({
        code: '1006',
        data: {
          access_token: accessToken,
          refresh_toekn: refreshToken,
          id: data[0].id,
        },
      });
    } else {
      return res.status(400).json({
        code: '1007',
        data: { message: '회원 아이디가 존재하지 않습니다.' },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'API 이상하게 요청하셨어요 ㅋㅋ' });
  }
};

export default handler;
