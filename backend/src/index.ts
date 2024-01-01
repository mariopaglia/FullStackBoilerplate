import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import router from './routes';

AppDataSource.initialize().then(() => {
  console.log('Database connected!');

  const app = express();
  const port = 3333;

  app.use(express.json());
  app.use(router);

  app.listen(port, () => console.log('Server is running!'));
  
}).catch((error) => {
  console.log('Error connecting to database: ', error);
});
