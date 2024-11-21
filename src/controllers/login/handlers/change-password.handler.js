import { loginBl } from "../../../BL/login/login.bl.js";
import { standardResponse } from "../../../helpers/http-response/standard-response.helper.js";

export const changePassword = async (req, res) => {
  try {
    await loginBl.changeUserPassword(req.body);
    standardResponse(res, 'Contraseña modificada con éxito');
  } catch (error) {
    standardResponse(res, `No fue posible modificar la contraseña del usuario ${req.body.username}`)
    console.log(error);
  }
}