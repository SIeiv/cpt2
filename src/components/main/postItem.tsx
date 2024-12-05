import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Label} from "@/components/ui/label.tsx";
import PostItemButton from "@/components/main/post-item-button.tsx";
import like from "@/assets/main/heart.svg";
import comment from "@/assets/main/message-circle.svg";
import {NavLink} from "react-router";
import {FC} from "react";

interface postItemProps {
    type: "default" | "clickable";
}

const PostItemContent = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex"}>
                <Avatar>
                    <AvatarImage src=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={"flex flex-col ml-2"}>
                    <Label className={"font-normal text-sm text-slate-900 h-6 flex items-center"}>
                        pochta@gmail.com
                    </Label>
                    <Label className={"font-medium text-xs text-slate-400 h-5 flex items-center"}>31 октября</Label>
                </div>
            </div>
            <div>
                <Label className={"font-semibold text-xl text-slate-900"}>Заголовок</Label>
            </div>
            <div className={"w-full h-[432px] bg-slate-300 rounded-md"}>
            </div>
            <Label className={"w-full font-normal text-sm text-slate-900 leading-6"}>
                Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и
                реализации распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны:
                перспективное планирование не даёт нам иного выбора, кроме определения экономической целесообразности
                принимаемых решений.
            </Label>
            <div className={"flex gap-3"}>
                <PostItemButton title={"110"} img={like}/>
                <PostItemButton title={"110"} img={comment}/>
            </div>
        </div>
    );
}

const PostItem: FC<postItemProps> = ({type}) => {

    if (type === "clickable") {
        return (
            <NavLink to={"post"} className={"w-full bg-white p-4 rounded-xl hover:bg-slate-200 transition-colors duration-200 cursor-auto"}>
                <PostItemContent/>
            </NavLink>
        );
    } else if (type === "default") {
        return (
            <div className={"w-full bg-white p-4 rounded-xl"}>
                <PostItemContent/>
            </div>
        );

    }
};

export default PostItem;