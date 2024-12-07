import Auth from "@/pages/auth/auth.tsx";
import { Routes, Route } from "react-router";
import Main from "@/pages/main/main.tsx";
import DebugMenu from "@/components/debug-menu.tsx";

function App() {
    return (
        <div className={"w-full h-full bg-slate-50"}>
            <DebugMenu/>
            <Routes>
                <Route path="/auth/*" element={<Auth/>} />
                <Route path="/main/*" element={<Main/>} />
            </Routes>
        </div>
    )
}

export default App
