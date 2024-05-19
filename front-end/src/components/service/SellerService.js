import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8089/seller';
export const create_seller = (data) => axios.post(REST_API_BASE_URL + "/create", data);
export const login = (data) => axios.post(REST_API_BASE_URL + "/login" ,data)