import { fetchContainer } from "./fetchContainer";

export const fetchFormData = async (data) => {
  try {
    const success = await fetchContainer('https://formsubmit.co/ajax/contato@hypecode.com.br', data);
    
    if (success) {
      console.log('Resposta do servidor: Dados enviados com sucesso');
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    return false;
  }
};

export default fetchFormData;
