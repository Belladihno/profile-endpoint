import dotenv from "dotenv";
dotenv.config();

console.log("=== Environment Variables Debug ===");
console.log("EMAIL:", process.env.EMAIL ? "SET" : "NOT SET");
console.log("NAME:", process.env.NAME ? "SET" : "NOT SET");
console.log("===================================");

export const config = {
  port: process.env.PORT || 5500,
  catFactApi: process.env.CAT_FACT_API || "https://catfact.ninja/fact",
  email: process.env.EMAIL || "",
  name: process.env.NAME || "",
};

if (!config.email || !config.name) {
  console.error("ERROR: EMAIL and NAME environment variables are missing");
  process.exit(1);
}
