import { loginAo } from "../../AO/login/login.ao.js"
import { compareHash } from "../../helpers/hash-methods/compare-hash.helper.js";
import { hashString } from "../../helpers/hash-methods/hash.helper.js";

export const loginBl = {
  validateLogin: async({ username, password }) =>{
    const currentUser = await loginAo.getUserHash(username);
    if(currentUser){
      return await compareHash(password, currentUser.password);
    } else {
      return currentUser;
    }
  },
  createUser: async({ username, password }) => {
    const hashedPassword = await hashString(password);
    return await loginAo.createUser(username, hashedPassword);
  },
  deleteUserByUsername: async({ username }) => {
    const userExists = await loginAo.getUserHash(username);

    if(userExists){
      await loginAo.deleteUserByUsername(username);
    }

    return userExists;
  },
  changeUserPassword: async({username, newPassword}) => {
    const userExists = await loginAo.getUserHash(username);

    userExists.password = await hashString(newPassword);

    userExists.save();
  }
}