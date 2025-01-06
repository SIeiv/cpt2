import Auth from "@/pages/auth.tsx";
import {Routes, Route} from "react-router";
import Main from "@/pages/main.tsx";
import DebugMenu from "@/components/func/debug-menu.tsx";
import "@/App.css";
import Redirect from "@/components/func/redirect.tsx";
import {AppProvider} from "@/context/AppContext.tsx";
import {useState} from "react";

function App() {
    const [accessToken, setAccessToken] = useState("");
    const [email, setEmail] = useState("");

    return (
        <AppProvider value={{accessToken, setAccessToken, email, setEmail}}>
            <div className={"w-full h-full bg-slate-50"}>
                <DebugMenu/>
                <Routes>
                    <Route path="/auth/*" element={<Auth/>}/>
                    <Route path="/main/*" element={<Main/>}/>
                    <Route path="/" element={<Redirect to={"/auth/login"}/>}/>
                </Routes>

            </div>
        </AppProvider>
    )
}

export default App
