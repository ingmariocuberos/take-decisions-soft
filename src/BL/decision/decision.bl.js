import { decisionAo } from "../../AO/decision/decision.ao.js"

export const decisionBl = {
  getAllTypes: async() => {
    return decisionAo.getAllTypes();
  },
  createType: async({name}) => {
    return decisionAo.createType(name);
  }
}