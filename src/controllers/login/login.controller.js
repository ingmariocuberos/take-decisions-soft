import { loginBl } from "../../BL/login/login.bl.js"
import { standardResponse } from "../../helpers/http-response/standard-response.helper.js";

export const loginController = async(req, res) =>{
  const successLogin = await loginBl.validateLogin(req.body);
  
  if(successLogin){
    standardResponse(
      res,
      "Usuario logueado con exito"
    )
  } else {
    standardResponse(
      res,
      'Contraseña incorrecta o el usuario no existe',
      false,
      401
    ) 
  }
}