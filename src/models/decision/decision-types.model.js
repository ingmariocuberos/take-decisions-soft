import mongoose from "mongoose";

const decisionTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export const decisionTypesModel = mongoose.model('DecisionTypes', decisionTypesSchema);