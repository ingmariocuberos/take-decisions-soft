import { loginAo } from "../../AO/login/login.ao.js"
import { compareHash } from "../../helpers/hash-methods/compare-hash.helper.js";

export const loginBl = {
  validateLogin: async({ username, password }) =>{
    const currentUser = await loginAo.getUserHash(username);
    if(currentUser){
      return await compareHash(password, currentUser.password);
    } else {
      return currentUser;
    }
  }
}