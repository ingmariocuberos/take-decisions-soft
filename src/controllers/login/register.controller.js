import { registerBl } from "../../BL/login/register.bl.js";
import { standardResponse } from "../../helpers/http-response/standard-response.helper.js";

export const registerController = async (req, res) => {
  try {
    await registerBl.createUser(req.body);
    res.send( standardResponse('Usuario creado con éxito') );
  } catch (error) {
    res.send(
      standardResponse(`El usuario ${req.body.username} ya existe`)
    );
    console.log(error);
  }
}