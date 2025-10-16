import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 5500,
  catFactApi: process.env.CAT_FACT_API || "https://catfact.ninja/fact",
  email: process.env.EMAIL || "",
  name: process.env.NAME || "",
};

if (!config.email || !config.name) {
  console.error("ERROR: EMAIL and NAME environment variables are missing");
  process.exit(1);
}
