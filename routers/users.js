import express from "express";

import { getUser } from "../controllers/users.js";
import { validateGetUser } from "../validators/user.js";

const router = express.Router();

router.get("/", validateGetUser, getUser);

export default router;
