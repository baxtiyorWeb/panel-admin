import Container from "../shared/Container";
import ComboBox from "../combobox/ComboBox";
import Selectbatch from "../combobox/Selectbatch";
import { useEffect, useState } from "react";
const Attendies = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    function times() {
      let dates = new Date();

      let hour = dates.getHours();
      let minutes = dates.getMinutes();
      let seconds = dates.getSeconds();
      setDate(`${hour} : ${minutes} : ${seconds}`);
    }
    setInterval(() => {
      times();
    }, 1000);
  }, []);

  return (
    <Container>
      <div>
        <div className="chart-progress dark:bg-[#353C48] h-[50vh]">
          <div className="flex justify-center mb-5 text-[50px]">{date}</div>
          <div className="flex">
            <ComboBox />
            <Selectbatch />
            <ComboBox />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Attendies;
