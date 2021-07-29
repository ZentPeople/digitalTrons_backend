import { getBookedSlotsFromDB, bookSlotsInDB } from "../models/slots.js";

import { sendSuccessResponse, sendServerErrorResponse } from "../utils/responseBuilder.js";

export const getBookedSlots = async (req, res, next) => {
  try {
    const slots = await getBookedSlotsFromDB();

    const body = {
      slots,
    };
    await sendSuccessResponse({ res, body });
  } catch (err) {
    console.log(`err`, err);
    await sendServerErrorResponse;
  }
};

export const bookSlots = async (req, res, next) => {
  try {
    const { startTime, user } = req.body;

    const slot = await bookSlotsInDB({ startTime, user });
    const body = {
      isSlotBooked: true,
      slot,
    };

    await sendSuccessResponse({ res, body });
  } catch (err) {
    console.log(`err`, err);
    await sendServerErrorResponse;
  }
};
