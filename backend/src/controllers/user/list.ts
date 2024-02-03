import { Request, Response } from 'express';
import { prisma } from '../../helpers/prismaClient';

export const handlerListUsers = async (_req: Request, res: Response) => {
  try {
    const totalUsers = await prisma.user.findMany();

    const users = totalUsers.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      };
    });

    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Erro ao listar usuários!',
      error,
    });
  }
};
