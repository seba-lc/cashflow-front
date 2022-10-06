import axios from "axios";

export const  axiosBackClient = axios.create({
  baseURL: 'http://localhost:4000/api/incomesproject'
});