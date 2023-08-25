import { createContext, useState } from "react"


const Context = createContext(false)

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    const [sideToggle, setSideToggle] = useState(false)
    return (
        <Context.Provider value={[sideToggle, setSideToggle]}>
            {children}
        </Context.Provider >
    )
}

export default AppProvider


