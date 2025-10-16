import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { config } from "@/config/app.config";
import meRoute from "@/routes/me";

const app = express();

app.use(helmet());

app.use(cors());

const limiter = rateLimit({
  windowMs: 60000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error:
      "You have sent too many requests. Please try again later",
  },
});

app.use(limiter);

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/me", meRoute);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    status: "error",
    message: err.message || "Internal server error",
  });
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
