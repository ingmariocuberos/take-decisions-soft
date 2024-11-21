import { evaluationController } from "../../controllers/evaluation/evaluation.controller.js";
import { evaluateDto } from "../../DTO/evaluation/evaluate.dto.js";
import { manageController } from "../../helpers/manage-controller/manage-controller-after-validation.helper.js";

export const evaluationRouter = (app) =>{

  const baseUrl = '/evaluation';

  app.post(baseUrl + '/evaluate', evaluateDto, manageController(evaluationController.evaluate));
}