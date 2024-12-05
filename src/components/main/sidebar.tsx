import {Button} from "@/components/ui/button.tsx";
import newspaper from "@/assets/main/newspaper.svg";
import {NavLink} from "react-router";
import SidebarButton from "@/components/main/sidebarButton.tsx";

const Sidebar = () => {
    return (
        <div className={"w-52 h-52 sticky top-8 flex flex-col justify-between"}>
            <div>
                <SidebarButton/>
                <SidebarButton/>
            </div>
            <div>
                <SidebarButton/>
            </div>
        </div>
    );
};

export default Sidebar;