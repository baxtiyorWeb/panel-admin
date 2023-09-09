import "./Container.css";
// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
    return (
        <div className="main">
            <div
                style={

                    {
                        width: "84.5%",
                        transition: "0.3s ease",
                        padding: "15px"
                    }

                }
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
