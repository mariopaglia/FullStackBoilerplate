import axios from 'axios';
import 'dotenv/config';

type NodeEnv = 'development' | 'production';

const runningInDocker = process.env.RUNNING_IN_DOCKER === 'true';

let jwtToken = '';

export const setToken = (token: string) => {
  jwtToken = token;
};

export const getToken = () => {
  return jwtToken;
};

const backendURL = {
  development: runningInDocker
    ? `http://backend:${process.env.BACKEND_PORT}`
    : `http://localhost:${process.env.BACKEND_PORT}`,
  production: `${process.env.BACKEND_URL}`,
};

export const requestBFF = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestBackend = axios.create({
  baseURL: backendURL[process.env.NODE_ENV as NodeEnv],
  headers: {
    'Content-Type': 'application/json',
  },
});

requestBFF.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('jwt');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        setToken(token);
      }
    }
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

requestBackend.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
