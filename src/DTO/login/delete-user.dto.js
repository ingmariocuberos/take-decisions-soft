import { body } from "express-validator";

export const deleteUserDto = [
  body('username').isString().withMessage('el username no es valido')
];