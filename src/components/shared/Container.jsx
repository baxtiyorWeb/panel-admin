import "./Container.css";
// eslint-disable-next-line react/prop-types
const Container = ({ children, open }) => {
  return (
    <div className="main">
      <div
        style={
          !open
            ? {
                width: "84.5%",
                transition: "0.3s ease",
              }
            : {
                width: "94%",
                transition: "0.3s ease",
              }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
