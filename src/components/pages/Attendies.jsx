import Container from "../shared/Container";
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
      <div className="text-[50px] text-center">
        <h1>Bu sahifa dasturlash jarayonida</h1>
      </div>
    </Container>
  );
};

export default Attendies;
