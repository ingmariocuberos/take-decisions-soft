import { loginRouter } from "./login-routes/login.router.js"

export const router = (app) =>{
  loginRouter(app);
}