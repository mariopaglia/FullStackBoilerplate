import { AxiosResponse } from 'axios';
import { requestBackend } from '../axiosConfig';

export const createUser = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
  return requestBackend.post('/user/create', {
    name,
    email,
    password,
  });
};

export const userLogin = async (email: string, password: string): Promise<AxiosResponse> => {
  return requestBackend.post('/user/login', {
    email,
    password,
  });
};

export const usersList = async (): Promise<AxiosResponse> => {
  return requestBackend.get('/user/list_users');
};
