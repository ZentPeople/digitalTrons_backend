import Slots from "../schemas/SlotsSchemas/index.js";

import { SLOT_STATUS } from "../constants/index.js";
import { getUserByMobileNumber } from "./users.js";

export const getBookedSlotsFromDB = async () => {
  try {
    const now = new Date();
    return await Slots.find({ status: SLOT_STATUS.BOOKED, slotEndTime: { $gte: now } }).populate("user");
  } catch (err) {
    throw err;
  }
};

export const bookSlotsInDB = async ({ startTime, user }) => {
  try {
    const userData = await getUserByMobileNumber({ ...user });
    const slotStartTime = new Date(startTime);
    const slotEndTime = new Date(slotStartTime.getTime() + 3600000);
    let slot = await Slots.findOneAndUpdate(
      { slotStartTime },
      { slotEndTime, status: SLOT_STATUS.BOOKED, user: userData._id },
      { upsert: true, new: true }
    );
    slot.user = userData;
    return slot;
  } catch (err) {
    throw err;
  }
};
