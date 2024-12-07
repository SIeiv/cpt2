import Header from "@/components/main/header.tsx";
import Sidebar from "@/components/main/sidebar.tsx";
import Posts from "@/components/main/posts.tsx";
import Ad from "@/components/main/ad.tsx";

const Main = () => {
    return (
        <div className={"h-full"}>
            <Header />
            <div className={"w-[1248px] h-full flex items-start m-auto gap-8 mt-12"}>
                <Sidebar/>
                <Posts/>
                <Ad/>
            </div>
        </div>

    );
};

export default Main;