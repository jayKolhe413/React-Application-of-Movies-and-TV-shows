import { useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] text-zinc-400 flex justify-start ml-[15%] items-center relative">
      <i className="text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-3 bg-inherit text-white text-xl outline-none border-none"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i onClick={() => setQuery("")} className="ri-close-fill"></i>
      )}

      {query.length > 0 && (
        <div className="absolute w-[50%] top-[90%] bottom-0 h-[50vh] rounded overflow-auto bg-zinc-200">
          <Link className="flex font-semibold hover:text-zinc-900 hover:bg-slate-300 duration-200 text-zinc-600 p-10 flex justify-start border-b-2 border-zinc-200 items-center w-[100%]">
            <img src="" alt="" />
            <span>Hello Everyone</span>
          </Link>
          {/* Add more Link elements based on your requirements */}
        </div>
      )}
    </div>
  );
}

export default Topnav;
