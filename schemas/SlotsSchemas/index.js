import mongoose from "mongoose";
import { SLOT_STATUS } from "../../constants/index.js";

const Schema = mongoose.Schema;
const SlotsSchema = new Schema(
  {
    slotStartTime: { required: true, type: Date },
    slotEndTime: { required: true, type: Date },
    status: { required: true, type: String, enum: Object.values(SLOT_STATUS), default: SLOT_STATUS.OPEN },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export default mongoose.model("slots", SlotsSchema);
