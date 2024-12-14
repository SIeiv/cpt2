import {Label} from "@/components/ui/label.tsx";
import AuthInput from "@/components/auth/auth-input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";
import RegisterUserPermission from "@/components/auth/register-user-permission.tsx";

const Register = () => {
    return (
        <div className={"bg-slate-50 w-screen h-screen flex items-center justify-center"}>
            <div className={"w-[416px] box-border p-4 bg-white rounded-2xl flex flex-col items-start gap-4"}>
                <div>
                    <Label className={"text-xl font-semibold text-slate-900"}>Создать аккаунт</Label>
                </div>
                <AuthInput title={"Почта"} placeholder={"Введите почту"}/>
                <AuthInput title={"Пароль"} placeholder={"Введите пароль"}/>
                <AuthInput title={"Повторите пароль"} placeholder={"Повторите пароль"}/>

                <RegisterUserPermission items={["Читатель", "Автор"]}/>
                <div className={"w-full"}>
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