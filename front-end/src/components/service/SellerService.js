import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8089/seller';

const REST_API_LINK_URL = 'http://localhost:8089/link';

export const create_seller = (data) => axios.post(REST_API_BASE_URL + "/create", data);
export const login = (data) => axios.post(REST_API_BASE_URL + "/login" ,data);
export const createRefferalCode = (data) => axios.post(REST_API_BASE_URL + "/refferal" ,data);

export const createSellerLink = (data) => axios.post(REST_API_LINK_URL + "/create" ,data);

export const searchSellerLink = (data) => axios.post(REST_API_LINK_URL + "/search" ,data);
export const deleteSellerLink = (data) => axios.post(REST_API_LINK_URL + "/delete" ,data);

export const call_create_user_Link = (data) => axios.post(REST_API_LINK_URL + "/uselink" ,data);

