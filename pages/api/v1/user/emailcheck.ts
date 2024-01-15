import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import { collection, where, getDocs, query } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  try {
    // 이미 존재하는 이메일인지 확인
    const docSnap = await getDocs(
      query(collection(db, 'user'), where('email', '==', body.email)),
    );

    // 유저가 존재하는지 확인
    if (docSnap.docs.length < 1) {
      return res.status(200).json({
        code: '1012',
        data: {
          message: '이메일이 중복되지 않았습니다.',
        },
      });
    } else {
      return res.status(400).json({
        code: '1005',
        data: { message: '이메일이 중복되었습니다.' },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'API 이상하게 요청하셨어요 ㅋㅋ' });
  }
};

export default handler;
