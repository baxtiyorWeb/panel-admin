import {useContext} from "react";
import {ThemeContext} from "../components/context/ThemeProvider.jsx";

const useTheme = () => {
	const theme = useContext(ThemeContext)
	
	if (theme === undefined) {
		throw new Error('error theme')
	}
	
	return theme
}

export {useTheme}