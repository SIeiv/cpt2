import {Label} from "@/components/ui/label.tsx";
import {FC} from "react";

interface AuthInputProps {
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    ref?: any;
}

const AuthInput: FC<AuthInputProps> = ({title, placeholder, value, onChange, type, ref}) => {
    return (
        <div>
            <Label className={"text-sm font-medium text-slate-900"}>{title}</Label>
            <div>
                <input ref={ref} type={type} className={"w-96 h-10 mt-1.5 text-base p-3 border border-slate-300 rounded-md"}
                       placeholder={placeholder} value={value}
                       onChange={(e) => {onChange(e.target.value)}}/>
            </div>
        </div>
    );
};

export default AuthInput;