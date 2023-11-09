/* eslint-disable react/prop-types */
const Overlay = ({ open, setOpen }) => {
  return (
    <div
      className="fixed w-full h-[100vh] top-0 left-0 bg-transparent"
      onClick={() => setOpen(!open)}
    ></div>
  );
};

export default Overlay;
