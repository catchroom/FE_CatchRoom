import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase.config';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { state } = req.query;

  try {
    const returnData = {
      code: 2015,
      data: {
        // eslint-disable-next-line
        salesList: [] as any,
      },
    };

    const stateQuery =
      state === 'ing'
        ? where('state', '==', 'ing')
        : where('state', '!=', 'ing');

    const productQuerySnapshot = await getDocs(
      query(
        collection(db, 'product'),
        where('user_id', '==', 'obj0nAnnC2LSJ0EZYdes'),
        stateQuery,
      ),
    );

    for (const productDoc of productQuerySnapshot.docs) {
      const productData = productDoc.data();
      const orderHistoryId = productData.order_history_id;

      const orderHistoryDoc = await getDoc(
        doc(db, 'order-history', orderHistoryId),
      );

      if (orderHistoryDoc.exists()) {
        const orderHistoryData = orderHistoryDoc.data();
        const accommodationId = orderHistoryData.accommodation_id;

        const accommodationDoc = await getDoc(
          doc(db, 'accommodation', accommodationId),
        );

        if (accommodationDoc.exists()) {
          const accommodationData = accommodationDoc.data();
          const accommodationId = accommodationDoc.id;
          const accommodationName = accommodationData.name;
          const accommodationImage = accommodationData.thumbnail_url;

          returnData.data.salesList.push({
            productNum: productDoc.id,
            state: productData.state,
            historyId: orderHistoryId,
            accommodationId: accommodationId,
            isCatch: productData.is_catch,
            sellPrice: productData.sell_price,
            checkIn: orderHistoryData.check_in,
            checkOut: orderHistoryData.check_out,
            productName: accommodationName,
            thumbnailUrl: accommodationImage,
            writeDate: productData.write_date,
            productEndDate: productData.end_date,
          });
        }
      }
    }

    if (returnData.data.salesList.length === 0) {
      return res.status(404).json({ message: 'No Data Found' });
    }

    return res.status(200).json({ data: returnData });
  } catch (e) {
    return res.status(500).json({ message: 'Server Error 발생해버렸어용' });
  }
};

export default handler;
