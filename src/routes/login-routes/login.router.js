import { loginController } from "../../controllers/login/login.controller.js"
import { registerController } from "../../controllers/login/register.controller.js"
import { registerDto } from "../../DTO/login/register.dto.js"
import { manageController } from "../../helpers/manage-controller/manage-controller-after-validation.helper.js"

export const loginRouter = (app) => {
  app.get('/login', loginController)
  app.post(
    '/register',
    registerDto,
    manageController(registerController)
  )
}