import { MILLISECONDS_REGEX, INDIAN_MOBILENUMBER_REGEX } from "../constants/index.js";
import { sendErrorResponse } from "../utils/responseBuilder.js";

export const validateGetUser = async (req, res, next) => {
  const { phoneNumber } = req.query;
  const validationErrors = [];

  if (!phoneNumber || !INDIAN_MOBILENUMBER_REGEX.test(phoneNumber)) {
    validationErrors.push("Enter a valid indian mobile number");
  }

  if (validationErrors.length > 0) {
    await sendErrorResponse({ res, status: 422, description: validationErrors });
  } else {
    next();
  }
};
