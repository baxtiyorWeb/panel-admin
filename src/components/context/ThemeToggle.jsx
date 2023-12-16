import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme.js";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (<button
        className="light-dark
        outline-none dark:focus:bg-[#3B4452]
        dark:hover:bg-[#3B4452]
        dark:focus:ring-offset-1
        dark:active:bg-[#353C48]"
        onClick={changeTheme}>
        {theme === 'dark' ?
            <FaSun /> : <FaMoon />}
    </button>)
}
export default ThemeToggle
