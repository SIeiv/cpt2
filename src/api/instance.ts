import axios from "axios";
import endpoints from "@/api/endpoints.ts";

export const axiosInstance = axios.create({});

const urlsSkipAuth = [endpoints.AUTH.LOGIN, endpoints.AUTH.REGISTER, endpoints.AUTH.REFRESH_TOKEN];

axiosInstance.interceptors.request.use(async (config) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
        return config;
    }

    config.headers.contentType = "application/json";

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
})