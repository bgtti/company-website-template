import { INPUT_LENGTH } from "./constants.js";

/**
 * Function that validates a user's name input
 * 
 * It will check whether the param is a string and whether the trimmed input is within the minimum and maximum length input, according to the constants set in utils/constants.js
 * 
 * @param {string} name 
 * @returns {object}
 * Returns an object:
 * obj.response {bool} will be false if name is invalid and true otherwise
 * obj.message {string} will document the problem in case name is invalid
 * @example
 * nameValidation("John") => { response: true, message: "" }
 * nameValidation(7) => { response: false, message: "Name must be a string." }
 */
export function nameValidation(name) {
 if (typeof name !== "string") {
  return { response: false, message: "Name must be a string." };
 }

 const trimmedName = name.trim();

 if (
  trimmedName.length < INPUT_LENGTH.name.minValue ||
  trimmedName.length > INPUT_LENGTH.name.maxValue
 ) {
  return {
   response: false,
   message: `Name must have between ${INPUT_LENGTH.name.minValue} and ${INPUT_LENGTH.name.maxValue} characters.`
  };
 }

 return { response: true, message: "" };
};


/**
 * Function that validates a user's email input
 * 
 * It will check whether the param is a string and whether the trimmed input is within the minimum and maximum length input, according to the constants set in utils/constants.js
 * It will also check whether the input contains an @ character.
 * 
 * @param {string} email 
 * @returns {object}
 * Returns an object:
 * obj.response {bool} will be false if email is invalid and true otherwise
 * obj.message {string} will document the problem in case email is invalid
 * @example
 * emailValidation("John@example.com") => { response: true, message: "" }
 * emailValidation("hello") => { response: false, message: "Email format is not valid." }
 */
export function emailValidation(email) {
 // Validate type
 if (typeof email !== "string") {
  return { response: false, message: "Email must be a string." }
 }
 // Validate length
 const trimmedEmail = email.trim();
 if (trimmedEmail.length < INPUT_LENGTH.email.minValue || trimmedEmail.length > INPUT_LENGTH.email.maxValue) {
  return { response: false, message: `An email should be between ${INPUT_LENGTH.email.minValue} and ${INPUT_LENGTH.email.maxValue} characters.` }
 }
 // Validate format with regex
 const emailRegex = /^[^@]+@[^@]+$/; // Ensures at least one character before and after @
 if (!emailRegex.test(trimmedEmail)) {
  return { response: false, message: "Email format is not valid." };
 }
 return { response: true, message: "" }
}
