import logo from "@/assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";

const Header = () => {
    const email = localStorage.getItem("email");

    return (
        <div className={"w-full h-20 bg-white sticky top-0 z-20"}>
            <div className={"w-[1248px] h-full m-auto flex items-center justify-between"}>
                <img src={logo} alt=""/>
                <div className={"flex items-center gap-3"}>
                    <span>{email}</span>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{email && (email[0] + email[1]).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
};

export default Header;