const baseURL = "https://cpt-stage-2.duckdns.org/api/";

const endpoints = {
    AUTH: {
        REGISTER: baseURL + "auth/register",
        LOGIN: baseURL + "auth/login",
        REFRESH_TOKEN: baseURL + "auth/refresh-token",
    },
    POST: {
        GET_POSTS: baseURL + "posts",
    }
}

export default endpoints;