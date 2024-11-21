import { decisionTypesModel } from "../../models/decision/decision-types.model.js"

export const decisionAo = {
  getAllTypes: async() => {
    return await decisionTypesModel.find({});
  },

  createType: async(name) =>{
    return await decisionTypesModel.create(
      { name }
    )
  }
}