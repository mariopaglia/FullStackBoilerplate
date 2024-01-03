import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './entities/User';

const isDev = process.env.NODE_ENV === 'development';

export const AppDataSource = new DataSource({
  type: (process.env.DB_TYPE as 'mysql') || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  entities: [User],
  migrations: [isDev ? 'src/migrations/**/*.{js,ts}' : __dirname + '/dist/migrations/**/*.{js}'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
