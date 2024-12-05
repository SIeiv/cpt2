import Header from "@/components/main/header.tsx";
import Sidebar from "@/components/main/sidebar.tsx";
import Posts from "@/components/main/posts.tsx";
import Ad from "@/components/main/ad.tsx";

const Main = () => {
    return (
        <div>
            <Header />
            <div className={"w-[1248px] flex items-start m-auto gap-8"}>
                <Sidebar/>
                <Posts/>
                <Ad/>
            </div>
        </div>

    );
};

export default Main;