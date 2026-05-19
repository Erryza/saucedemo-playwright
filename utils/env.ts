import * as dotenv from 'dotenv';
dotenv.config();

function required(value: string | undefined, key: string): string {
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

export const ENV = {
    BASE_URL: required(process.env.BASE_URL, 'BASE_URL'),
    STANDARD_USER: required(process.env.STANDARD_USER, 'STANDARD_USER'),
    PASSWORD: required(process.env.PASSWORD,'PASSWORD')
} as const;