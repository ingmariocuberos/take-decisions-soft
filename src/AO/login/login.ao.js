import { userModel } from "../../models/user/user.model.js";

export const loginAo = {
  getUserHash: async (username) => {
    return await userModel.findOne({
      username
    });
  },
  createUser: async (username, password) => {
    await userModel.create({
      username,
      password
    });
  },
  deleteUserByUsername: async (username) => {
    return await userModel.deleteOne({
      username
    })
  }
}