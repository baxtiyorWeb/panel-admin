import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { db } from "../../../setup/firebase/firebase.jsx";
import Overlay from "../../overlay/overlay.jsx";

export const Input = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (search) {
      (async () => {
        const colRef = collection(db, "students");
        const snapshots = await getDocs(colRef);
        const docs = snapshots.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        setUser(docs);
      })();
    }
    setLoading(false);
  }, [loading, search]);

  function searchInputEvent(e) {
    setSearch(e.target.value);
    search;
  }

  return (
    <div className="search-box">
      <div className="search-box">
        <input
          type="text"
          className="input-type rounded-[5px] text-[18px] font-medium dark:border dark:border-gray-600 dark:bg-transparent"
          placeholder="Search ..."
          onChange={searchInputEvent}
        />
        <button onClick={() => setOpen(!open)}>
          <LiaSearchSolid />
        </button>
      </div>
      {open ? <Overlay open={open} setOpen={setOpen} /> : false}

      {open
        ? search && (
            <ul
              className={
                "absolute top-[65px] z-10 h-[300px] w-[200px] rounded-md border bg-[#e2e2e2] shadow-2xl"
              }
            >
              {loading
                ? "loading ..."
                : search &&
                  user
                    .filter((item) => {
                      const searchTerm = search.toLowerCase();
                      const fullName = item.name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .map((item, index) => {
                      return (
                        <li key={index} className={"w-full border p-5"}>
                          <Link
                            to={`profile/${item.id}`}
                            onClick={() => setOpen(!open)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
            </ul>
          )
        : false}
    </div>
  );
};
