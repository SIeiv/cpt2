import {Label} from "@/components/ui/label.tsx";
import AuthInput from "@/components/auth/auth-input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router";
import RegisterUserPermission from "@/components/auth/register-user-permission.tsx";
import {useState} from "react";
import {IRegisterRequest} from "@/api/auth/types.ts";
import api from "@/api";

const Register = () => {
    const [LOCAL_email, LOCAL_setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [role, setRole] = useState(0);

    const [error, setError] = useState<any>(null);
    const navigate = useNavigate();

    const handleCreateAccount = async () => {
        if (!LOCAL_email || !password) {
            setError("Введены некорректные данные!");
        } else if (password !== passwordVerify) {
            setError("Пароли должны совпадать!");
        } else {
            try {
                const data: IRegisterRequest = {
                    email: LOCAL_email,
                    password,
                    role: role ? "author" : "reader",
                }

                const request = await api.auth.register(data);

                if (request.status === 200) {
                    localStorage.setItem("accessToken", request.data.accessToken);
                    localStorage.setItem("refreshToken", request.data.refreshToken);
                    localStorage.setItem("email", LOCAL_email);
                    navigate("/main");
                }
            } catch (error: any) {
                console.error(error);
                setError("Неверный формат почты или пароля!");
            }
        }
    }

    return (
        <div className={"bg-slate-50 w-screen h-screen flex items-center justify-center"}>
            <div className={"w-[416px] box-border p-4 bg-white rounded-2xl flex flex-col items-start gap-4"}>
                <div>
                    <Label className={"text-xl font-semibold text-slate-900"}>Создать аккаунт</Label>
                </div>
                <AuthInput title={"Почта"} placeholder={"Введите почту"} value={LOCAL_email} onChange={LOCAL_setEmail}/>
                <AuthInput type={"password"} title={"Пароль"} placeholder={"Введите пароль"} value={password} onChange={setPassword}/>
                <AuthInput type={"password"} title={"Повторите пароль"} placeholder={"Повторите пароль"} value={passwordVerify}
                           onChange={setPasswordVerify}/>

                <RegisterUserPermission items={["Читатель", "Автор"]} activeButton={role} setActiveButton={setRole}/>
                {error && <Label className={"text-md text-red-600"}>
                    {error}
                </Label>}
                <div className={"w-full"}>
                    <Button onClick={handleCreateAccount} className={"w-full h-10"}>Создать аккаунт</Button>
                </div>
                <div>
                    Уже есть аккаунт? <NavLink className={"text-indigo-500"} to={"/auth/login"}>Войти</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;