import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import router from './routes';

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!');

    const app = express();
    const port = Number(process.env.PORT) || 3333;

    app.use(cors());

    app.use(express.json());
    app.use(router);

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running in port ${port}!`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });
