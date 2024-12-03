import styles from "@/pages/auth/auth.module.css";
import {Label} from "@/components/ui/label.tsx";
import AuthInput from "@/pages/auth/auth-input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";

const Register = () => {
    return (
        <div className={"bg-slate-50 w-full h-full flex items-center justify-center"}>
            <div className={styles.registerbox + " bg-white rounded-2xl flex flex-col gap-2.5"}>
                <div>
                    <Label className={"text-xl font-semibold text-slate-900"}>Создать аккаунт</Label>
                </div>
                <div className={"flex flex-col gap-1.5"}>
                    <AuthInput title={"Почта"} placeholder={"Введите почту"}/>
                    <AuthInput title={"Пароль"} placeholder={"Введите пароль"}/>
                    <AuthInput title={"Повторите пароль"} placeholder={"Повторите пароль"}/>

                </div>
                <div>
                    <Button className={"w-full h-10"}>Создать аккаунт</Button>
                </div>
                <div>
                    Уже есть аккаунт? <NavLink className={"text-indigo-500"} to={"/auth/login"}>Войти</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;