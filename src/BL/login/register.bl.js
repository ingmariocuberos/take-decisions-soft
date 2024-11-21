import { registerAo } from "../../AO/login/register.ao.js"
import { hashString } from "../../helpers/hash-methods/hash.helper.js"

export const registerBl = {

  createUser: async({ username, password }) => {
    const hashedPassword = await hashString(password);
    await registerAo.createUser(username, hashedPassword);
  }
}