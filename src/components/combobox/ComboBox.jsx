/* eslint-disable react/prop-types */
import { useState } from "react";
const ComboBox = ({ option }) => {
  const [options, setOptions] = useState(option);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  console.log(options)
  return (
    <div className="w-full">
      <button
        className="w-full border h-[43px] text-left text-[#9CA3AF] rounded border-[#9CA3AF] p-[10px]"
        onClick={() => setOpen(open ? false : true)}
      >
        {localStorage.getItem("options")
          ? localStorage.getItem("options")
          : `Select course category`}
      </button>
      {open && (
        <div className="w-full  border p-1">
          <input
            type="text"
            className="w-full border h-[43px] text-left text-[#9CA3AF] rounded bg-transparent border-[#9CA3AF] p-[10px] mt-1  "
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="options">
            {option
              .filter((users) => users.value.toLowerCase().includes(search))
              .map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full h-[43px] text-left pl-1 mt-0 mb-1 hover:bg-[#6777EF] hover:text-[#fff] rounded"
                    onClick={() =>
                      setOptions(
                        localStorage.setItem("options", item.value) !==
                        setOpen(false)
                      )
                    }
                  >
                    {item.value}
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComboBox;
