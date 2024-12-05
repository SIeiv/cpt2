import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router";

const WriterNav = () => {
    return (
        <div>
            <NavLink to={""}>
                <Button>Все посты</Button>
            </NavLink>
            <NavLink to={"my"}>
                <Button>Мои посты</Button>
            </NavLink>
            <NavLink to={"ch"}>
                <Button>Черновики</Button>
            </NavLink>
        </div>
    );
};

export default WriterNav;