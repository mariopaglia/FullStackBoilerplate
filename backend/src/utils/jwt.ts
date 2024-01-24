import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateToken = (payload: any) => {
  return sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
  });
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    return false;
  }
};
