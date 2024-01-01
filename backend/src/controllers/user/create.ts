import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { userRepository } from '../../repositories/userRepository';
import { generateUUID } from '../../utils/generateUUID';
import { hashPassword } from '../../utils/password';
import { createUserSchema } from '../../validators/user';
export const handlerCreateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    createUserSchema.parse(req.body);

    const user = await userRepository.findOneBy({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: 'Usuário já existe!',
      });
    }

    userRepository.save({
      id: generateUUID(),
      name,
      email,
      password: await hashPassword(password),
      createdAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      message: 'Usuário criado com sucesso!',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error.issues.map((issue) => issue.message)[0],
      });
    }
    return res.status(400).json({
      success: false,
      message: 'Erro ao criar usuário!',
    });
  }
};
