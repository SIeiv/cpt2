import './App.css'
import Auth from "@/pages/auth/auth.tsx";
import { Routes, Route } from "react-router";
import Main from "@/pages/main/main.tsx";


function App() {
    return (
        <div className={"w-full h-full bg-slate-50"}>
            <Routes>
                <Route path="/auth/*" element={<Auth/>} />
                <Route path="/main/*" element={<Main/>} />
            </Routes>
        </div>
    )
}

export default App
