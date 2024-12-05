import {Button} from "@/components/ui/button.tsx";
import newspaper from "@/assets/main/newspaper.svg";
import {NavLink} from "react-router";


const SidebarButton = () => {
    return (
        <NavLink to={"/"}>
            <Button variant={"ghost"} className={"w-full h-10 py-3 px-4 flex gap-2.5 justify-start"}>
                <img src={newspaper} alt=""/>
                <span className={"text-slate-900 font-medium"}>Посты</span>
            </Button>
        </NavLink>
    );
};

export default SidebarButton;