import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { tweetsRoute } from "./routes/tweets.js";
import { usersRoute } from "./routes/users.js";
import { userRoute } from "./routes/user.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/", "https://kadea-twitter.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  })
);

const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/user", userRoute);

app.use("/users", usersRoute);

app.use("/tweets", tweetsRoute);

app.use("/", (req, res, next) =>
  res.send(
    "Bienvenue sur notre application backend d'un exercice de clone de twitter !\n\n\n" +
      "Veuiller utiliser une route valide"
  )
);

app.listen(port, () => console.log("Running on port " + port));
