import express from "express";

import { getBookedSlots, bookSlots } from "../controllers/slots.js";
import { validateBookSlots } from "../validators/slots.js";

const router = express.Router();

router.get("/", getBookedSlots);
router.post("/", validateBookSlots, bookSlots);

export default router;
