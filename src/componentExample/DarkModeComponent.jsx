import useDarkMode from "../customHooks/useDarkMode";

export default function DarkModeComponent(){
    const [darkMode, setDarkMode] = useDarkMode()

    return(
        <button
            onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
            style={{
                border: `1px solid ${darkMode ? "blue" : "black"}`,
                background: "none",
                color: darkMode ? "blue" : "black"
            }}
        >
            Toggle Dark Mode
        </button>
    )
}