import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {FC} from "react";

interface AuthInputProps {
    title: string;
    placeholder: string;
}

const AuthInput: FC<AuthInputProps> = ({title, placeholder}) => {
    return (
        <div>
            <Label className={"text-sm font-medium text-slate-900"}>{title}</Label>
            <Input className={"w-96 h-10 text-xl mt-1.5"} placeholder={placeholder} />
        </div>
    );
};

export default AuthInput;