import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../setup/firebase/firebase.jsx";
import { LiaSearchSolid } from "react-icons/lia";

export const Input = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search) {
      (async () => {
        setLoading(true);
        const colRef = collection(db, "users");
        const snapshots = await getDocs(colRef);
        const docs = snapshots.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        setUser(docs);
        setLoading(false);
      })();
    }
  }, [loading]);

  return (
    <div className="search-box">
      <div className="search-box">
        <input
          type="text"
          className="input-type rounded-[5px] font-medium text-[18px] dark:bg-transparent dark:border dark:border-gray-600"
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={"text-[20px] ml-3"}>{<LiaSearchSolid />}</button>
      </div>

      {search && (
        <ul className={"absolute w-[200px] h-[300px] border top-[60px] z-10"}>
          {loading
            ? "loading ..."
            : search &&
              user
                .filter((item) => item.name.toLowerCase().includes(search))
                .map((item, index) => {
                  return (
                    <li key={index} className={"p-5 border w-full"}>
                      {item.name}
                    </li>
                  );
                })}
        </ul>
      )}
    </div>
  );
};
