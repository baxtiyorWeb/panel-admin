import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {ProSidebarProvider} from "react-pro-sidebar";
import ThemeProvider from "./components/context/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider storageKey={'vite-theme'}>
			<BrowserRouter>
				<ProSidebarProvider>
					<App/>
				</ProSidebarProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
)
