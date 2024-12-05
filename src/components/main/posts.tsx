import PostItem from "@/components/main/postItem.tsx";
import {Route, Routes} from "react-router";
import WriterNav from "@/components/main/writer-nav.tsx";

const Posts = () => {
    return (
        <div className={"w-[768px] h-[1500px]"}>
            <Routes>
                <Route path="reader/*" element={<div className={"flex flex-col gap-[72px]"}>
                    <Routes>
                        <Route path={""} element={<div className={"flex flex-col gap-[72px]"}>
                            <PostItem type={"clickable"}/>
                            <PostItem type={"clickable"}/>
                        </div>}/>
                        <Route path={"post"} element={<PostItem type={"default"}/>}/>
                    </Routes>
                </div>} />

                <Route path="writer/*" element={<div className={"flex flex-col gap-[72px]"}>
                    <Routes>
                        <Route path={""} element={<div className={"flex flex-col gap-[24px]"}>
                            <WriterNav/>
                            <Routes>
                                <Route path={""} element={<div className={"flex flex-col gap-[72px]"}>
                                    <PostItem type={"clickable"}/>
                                    <PostItem type={"clickable"}/>
                                </div>}/>
                            </Routes>

                        </div>}/>
                        <Route path={"post"} element={<PostItem type={"default"}/>}/>
                    </Routes>
                </div>} />
            </Routes>
        </div>
    );
};

export default Posts;