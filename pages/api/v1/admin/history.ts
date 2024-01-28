import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        // eslint-disable-next-line
        const returnData = [] as any;
        const orderQuerySnapshot = await getDocs(
          query(
            collection(db, 'order-history'),
            where('user_id', '==', 'obj0nAnnC2LSJ0EZYdes'),
          ),
        );

        for (const orderDoc of orderQuerySnapshot.docs) {
          const orderData = orderDoc.data();
          const accommodationId = orderData.accommodation_id;

          const accommodationDoc = await getDoc(
            doc(db, 'accommodation', accommodationId),
          );

          if (accommodationDoc.exists()) {
            const accommodationData = accommodationDoc.data();
            const accommodationName = accommodationData.name;

            returnData.push({
              order_history_id: orderDoc.id,
              productName: accommodationName,
              ...orderData,
            });
          }
        }
        return res.status(200).json({ data: returnData });

      case 'POST':
        const { body } = req;
        const docRef = await addDoc(collection(db, 'order-history'), body);
        console.log(docRef.id);
        return res.status(200).json({ data: docRef.id });
      default:
        return res.status(405).end();
    }
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export default handler;
