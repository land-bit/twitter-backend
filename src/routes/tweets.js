import { Router } from "express";
import { getTweets } from "../controllers/tweets.js";

export const tweetsRoute = Router();

tweetsRoute.get("/", getTweets);
