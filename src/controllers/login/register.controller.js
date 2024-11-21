import { registerBl } from "../../BL/login/register.bl.js";
import { standardResponse } from "../../helpers/http-response/standard-response.helper.js";

export const registerController = async (req, res) => {
  try {
    await registerBl.createUser(req.body);
    standardResponse(res, 'Usuario creado con éxito');
  } catch (error) {
    standardResponse(res, `El usuario ${req.body.username} ya existe`)
    console.log(error);
  }
}