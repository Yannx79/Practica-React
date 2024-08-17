import axios from "axios";

export const tesloApi = axios.create({
    baseURL: import.meta.env.VITE_TESLO_API_URL,
});