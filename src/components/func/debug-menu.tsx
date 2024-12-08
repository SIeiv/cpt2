import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";

const DebugMenu = () => {
    return (
        <div className={"fixed bottom-0 left-0 bg-white p-2"}>
            <Label>Debug menu</Label>
            <div className={"grid gap-2 grid-cols-3"}>
                <NavLink to={"/main/writer"}>
                    <Button>Writer</Button>
                </NavLink>
                <NavLink to={"/main/reader"}>
                    <Button>Reader</Button>
                </NavLink>
                <NavLink to={"/auth/login"}>
                    <Button>Login</Button>
                </NavLink>
                <NavLink to={"/auth/register"}>
                    <Button>Register</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default DebugMenu;