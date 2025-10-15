import express from "express";
import cors from "cors";
import { config } from "@/config/app.config";
import meRoute from "@/routes/me";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/me", meRoute);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
