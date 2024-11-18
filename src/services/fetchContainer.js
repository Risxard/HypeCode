import axios from "axios";
import emailjs from '@emailjs/browser';

const axiosRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw new Error('Falha ao enviar com axiosRequest');
    }
  };
  
  const sendEmailJs = (data) => {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      message: data.message,
      email: data.email,
      tel: data.tel,
    };
  
    return emailjs
      .send(
        "service_hhgw40n",
        "template_6ki05b6",
        templateParams,
        "W15P-HcRGyq90Swya"
      )
      .then((response) => {
        console.log("EMAIL ENVIADO ", response.status, response.text);
        return true;
      })
      .catch((err) => {
        console.error("ERRO AO ENVIAR EMAIL: ", err);
        throw new Error('Falha ao enviar com sendEmailJs');
      });
  };
  
  export const fetchContainer = async (url,data) => {
    try {
      await axiosRequest(url,data);
      return true;
    } catch (error) {
      console.warn("axiosRequest falhou, tentando sendEmailJs...");
      try {
        await sendEmailJs(data);
        return true;
      } catch (error) {
        console.error('Erro ao enviar dados com sendEmailJs:', error);
        return false;
      }
    }
  };
  