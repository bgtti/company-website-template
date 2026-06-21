import { api } from "../axios"
import { apiEndpoints } from "../apiEndpoints"
import { nameValidation, emailValidation } from "../../utils/authUtils"

/**
 * Function makes api call to send a contact form message.
 * 
 * @param {object} data 
 * @param {string} data.name 
 * @param {string} data.email 
 * @param {string} data.subject
 * @param {string} data.message 
 * @param {string} data.occupation 
 * @returns {Promise<object>} // with boolean response and string message
 */
export function sendMessage(data = {}) {
  // checking if data was received correctly
  const name = data.name ? data.name : false;
  const email = data.email ? data.email : false;
  const occupation = data.occupation ?? "";
  const subject = data.subject ? data.subject : false;
  const message = data.message ? data.message : false;

  const errorResponse = {
    response: false,
    message: "Error: Invalid input."
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
    console.error("One or more required fields missing.")
    return Promise.resolve(errorResponse)
  }

  if (occupation.trim() !== "") {
    return Promise.resolve({
      response: true,
      message: "Message sent successfully."
    });
  }


  // validating the input
  const nameIsValid = nameValidation(name);
  const emailIsValid = emailValidation(email);
  const dataIsValid = emailIsValid.response && nameIsValid.response;

  if (!dataIsValid) {
    console.error("One or more required fields failed validation.")
    return Promise.resolve(errorResponse)
  }

  let requestData = {
    "name": name,
    "email": email,
    "subject": subject,
    "message": message,
    "occupation": occupation,
  }

  // preparing the returned response
  let res = {
    response: false,
    message: "",
  }

  //DELETE THIS PART BELLOW (BACKEND DE-ACTIVATION)
  return Promise.resolve({
    response: true,
    message: "Message sent successfully."
  });
  //DELETE THIS PART ABOVE (SO EMAIL SENDING CAN WORK)

  // making the request
  const sendMessage = async () => {
    try {
      const response = await api.post(apiEndpoints.contact, requestData, {
        validateStatus: () => true //prevents Axios from throwing error if response status not 2XX
      })

      let responseStatus = response.status;

      switch (responseStatus) {
        case 200:
          res.response = true;
          res.message = "Message sent successfully."
          break;
        case 400:
          res.message = response.data?.message || "Error: Message sending failed.";
          break;
        case 429:
          res.message = "Error: Too many requests. Please wait and try again later."
          break;
        default:
          res.message = "Error: Please refresh the page and try again."
          break;
      }
    }
    catch (error) {
      res.message = "Error: Please refresh the page and try again."
      console.warn(`Api handler sendMessage encountered an error: ${error}`)
    }
    return res;
  }

  return sendMessage();
};