
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";


// eslint-disable-next-line react/prop-types
const EnqueiriesLayout = () => {
  return (
    <Container>
      <div className="chart-progress dark:bg-[#353C48] text-[#000]">
        <Outlet />
      </div>
    </Container>
  );
};
export default EnqueiriesLayout;
