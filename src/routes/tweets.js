import { Router } from "express";
import {
  createTweet,
  createTweets,
  deleteTweet,
  deleteTweets,
  getTweet,
  getTweets,
  updateTweet,
  updateTweets,
} from "../controllers/tweets.js";

export const tweetsRoute = Router();

tweetsRoute.get("/", getTweets);

tweetsRoute.get("/:user", getTweet);

tweetsRoute.post("/", createTweets);

tweetsRoute.post("/:user", createTweet);

tweetsRoute.put("/", updateTweets);

tweetsRoute.put("/:user", updateTweet);

tweetsRoute.delete("/", deleteTweets);

tweetsRoute.delete("/:user", deleteTweet);
