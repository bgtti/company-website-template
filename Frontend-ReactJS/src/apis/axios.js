import axios from "axios";
import { redirect } from "react-router-dom";
import { BASE_BACKEND_URL } from "../config_variables"

// Axios instance:

/**
 * ----------------------------------------------------
 * API calls in this application use the Axios library.
 * @see {@link https://axios-http.com}
 * -----------------------------------------------------
 * @example
 * 
 * Usage:
 * const response = await api.post(apiEndpoints.login, dataToPost)
 */
export const api = axios.create({
 baseURL: BASE_BACKEND_URL,
 timeout: 5000,
 withCredentials: true,
 headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
 }
});