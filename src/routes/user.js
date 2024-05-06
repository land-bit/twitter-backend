import { Router } from "express";
import { getUser } from "../controllers/user.js";

export const userRoute = Router();

userRoute.get("/", getUser);
