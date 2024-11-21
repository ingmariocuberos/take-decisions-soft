import { loginController } from "../../controllers/login/login.controller.js"
import { changePasswordDto } from "../../DTO/login/change-password.dto.js"
import { deleteUserDto } from "../../DTO/login/delete-user.dto.js"
import { registerDto } from "../../DTO/login/register.dto.js"
import { manageController } from "../../helpers/manage-controller/manage-controller-after-validation.helper.js"

export const loginRouter = (app) => {
  app.get(
    '/login', 
    registerDto, 
    manageController(loginController.login)
  );

  app.post(
    '/register',
    registerDto,
    manageController(loginController.register)
  );

  app.delete(
    '/delete-user',
    deleteUserDto,
    manageController(loginController.deleteUserByUsername)
  );
  
  app.patch(
    '/change-password',
    changePasswordDto,
    manageController(loginController.changePassword)
  );

}