import {Label} from "@/components/ui/label.tsx";
import AuthInput from "@/components/auth/auth-input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {ILoginRequest} from "@/api/auth/types.ts";
import api from "@/api";

const Login = () => {

    const [LOCAL_email, LOCAL_setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<any>(null);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data: ILoginRequest = {
                email: LOCAL_email,
                password
            }

            const request = await api.auth.login(data);

            if (request.status === 200) {

                localStorage.setItem("accessToken", request.data.accessToken);
                localStorage.setItem("refreshToken", request.data.refreshToken);
                localStorage.setItem("email", LOCAL_email);
                navigate("/main");
            }
        } catch (error: any) {
            console.error(error);
            setError(error);
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        console.log("Access Token updated: ", token);
        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            console.log("Access Token info: ", decodedToken);
        }

    }, []);

    return (
        <div className={"bg-slate-50 w-screen h-screen flex items-center justify-center"}>
            <div className={"w-[416px] box-border p-4 bg-white rounded-2xl flex flex-col gap-4"}>
                <div>
                    <Label className={"text-xl font-semibold text-slate-900"}>Войти</Label>
                </div>
                <AuthInput title={"Почта"} placeholder={"Введите почту"} value={LOCAL_email} onChange={LOCAL_setEmail}/>
                <AuthInput type={"password"} title={"Пароль"} placeholder={"Введите пароль"} value={password} onChange={setPassword}/>
                {error && <Label className={"text-md text-red-600"}>
                    {(error.status === 400 || error.status === 403) ? "Неверный email или пароль" : error}
                </Label>}
                <div>
                    <Button onClick={handleLogin} className={"w-full h-10"}>Войти</Button>
                </div>
                <div>
                    Нет аккаунта? <NavLink className={"text-indigo-500"} to={"/auth/register"}>Создать аккаунт</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;