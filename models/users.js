import Users from "../schemas/UserSchemas/index.js";

export const getUserByMobileNumber = async ({ phoneNumber, firstName = undefined, lastName = undefined }) => {
  try {
    const user = await Users.findOne({ phoneNumber });

    if (firstName === undefined && lastName === undefined) return user;
    if (user && user.firstName === firstName && user.lastName === lastName) {
      return user;
    }

    return await Users.findOneAndUpdate({ phoneNumber }, { firstName: firstName.trim(), lastName: lastName.trim() }, { upsert: true, new: true });
  } catch (err) {
    throw err;
  }
};
