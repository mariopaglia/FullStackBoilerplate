import { AxiosResponse } from 'axios';
import { requestBFF } from '../axiosConfig';

// interface ICreateUser {
//   name: string;
//   email: string;
//   password: string;
// }

export const createUser = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
  return requestBFF.post('user/create', {
    name,
    email,
    password,
  });
};
