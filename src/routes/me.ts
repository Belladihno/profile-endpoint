import { getProfile } from "@/controllers/me";
import { Router } from "express";

const router = Router();

router.get("/", getProfile);

export default router;
