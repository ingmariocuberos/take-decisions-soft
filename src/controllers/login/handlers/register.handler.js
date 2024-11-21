import { loginBl } from "../../../BL/login/login.bl.js";
import { standardResponse } from "../../../helpers/http-response/standard-response.helper.js";

export const register = async (req, res) => {
  try {
    await loginBl.createUser(req.body);
    standardResponse(res, 'Usuario creado con éxito');
  } catch (error) {
    standardResponse(res, `El usuario ${req.body.username} ya existe`)
    console.log(error);
  }
}