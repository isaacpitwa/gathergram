/**
 * @file httpClient.ts
 * @description This file sets up an Axios HTTP client instance with a base URL
 *              configured from the environment variable `REACT_APP_API_BASE_URL`.
 * @module httpClient
 */
import axios from "axios";

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default httpClient;