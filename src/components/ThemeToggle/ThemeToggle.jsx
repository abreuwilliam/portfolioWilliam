import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return null;
}