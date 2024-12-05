import {Button} from "@/components/ui/button.tsx";
import newspaper from "@/assets/main/newspaper.svg";

const Sidebar = () => {
    return (
        <div className={"w-52 h-52 sticky top-8"}>
            <Button variant={"ghost"} className={"w-full h-10 py-3 px-4 flex gap-2.5 justify-start"}>
                <img src={newspaper} alt=""/>
                <span className={"text-slate-900 font-medium"}>Посты</span>

            </Button>
        </div>
    );
};

export default Sidebar;