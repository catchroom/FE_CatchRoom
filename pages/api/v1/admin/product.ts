import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { body } = req;
      try {
        const docRef = await addDoc(collection(db, 'accommodation'), body);
        console.log(docRef.id);
        return res
          .status(200)
          .json({ message: '숙소 등록 성공', data: docRef.id });
      } catch (error) {
        return res.status(500).json({ message: '숙소 등록 실패' });
      }
    case 'GET':
      try {
        const querySnapshot = await getDocs(collection(db, 'accommodation'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return res.status(200).json({ message: '숙소 조회 성공', data });
      } catch (error) {
        return res.status(500).json({ message: '숙소 조회 실패' });
      }
    default:
      return res.status(405).json({ message: '허용되지 않는 메서드입니다.' });
  }
};

export default handler;
