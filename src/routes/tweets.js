import { Router } from "express";
import { getTweets, postTweets } from "../controllers/tweets.js";

export const tweetsRoute = Router();

tweetsRoute.get("/", getTweets);

tweetsRoute.post("/", postTweets);
