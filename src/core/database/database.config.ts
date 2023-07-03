import * as dotenv from 'dotenv';
import { IDBConfig } from './dbConfig.interface';

dotenv.config();

// TO-DO: add code to fetch secrets from AWS and update env

export const databaseConfig: IDBConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_DEVELOPMENT,
  },
  testing: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_TESTING,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_PRODUCTION,
  },
};
