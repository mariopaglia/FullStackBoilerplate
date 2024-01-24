import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }).max(255),
  email: z.string().email({ message: 'O email deve ser válido' }),
  password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }).max(255),
});
