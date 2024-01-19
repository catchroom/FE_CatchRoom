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

    console.log(state);

    const getRandomReviewStatus = () => {
      const randomValue = Math.random();

      if (randomValue < 0.25) {
        return 'onReview';
      } else if (randomValue < 0.5) {
        return 'deleteReview';
      } else if (randomValue < 0.75) {
        return 'noReview';
      } else {
        return 'outDatedReview';
      }
    };

    const productQuerySnapshot =
      state === 'ing'
        ? await getDocs(
            query(
              collection(db, 'product'),
              where('user_id', '==', 'obj0nAnnC2LSJ0EZYdes'),
              where('state', '==', 'ing'),
            ),
          )
        : await getDocs(
            query(
              collection(db, 'product'),
              where('state', 'in', ['done', 'notForSale', 'expirationDate']),
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
            isReview: getRandomReviewStatus(),
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
