import { Request, Response } from "express";
import { fetchedCatFact } from "@/services/cat.service";
import { config } from "@/config/app.config";

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const catFact = await fetchedCatFact();
    res.status(200).json({
      status: "success",
      user: {
        email: config.email,
        name: config.name,
        stack: "Node.js|Express|TypeScript",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({
      status: "error",
      message: "Get profile failed!",
      error: errorMessage
    });
  }
};
