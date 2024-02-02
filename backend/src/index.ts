import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { prisma } from '../helpers/prismaClient';
import router from './routes';

async function main() {
  console.log('Database connected!');

  const app = express();
  const port = Number(process.env.PORT) || 3001;

  app.use(cors());

  app.use(express.json());
  app.use(router);

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running in port ${port}!`);
  });
}

main()
  .catch((e) => {
    console.log('Erro ao conectar ao banco de dados!');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
