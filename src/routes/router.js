import { decisionRouter } from "./decision-routes/decision.router.js";
import { evaluationRouter } from "./evaluation-routes/evaluation.router.js";
import { loginRouter } from "./login-routes/login.router.js"

export const router = (app) =>{
  loginRouter(app);
  decisionRouter(app);
  evaluationRouter(app);
}