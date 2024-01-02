import 'dotenv/config';
import { DataSource } from 'typeorm';

const isDev = process.env.NODE_ENV === 'development';

export const AppDataSource = new DataSource({
  type: (process.env.DB_TYPE as 'mysql') || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  entities: [isDev ? 'src/entities/**/*.{js,ts}' : 'dist/entities/**/*.{js}'],
  migrations: [isDev ? 'src/migrations/**/*.{js,ts}' : 'dist/migrations/**/*.{js}'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
