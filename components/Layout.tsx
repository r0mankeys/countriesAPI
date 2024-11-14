import React, { useEffect, createContext } from "react";
import Navbar from "../components/Navbar.tsx";
import useLocalStorage from "../components/customHooks/useLocalStorage.tsx";
import type { Theme } from "../src/types.ts";

interface LayoutProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<Theme>("light");

function Layout({ children }: LayoutProps) {

    let initialTheme: Theme; 

    if (localStorage.getItem('theme')) {
        initialTheme = localStorage.getItem('theme') as Theme
    } else {
        initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" 
    }
    const [theme, toggleTheme] = useLocalStorage("theme", initialTheme);

    useEffect(() => {
        document.body.className = theme // Set the theme class on the body element 
        if (theme === "light") {
            document.documentElement.style.backgroundColor = "#f7fafc"; // Scroll wedge colour correction
        } else {
            document.documentElement.style.backgroundColor = "#1f2022";
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={theme}>
            <Navbar handleClick={() => toggleTheme()} />
            {children}
        </ThemeContext.Provider>
    );
}

export default Layout;
