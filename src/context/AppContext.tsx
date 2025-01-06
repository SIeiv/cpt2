import {createContext, useContext} from "react";

interface AppContextData {
    accessToken: string;
    setAccessToken: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
}

const AppContext = createContext<AppContextData | null>(null);

export const AppProvider = AppContext.Provider;

export const useAppContext = () => {
    const data = useContext(AppContext);

    if (!data) {
        throw new Error("useAppContext must be used within the AppProvider");
    }

    return data;
}