import axios from "axios";

export const privateRoutes = axios.create({ baseURL: '/api/private/' })
export const publicRoutes = axios.create({ baseURL: '/api/public/' })