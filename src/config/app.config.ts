import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5500,
  catFactApi: process.env.CAT_FACT_API || 'https://catfact.ninja/fact',
  email: process.env.EMAIL,
  name: process.env.NAME
};