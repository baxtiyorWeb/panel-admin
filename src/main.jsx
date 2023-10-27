import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {ProSidebarProvider} from "react-pro-sidebar";
import ThemeProvider from "./components/context/ThemeProvider.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider storageKey={'vite-theme'}>
            <BrowserRouter>
                <ProSidebarProvider>
                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
                    >
                        <App/>
                    </DevSupport>
                </ProSidebarProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
