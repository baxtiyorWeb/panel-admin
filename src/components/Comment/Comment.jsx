/* eslint-disable react/prop-types */
import { useComment } from "../../hooks/useComment";

const Comment = ({ name }) => {
  const comment = useComment();
  console.log();
  return (
    <div className="w-full  absolute bottom-0 flex justify-center items-center border border-gray-600 rounded-xl overflow-hidden">
      <input
        type="text"
        placeholder="xabaringizni yozing "
        className="w-full p-3  dark:bg-transparent  text-[16px] text-black dark:text-gray-300"
        onChange={(e) => comment.setMsg(e.target.value)}
        value={comment.msg}
      />
      <button
        className=" p-3 fz-[16px] text-black dark:text-gray-300"
        onClick={() => comment.messageUser(name)}
      >
        {comment.isLoading ? "loading" : "send"}
      </button>
    </div>
  );
};

export default Comment;
