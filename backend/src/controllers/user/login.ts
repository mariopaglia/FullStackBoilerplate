import { Request, Response } from 'express';
import { userRepository } from '../../repositories/userRepository';
import { generateToken } from '../../utils/jwt';
import { verifyPassword } from '../../utils/password';

export const handlerUserLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Parâmetros inválidos!',
    });
  }

  try {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return res.status(400).json({
        message: 'Usuário não existe!',
      });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Senha inválida!',
      });
    }

    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });

    return res.status(200).json({
      jwt: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'Erro ao fazer login!',
      error,
    });
  }
};
