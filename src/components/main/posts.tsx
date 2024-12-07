import PostItem from "@/components/main/postItem.tsx";
import {Route, Routes} from "react-router";
import WriterNav from "@/components/main/writer-nav.tsx";
import {Button} from "@/components/ui/button.tsx";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";


const Posts = () => {
    const [createPostDialog, setCreatePostDialog] = useState(false);
    const [createPostPic, setCreatePostPic] = useState(true);

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
                </div>}/>

                <Route path="writer/*" element={<div>
                    <Routes>
                        <Route path={"/*"} element={<div className={"flex items-start flex-col gap-[32px]"}>
                            <WriterNav/>
                            <Routes>

                                <Route path={"my"} element={
                                    <div className={"w-full"}>
                                        <Button onClick={() => {setCreatePostDialog(true)}} className={'w-full'}>Создать пост</Button>

                                        <Dialog open={createPostDialog} onOpenChange={() => {setCreatePostDialog(false)}}>
                                            <DialogContent className={"w-[512px] box-content"}>
                                                <DialogHeader>
                                                    <DialogTitle className={"mb-4 font-semibold text-xl text-slate-900"}>Создать пост</DialogTitle>
                                                    <DialogDescription className={"flex flex-col gap-4 items-start"}>
                                                        <div className="grid w-full items-center gap-1.5">
                                                            <Label className={"text-slate-900 font-semibold text-sm"}>Заголовок</Label>
                                                            <Input className={"w-full"} placeholder="Введите заголовок" />
                                                        </div>
                                                        {createPostPic
                                                            ? <div className={"w-[512px] h-[288px] relative"}>
                                                                <div className={"bg-red-200 rounded-md transition-200 absolute z-10"}></div>
                                                                <div className={"bg-slate-300 w-full h-full rounded-md absolute"}></div>
                                                            </div>
                                                            : <div>
                                                                <Button>Загрузить картинку</Button>
                                                            </div>
                                                        }

                                                        <div className="grid w-full items-center gap-1.5">
                                                            <Label className={"text-slate-900 font-semibold text-sm"}>Контент</Label>
                                                            <Textarea className={"w-full"} placeholder={"Введите контент"}/>
                                                        </div>
                                                        <div className={"flex"}>
                                                            <Button>Опубликовать пост</Button>
                                                            <Button variant={"secondary"}>Отправить в черновики</Button>
                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>

                                </div>}/>
                            </Routes>
                            <div className={"flex flex-col gap-[72px]"}>
                                <PostItem type={"writer-clickable"}/>
                                <PostItem type={"writer-clickable"}/>
                            </div>
                        </div>}/>
                        <Route path={"post"} element={<PostItem type={"writer-default"}/>}/>
                    </Routes>

                </div>}/>
                <Route path={"post"} element={<PostItem type={"default"}/>}/>
            </Routes>
        </div>
    );
};

export default Posts;