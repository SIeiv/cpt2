import {Button} from "@/components/ui/button.tsx";
import {FC} from "react";

interface PostItemButtonProps {
    img: string;
    title: string | number;
}

const PostItemButton: FC<PostItemButtonProps> = ({img, title}) => {
    return (
        <Button variant={"secondary"} className={"w-[60px] h-7"}>
            <img src={img} alt=""/>
            <span className={"text-slate-400"}>{title}</span>
        </Button>
    );
};

export default PostItemButton;