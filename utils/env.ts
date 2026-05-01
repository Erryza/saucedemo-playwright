import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    BASE_URL: process.env.BASE_URL!,
    USER: process.env.STANDARD_USER!,
    PASSWORD: process.env.PASSWORD!,
};