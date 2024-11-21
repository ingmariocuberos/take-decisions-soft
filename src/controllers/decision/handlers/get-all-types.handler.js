export const getAllTypes = async (_, res) => {
  try {
    const allDecisionTypes = await decisionBl.getAllTypes();

    if(allDecisionTypes){
      standardResponse(
        res,
        'Tipos de decisiones importados con éxito', 
        true, 
        200, 
        allDecisionTypes)
    } else {
      standardResponse(
        res,
        'No se obtuvo ninguna tipología de decisión', 
        false,
        204
      )
    }
  } catch (error) {
    standardResponse(
      res,
      'No se pudieron obtener los tipos de decisiones', 
      false,
      422
    )
    console.log(error);
  }
}