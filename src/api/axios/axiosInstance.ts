import axios from "axios";
import {getToken} from "../services/AuthServices";
import {HttpMessage} from "./messages/HttpMessage";

/**
 * Axios instance
 */
const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {Authorization: `Bearer ${getToken()}`},
});

/**
 * Apply interceptors to the instance.
 */
instance.interceptors.response.use(response => response, error => {
  HttpMessage(error.response.status);
});

/**
 * Export the instance.
 */
export const http = instance;

