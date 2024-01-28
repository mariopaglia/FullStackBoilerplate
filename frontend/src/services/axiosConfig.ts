import axios from 'axios';
import 'dotenv/config';

const runningInDocker = process.env.RUNNING_IN_DOCKER === 'true';

export const requestBFF = axios.create({
  baseURL: `http://localhost:${process.env.APP_PORT}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestBackend = axios.create({
  baseURL: runningInDocker
    ? `http://host.docker.internal:${process.env.BACKEND_PORT}`
    : `http://localhost:${process.env.BACKEND_PORT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
