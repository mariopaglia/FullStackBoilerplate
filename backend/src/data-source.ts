import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: (process.env.DB_TYPE as 'mysql') || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  entities: ['src/entities/**/*.{js,ts}'],
  migrations: ['src/migrations/**/*.{js,ts}'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
