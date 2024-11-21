import { decisionBl } from "../../../BL/decision/decision.bl.js";
import { standardResponse } from "../../../helpers/http-response/standard-response.helper.js";

export const createType = async(req, res) => {

  try {
    const createdType = await decisionBl.createType(req.body);

    if(createdType){
      standardResponse(
        res,
        'Se creó el tipo de decisión exitosamente', 
        true,
        201
      )
    }
  } catch (error) {
    standardResponse(
      res,
      'No se pudo crear el tipo de decisión', 
      false,
      422
    )
    console.log(error);
  }

  
}