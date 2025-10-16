import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "@/config/app.config";
import meRoute from "@/routes/me";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use("/me", meRoute);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
