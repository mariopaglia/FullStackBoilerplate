import axios from 'axios';

export const requestBFF = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestBackend = axios.create({
  baseURL: 'http://host.docker.internal:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});
