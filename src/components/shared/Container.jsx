const Container = ({ children }) => {
    return (
        <div className="main">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Container