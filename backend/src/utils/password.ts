import { compare, hash } from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  return hash(password, 10);
};

export const verifyPassword = async (userPassword: string, storedPassword: string) => {
  return await compare(userPassword, storedPassword);
};
