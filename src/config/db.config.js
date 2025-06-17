import dotenv from 'dotenv';
dotenv.config();
export const DB = process.env.DB_NAME;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWORD;
export const HOST = process.env.DB_HOST;
export const DIALECT = 'mysql';
