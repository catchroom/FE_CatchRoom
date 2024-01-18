import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    productName: '제주 호텔',
    productPrice: 100000,
  };
  return res.status(200).json({ success: true, data });
};

export default handler;
