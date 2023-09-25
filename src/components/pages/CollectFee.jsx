import Container from "../shared/Container";
import ComboBox from "../combobox/ComboBox";
import Selectbatch from "../combobox/Selectbatch";
import { useState } from "react";
const CollectFree = () => {
  const [tabitem, settabItem] = useState(1);
  function toggleTab(index) {
    settabItem(index);
    console.log(index);
  }

  return (
    <Container>
      <div>
        <div className="chart-progress dark:bg-[#353C48] h-[50vh]">
          <button
            className="mr-10 border p-5 mb-3"
            onClick={() => toggleTab(1)}
          >
            item 1
          </button>
          <button
            className="mr-10 border p-5 mb-3"
            onClick={() => toggleTab(2)}
          >
            item 2
          </button>
          <div
            className={
              tabitem === 1
                ? "block"
                : "fixed  opacity-0  z-[-10000] transition-all"
            }
          >
            <div className="gird grid grid-cols-3 gap-4">
              <ComboBox />
              <Selectbatch />
              <ComboBox />
            </div>
          </div>
          <div className={tabitem === 2 ? "block" : "fixed z-0 scale-0"}>
            <div className="gird grid grid-cols-3 gap-4">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>
                    <td>Sun</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollectFree;
