import { validationResult } from "express-validator";
import { standardResponse } from "../http-response/standard-response.helper.js";

export const manageController = (controller) => {
  return (req, res, next) =>{
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return controller(req, res);
    }
    console.log(errors);
    standardResponse(res, errors.array()[0].msg, false, 403)
  }
}