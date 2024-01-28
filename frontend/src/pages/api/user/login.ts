import { requestBackend } from '@/services/axiosConfig';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  if (req.method === 'POST') {
    const { email, password } = req.body;

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    try {
      schema.parse({ email, password });

      const response = await requestBackend.post('/login', {
        email,
        password,
      });

      return res.status(200).json(response.data);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.issues[0].message });
      }
      if (err instanceof AxiosError) {
        return res.status(400).json({ message: err.response?.data.message });
      }
    }
  }
};

export default handler;
