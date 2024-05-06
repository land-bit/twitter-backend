import express from "express";
import dotenv from "dotenv";
import { tweetsRoute } from "./routes/tweets.js";
import { usersRoute } from "./routes/users.js";

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use("/users", usersRoute);

app.use("/tweets", tweetsRoute);

app.use("/", (req, res, next) =>
  res.send(
    "Bienvenue sur notre application backend d'un exercice de clone de twitter"
  )
);

app.listen(PORT, () => console.log("Running on port " + PORT));
