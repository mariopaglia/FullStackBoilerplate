import { PrismaClient } from '@prisma/client';

const debug = false;

export const prisma = new PrismaClient(
  debug
    ? {
        log: ['query', 'info', 'warn', 'error'],
      }
    : undefined
);
