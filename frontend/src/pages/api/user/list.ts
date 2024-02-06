import { requestBackend } from '@/services/axiosConfig';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  if (req.method === 'GET') {
    try {
      const response = await requestBackend.get('/users', {
        headers: {
          Authorization: token,
        },
      });

      return res.status(200).json(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        return res.status(400).json({ message: err.response?.data.message });
      }
    }
  }
};

export default handler;
