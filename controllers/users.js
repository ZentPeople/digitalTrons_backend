import { getUserByMobileNumber } from "../models/users.js";

import { sendSuccessResponse, sendServerErrorResponse, sendErrorResponse } from "../utils/responseBuilder.js";

export const getUser = async (req, res, next) => {
  try {
    const { phoneNumber } = req.query;
    const user = await getUserByMobileNumber({ phoneNumber });

    if (!user) {
      return await sendErrorResponse({ res, status: 404, description: "Sorry! No user found with this mobile number" });
    }

    const body = {
      user: user || {},
    };

    await sendSuccessResponse({ res, body });
  } catch (err) {
    console.log(`err`, err);
    await sendServerErrorResponse;
  }
};
