import {FaMoon, FaSun} from "react-icons/fa";
import {useTheme} from "../../hooks/useTheme.js";

const ThemeToggle = () => {
	const {theme, setTheme} = useTheme()
	
	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	
	return (
			<div className="light-dark w-[80px] h-[80px] border rounded-[100%]" onClick={changeTheme}>
				{theme === 'dark' ? <FaSun /> : <FaMoon />}
			</div>
	)
}
export default ThemeToggle
