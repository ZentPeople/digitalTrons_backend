import express from "express";

import { sendErrorResponse, sendSuccessResponse } from "../utils/responseBuilder.js";

const router = express.Router();

router.get("/test", async (req, res, next) => {
  const body = { message: "API runnig successfully" };
  await sendSuccessResponse({ res, body });
});
router.use("/", async (req, res, next) => {
  await sendErrorResponse({ res, status: 404, description: "Sorry!. Enter a valid URI" });
});

export default router;
