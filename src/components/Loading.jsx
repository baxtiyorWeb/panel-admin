import ClipLoader from "react-spinners/ClipLoader.js";

// eslint-disable-next-line react/prop-types
export const Loading = ({ loading }) => {
  return (
    <div className={"flex justify-center items-center"}>
      <ClipLoader
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#7e7f81"
      />
    </div>
  );
};
