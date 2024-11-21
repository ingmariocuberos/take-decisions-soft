import { userModel } from "../../models/user/user.model.js";

export const registerAo = {
  createUser: async (username, password) => {
    await userModel.create({
      username,
      password
    });
  }
}