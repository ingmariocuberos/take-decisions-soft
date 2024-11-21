import { body } from "express-validator";

export const decisionTypeDto = [
  body('name')
    .notEmpty().withMessage('el name no debe ser nulo')
    .isString().withMessage('el nombre debe ser un string')
];