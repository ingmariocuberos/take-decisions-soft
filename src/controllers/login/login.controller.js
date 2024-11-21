import { login } from "./handlers/login.handler.js";
import { register } from "./handlers/register.handler.js";
import { deleteUserByUsername } from "./handlers/deleteUserByUsername.handler.js";
import { changePassword } from "./handlers/change-password.handler.js";

export const loginController = {
  login,
  register,
  deleteUserByUsername,
  changePassword
}