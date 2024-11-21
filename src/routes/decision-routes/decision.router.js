import { decisionController } from "../../controllers/decision/decision.controller.js";
import { decisionTypeDto } from "../../DTO/decision/decision-type.dto.js";
import { manageController } from "../../helpers/manage-controller/manage-controller-after-validation.helper.js";

export const decisionRouter = (app) => {

  const baseUrl = '/decision';

  app.get(baseUrl + '/all-types', decisionController.getAllTypes);
  app.post(baseUrl + '/create-type', decisionTypeDto, manageController(decisionController.createType));
}