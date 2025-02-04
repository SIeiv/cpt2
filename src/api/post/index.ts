import {axiosInstance} from "@/api/instance.ts";
import endpoints from "@/api/endpoints.ts";

import {AxiosPromise} from "axios";

export const getPosts = (): AxiosPromise =>
    axiosInstance.get(endpoints.POST.GET_POSTS);

