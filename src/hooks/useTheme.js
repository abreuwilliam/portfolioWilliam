import { useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("dark");

    return {
        theme,
        setTheme,
    };
}