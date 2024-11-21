import { loginBl } from "../../../BL/login/login.bl.js";
import { standardResponse } from "../../../helpers/http-response/standard-response.helper.js";

export const deleteUserByUsername = async(req, res) =>{
  
  const deletedUser = await loginBl.deleteUserByUsername(req.body);
  
  if(deletedUser){
    standardResponse(
      res,
      "Usuario borrado con éxito"
    )
  } else {
    standardResponse(
      res,
      'El usuario no existe',
      false,
      401
    ) 
  }
}