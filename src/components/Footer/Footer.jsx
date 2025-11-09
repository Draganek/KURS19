import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Footer() {
    const themeContext = useContext(ThemeContext)

    return (
        <p className={`text-${themeContext.color}`}>Stopka</p>
    )
}