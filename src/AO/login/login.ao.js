import { userModel } from "../../models/user/user.model.js";

export const loginAo = {
  getUserHash: async (username) => {
    return await userModel.findOne({
      username
    });
  }
}