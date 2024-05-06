import { Router } from "express";
import { getUsers } from "../controllers/users.js";

export const usersRoute = Router();

usersRoute.get("/:user", getUsers);
