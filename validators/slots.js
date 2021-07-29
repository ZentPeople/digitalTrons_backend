import { MILLISECONDS_REGEX, INDIAN_MOBILENUMBER_REGEX } from "../constants/index.js";
import { sendErrorResponse } from "../utils/responseBuilder.js";

export const validateBookSlots = async (req, res, next) => {
  const { startTime, user } = req.body;

  const validationErrors = [];

  //   Validate Start time
  if (!startTime || !MILLISECONDS_REGEX.test(startTime)) {
    validationErrors.push("Enter a valid start time in milliseconds");
  } else {
    const date = new Date(startTime);
    if (date.getMinutes() != 30 || date.getSeconds() != 0 || date.getMilliseconds() != 0) {
      validationErrors.push("Start time should be in exact hours");
    } else {
      const now = new Date();
      const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 30, 0, 0);
      if (startTime < nextHour.getTime()) {
        validationErrors.push("Slots can be booked only for future time");
      }
    }
  }

  if (!user) {
    validationErrors.push("Enter a valid user object");
  } else {
    const { phoneNumber, firstName, lastName } = user;
    if (!phoneNumber || !INDIAN_MOBILENUMBER_REGEX.test(phoneNumber)) {
      validationErrors.push("Enter a valid indian mobile number");
    }
    if (!firstName) {
      validationErrors.push("Enter a valid first name");
    }
    if (!lastName) {
      validationErrors.push("Enter a valid last name");
    }
  }

  if (validationErrors.length > 0) {
    await sendErrorResponse({ res, status: 422, description: validationErrors });
  } else {
    next();
  }
};
