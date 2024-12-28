import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { transactionId, amount, packageInfoList } = req.body;

      const response = await fetch('https://api.esimaccess.com/api/v1/open/esim/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'RT-AccessCode': process.env.RT_ACCESS_CODE || '', 
        },
        body: JSON.stringify({ transactionId, amount, packageInfoList }),
      });

      const result = await response.json();

      if (response.ok) {
        res.status(200).json(result);
      } else {
        res.status(response.status).json({ success: false, errorMsg: result.errorMsg || 'An error occurred' });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, errorMsg: error.message });
    }
  } else {
    res.status(405).json({ success: false, errorMsg: 'Method not allowed' });
  }
}
