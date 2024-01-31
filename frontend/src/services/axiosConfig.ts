import axios from 'axios';
import 'dotenv/config';

type NodeEnv = 'development' | 'production';

const runningInDocker = process.env.RUNNING_IN_DOCKER === 'true';
const backendURL = {
  development: runningInDocker
    ? `http://host.docker.internal:${process.env.BACKEND_PORT}`
    : `http://localhost:${process.env.BACKEND_PORT}`,
  production: `${process.env.BACKEND_URL}`,
};

export const requestBFF = axios.create({
  baseURL: `http://localhost:${process.env.APP_PORT}/api/`,
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
