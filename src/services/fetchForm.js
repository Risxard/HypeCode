import axios from "axios";
import emailjs from '@emailjs/browser';

// const sendEmailJs = (data) => {
//   const templateParams = {
//     from_name: `${data.firstName} ${data.lastName}`,
//     message: data.message,
//     email: data.email,
//     tel: data.tel,
//   };

//   emailjs
//     .send(
//       "service_hhgw40n",
//       "template_6ki05b6",
//       templateParams,
//       "W15P-HcRGyq90Swya"
//     )
//     .then(
//       (response) => {
//         console.log("EMAIL ENVIADO ", response.status, response.text);
//       },
//       (err) => {
//         console.log("ERRO: ", err);
//       }
//     );
// };


// contato@hypecode.com.br


const fetchFormData = async (data) => {
  try {
    const response = await axios.post('https://formsubmit.co/ajax/contato@hypecode.com.br', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Resposta do servidor:', response.data);
    return true;

  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    // sendEmailJs(data)
    return false;
  }
}

export async function getFormData(data) {
  return await fetchFormData(data);
}