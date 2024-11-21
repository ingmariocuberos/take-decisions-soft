import { createType } from "./handlers/create-type.handler.js";
import { getAllTypes } from "./handlers/get-all-types.handler.js";

export const decisionController = {
  getAllTypes,
  createType
}