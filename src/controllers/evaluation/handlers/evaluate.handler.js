import { evaluationBl } from "../../../BL/evaluation/evaluation.bl.js";
import { standardResponse } from "../../../helpers/http-response/standard-response.helper.js";

export const evaluate = async(req, res) => {

  try {
    const evaluation = await evaluationBl.evaluate(req.body);

    if(evaluation){
      standardResponse(
        res,
        'Se obtuvo respuesta satisfactoria', 
        true,
        201,
        {
          evaluation
        }
      )
    }
  } catch (error) {
    standardResponse(
      res,
      'Se tuvo un error al consultar. Por favor, intenta nuevamente', 
      false,
      422
    )
    console.log(error);
  }
}