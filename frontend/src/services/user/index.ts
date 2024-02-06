import { AxiosResponse } from 'axios';
import { requestBFF } from '../axiosConfig';

export const createUser = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
  return requestBFF.post('/user/create', {
    name,
    email,
    password,
  });
};

export const userLogin = async (email: string, password: string): Promise<AxiosResponse> => {
  return requestBFF.post('/user/login', {
    email,
    password,
  });
};

export const usersList = async (): Promise<AxiosResponse> => {
  return requestBFF.get('/user/list');
};
