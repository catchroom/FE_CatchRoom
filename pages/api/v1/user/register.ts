import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import { addDoc, collection, where, getDocs, query } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  try {
    // 이미 존재하는 이메일인지 확인
    const docSnap = await getDocs(
      query(collection(db, 'user'), where('email', '==', body.email)),
    );

    if (docSnap.docs.length > 0) {
      return res.status(400).json({
        code: '2000',
        data: { message: '이미 존재하는 이메일입니다.' },
      });
    } else {
      const docRef = await addDoc(collection(db, 'user'), body);
      console.log(docRef.id);
      return res.status(200).json({
        code: '1000',
        data: { message: '회원가입이 성공적으로 완료되었습니다.' },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'API 이상하게 요청하셨어요 ㅋㅋ' });
  }
};

export default handler;
