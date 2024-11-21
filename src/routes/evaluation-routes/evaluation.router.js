import { evaluationController } from "../../controllers/evaluation/evaluation.controller.js";

export const evaluationRouter = (app) =>{

  const baseUrl = '/evaluation';

  app.post(baseUrl + '/evaluate', evaluationController.evaluate);
}