import useThemeToggle from "./useThemeToggle.tsx";
import type { Theme } from "../../src/types.ts";
import { useEffect } from "react";

function useLocalStorage(key: string, initialValue: Theme) {
    const [theme, toggleTheme] = useThemeToggle(initialValue);

    useEffect(() => {
        localStorage.setItem(key, theme);
    }, [theme, key]);

    return [theme, toggleTheme] as const;
}

export default useLocalStorage;
