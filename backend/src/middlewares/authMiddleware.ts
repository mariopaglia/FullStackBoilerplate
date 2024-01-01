import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import { verifyToken } from '../utils/jwt';

type JWTPayload = {
  id: string;
  iat: number;
  exp: number;
};

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token não encontrado!',
    });
  }

  const token = authorization.replace('Bearer', '').trim();

  const validToken = verifyToken(token);

  const { id } = validToken as JWTPayload;

  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    return res.status(401).json({
      message: 'Usuário não encontrado!',
    });
  }

  if (!validToken) {
    return res.status(401).json({
      message: 'Token inválido!',
    });
  }

  next();
};