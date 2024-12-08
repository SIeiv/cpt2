import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";

const WriterNav = () => {
    return (
        <div className={" h-10 border rounded-md flex items-center justify-center text-sm font-medium p-1"}>
            <NavLink className={"h-8"} to={"/main/writer/"}>
                <Button variant={"secondary"} className={"px-3 py-1.5 h-8"}>Все посты</Button>
            </NavLink>
            <NavLink className={"h-8"} to={"/main/writer/my"}>
                <Button variant={"secondary"} className={"px-3 py-1.5 h-8"}>Мои посты</Button>
            </NavLink>
            <NavLink className={"h-8"} to={"/main/writer/ch"}>
                <Button variant={"secondary"} className={"px-3 py-1.5 h-8"}>Черновики</Button>
            </NavLink>
        </div>
    );
};

export default WriterNav;