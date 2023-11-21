// eslint-disable-next-line react/prop-types
export const SharedModal = ({ children }) => {
  return (
    <div
      className={
        "fixed w-[50%] h-[50vh] top-[23%] left-[30%] z-10 bg-[#3B4452] rounded-md shadow-2xl text-[#fff]"
      }
    >
      {children}
    </div>
  );
};
