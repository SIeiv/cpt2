import styles from "@/pages/auth/auth.module.css";
import {Label} from "@/components/ui/label.tsx";
import AuthInput from "@/pages/auth/auth-input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";

const Login = () => {
    return (
        <div className={"bg-slate-50 w-full h-full flex items-center justify-center"}>
            <div className={styles.registerbox + " bg-white rounded-2xl flex flex-col gap-2.5"}>
                <div>
                    <Label className={"text-xl font-semibold text-slate-900"}>Войти</Label>
                </div>
                <div className={"flex flex-col gap-1.5"}>
                    <AuthInput title={"Почта"} placeholder={"Введите почту"}/>
                    <AuthInput title={"Пароль"} placeholder={"Введите пароль"}/>
                </div>
                <div>
                    <Button className={"w-full h-10"}>Войти</Button>
                </div>
                <div>
                    Нет аккаунта? <NavLink className={"text-indigo-500"} to={"/auth/register"}>Создать аккаунт</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;