import {axiosInstance} from "@/api/instance.ts";
import endpoints from "@/api/endpoints.ts";
import {
    IAuthResponse,
    ILoginRequest,
    IRefreshTokenRequest,
    IRegisterRequest,
} from "@/api/auth/types.ts";
import {AxiosPromise} from "axios";

export const login = (params: ILoginRequest): AxiosPromise<IAuthResponse> =>
    axiosInstance.post(endpoints.AUTH.LOGIN, params);

export const register = (params: IRegisterRequest): AxiosPromise<IAuthResponse> =>
    axiosInstance.post(endpoints.AUTH.REGISTER, params);

export const refreshToken = (params: IRefreshTokenRequest): AxiosPromise<IAuthResponse> =>
    axiosInstance.post(endpoints.AUTH.REFRESH_TOKEN + "?refreshToken=" + params);