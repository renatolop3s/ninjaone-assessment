import dotenv from 'dotenv';

const dotEnvFile = `.env.${process.env.TESTCAFE_ENV || 'dev'}`;
dotenv.config({ path: dotEnvFile });
