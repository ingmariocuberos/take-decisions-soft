import OpenAI from "openai";
import dotenv from 'dotenv'
import { promptToChatGpt } from "../../constants/evaluation-constants/evaluation-constants.constant.js";

dotenv.config();

export const evaluationBl = {
  evaluate: async({decisionType, options, context}) => {

    let convertedOptions = '';
    options.forEach((option, index) => {
      convertedOptions = convertedOptions + `- Opción ${index + 1}: ${option} | `
    });

    const generatePrompt = promptToChatGpt(decisionType, convertedOptions, context);

    const gptAnswer = await askToGpt(generatePrompt);

    return gptAnswer;
  }
}

const askToGpt = async( promptMsg ) =>{

    const openai = new OpenAI({ apiKey: process.env.CHATGPT_API_KEY });

    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: promptMsg }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
}

const identifyMissingInfo = (missingInfo, attempt) => {

    if(missingInfo && attempt === '1'){
        return `

        ❌ ${missingInfo}. Por favor, provee esta información en un solo mensaje`;
    } else if(missingInfo && attempt === '2'){
        return `
            
        ❌❌ ${missingInfo}. La interacción termina aquí. *Si deseas ordenar un pedido vuelve a escribir Hola! en este chat*.`;
    } else {
        return '';
    }
}