import { body } from "express-validator";

export const registerDto = [
  body('username').isString().withMessage('el username no es valido'),
  body('password').isString().withMessage('el password no es valido')
];