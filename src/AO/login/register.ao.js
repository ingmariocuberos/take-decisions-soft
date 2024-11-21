import { userModel } from "../../models/user.model.js";

export const registerAo = {
  createUser: async (username, password) => {
    await userModel.create({
      username,
      password
    });
  }
}