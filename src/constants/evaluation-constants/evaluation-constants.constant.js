export const promptToChatGpt = (decisionType, convertedOptions, context) => {
  return `
    ¿Podrías ayudarme a tomar una decisión importante en mi vida? Te voy a dar el tipo de decisión, las opciones que tengo y el contexto de la situación:
    El tipo de decisión es: ${decisionType},
    Las opciones que tengo son las siguientes:
    ${ convertedOptions }
    Este es el contexto de mi situación:
    ${context}
    Por favor, ayúdame a tomar la decisión más centrada con respecto a mi contexto. Dame tus consideraciones, pros y contras de opción, posibles consecuencias y para finalizar, dime para tí cual sería la mejor opción a tomar.
    Ten en cuenta que al ser la decisión tan importante en mi vida, requiero que te decantes por una de las opciones que te estoy dando. A pesar de ello, si me quieres dar algún consejo adicional te lo agradeceré, pero es necesario que me digas exactamente cual de las opciones que te estoy dando sería mejor para mi y para mi contexto actual`
}