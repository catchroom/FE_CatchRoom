import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import { addDoc, collection } from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  try {
    const docRef = await addDoc(collection(db, 'product'), body);
    return res.status(200).json({ message: '판매 등록 성공', data: docRef.id });
  } catch (error) {
    return res.status(500).json({ message: '판매 등록 실패' });
  }
};

export default handler;
