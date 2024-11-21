import { loginBl } from "../../BL/login/login.bl.js"
import { standardResponse } from "../../helpers/http-response/standard-response.helper.js";

export const loginController = async(req, res) =>{
  const successLogin = await loginBl.validateLogin(req.body);
  
  if(successLogin){
    res.send(
      standardResponse(
        "Usuario logueado con exito"
      )
    );
  } else {
    res.send(
      standardResponse(
        'Contraseña incorrecta o el usuario no existe',
        false,
        401
      ) 
    )
  }
}