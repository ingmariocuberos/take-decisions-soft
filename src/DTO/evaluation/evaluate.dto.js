import { body } from "express-validator";

export const evaluateDto = [
  body('decisionType')
    .notEmpty().withMessage('el tipo de decisión no debe ser nulo')
    .isString().withMessage('el tipo de decisión debe ser una cadena de texto'),
  body('options')
    .isArray().withMessage('las opciones deben ser array'),
  body('options.*')
    .isString().withMessage('las opciones deben ser una cadena de texto'),
  body('context')
    .isString().withMessage('El contexto debe ser una cadena de texto')
];