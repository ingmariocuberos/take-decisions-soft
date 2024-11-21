import { body } from "express-validator";

export const changePasswordDto = [
  body('username').isString().withMessage('el username no es valido'),
  body('newPassword').isString().withMessage('el password no es valido')
];