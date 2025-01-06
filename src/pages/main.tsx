import Header from "@/components/main/header/header.tsx";
import Sidebar from "@/components/main/sidebar/sidebar.tsx";
import Posts from "@/components/main/posts/posts.tsx";
import Ad from "@/components/main/ad.tsx";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {decodeAccessToken, IAccessTokenInfo, isTokenExpired} from "@/jwt-helpers.ts";
import api from "@/api";
import {AxiosResponse} from "axios";

const Main = () => {
    const navigate = useNavigate();

    let refreshTokenRequest: AxiosResponse | null = null;
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const handleGetPosts = async () => {
        try {
            const request = await api.post.getPosts();

            if (request.status === 200) {
                console.log(request);
            }
        } catch (error: any) {
            console.error(error);
        }

    }

    const f = async () => {
        try {

            if (!accessToken || isTokenExpired(accessToken)) {
                if (refreshTokenRequest === null) {
                    refreshTokenRequest = await api.auth.refreshToken(refreshToken);
                }
            }

            const res = await refreshTokenRequest;
            refreshTokenRequest = null;

            localStorage.setItem("accessToken", res!.data.accessToken);
            localStorage.setItem("refreshToken", res!.data.refreshToken);

            console.log("token refreshed");
        } catch (error) {
            console.error(error);
        }
    }

    const temporaryRedirect = () => {
        if (accessToken) {
            const accessTokenData: IAccessTokenInfo   = decodeAccessToken(accessToken);
            if (accessTokenData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === "Author") {
                navigate("/main/writer");
            } else {
                navigate("/main/reader");
            }
        }

    }

    useEffect(() => {
        f();

        if (!localStorage.getItem("accessToken")) {
            navigate("/auth/login");
        }

        //test
        handleGetPosts();
        temporaryRedirect();
    }, [])

    return (
        <div className={"h-full"}>
            <Header/>
            <div className={"w-[1248px] h-full flex items-start m-auto gap-8 mt-12"}>
                <Sidebar/>
                <Posts/>
                <Ad/>
            </div>
        </div>

    );
};

export default Main;