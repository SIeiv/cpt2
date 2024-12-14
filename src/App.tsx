import Auth from "@/pages/auth.tsx";
import {Routes, Route} from "react-router";
import Main from "@/pages/main.tsx";
import DebugMenu from "@/components/func/debug-menu.tsx";
import "@/App.css";
import Redirect from "@/components/func/redirect.tsx";
import {useState} from "react";
import {IPost} from "@/types.ts";

function App() {
    return (
        <div className={"w-full h-full bg-slate-50"}>
            <DebugMenu/>
            <Routes>
                <Route path="/auth/*" element={<Auth/>}/>
                <Route path="/main/*" element={<Main/>}/>
                <Route path="/" element={<Redirect to={"/auth/login"}/>}/>
            </Routes>

        </div>
    )
}

export default App
