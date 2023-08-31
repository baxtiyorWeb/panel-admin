import "./Container.css";
// eslint-disable-next-line react/prop-types
const Container = ({ children, open }) => {
  return (
    <div className="main">
      <div
        style={
          !open
            ? {
                width: "83.5%",
                transition: "0.3s ease",
                border: "1px solid #000",
              }
            : {
                width: "90%",
                transition: "0.3s ease",
                border: "1px solid #000",
              }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
