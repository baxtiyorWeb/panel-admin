/* eslint-disable react/prop-types */
import { returnPaginationRange } from "../../utils/AppUtils";

const Pagination = (props) => {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.sibling
  );

  return (
    <ul className="pagination pagination-md justify-center flex items-center mt-5 mb-5 select-none w-full">
      <li
        className="page-item  w-10 h-10   flex justify-center items-center cursor-pointer hover:bg-[#26BEFF] hover:text-[#fff] rounded m-1 text-[18px] text-[#26BEFF] select-none"
        onClick={() => props.onPageChange("&laquo;")}
      >
        <span className="page-link ">&laquo;</span>
      </li>
      <li
        className="page-item  w-10 h-10   flex justify-center items-center cursor-pointer hover:bg-[#26BEFF] hover:text-[#fff] rounded m-1 text-[18px] text-[#26BEFF] select-none"
        onClick={() => props.onPageChange("&lsaquo;")}
      >
        <span className="page-link">&lsaquo;</span>
      </li>
      {array.map((value) => {
        if (value === props.page) {
          return (
            <li
              className="page-item  w-10 h-10   m-1 text-[18px]  actives select-none"
              key={value}
              onClick={() => props.onPageChange(value)}
            >
              <span className="page-link ">{value}</span>
            </li>
          );
        } else {
          return (
            <li
              className="page-item  w-10 h-10   m-1 text-[18px] text-[#26BEFF] select-none flex justify-center items-center"
              key={value}
              onClick={() => props.onPageChange(value)}
            >
              <span
                className="page-link"
                onClick={() => props.onPageChange(value)}
              >
                {value}
              </span>
            </li>
          );
        }
      })}
      <li
        className="page-item  w-10 h-10   flex justify-center items-center cursor-pointer hover:bg-[#26BEFF] hover:text-[#fff] rounded m-1 text-[18px] text-[#26BEFF] "
        onClick={() => props.onPageChange("&rsaquo;")}
      >
        <span className="page-link ">&rsaquo;</span>
      </li>
      <li
        className="page-item  w-10 h-10   flex justify-center items-center cursor-pointer hover:bg-[#26BEFF] hover:text-[#fff] rounded m-1 text-[18px] text-[#26BEFF] "
        onClick={() => props.onPageChange("&raquo;")}
      >
        <span className="page-link">&raquo;</span>
      </li>
    </ul>
  );
};

export default Pagination;
