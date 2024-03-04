import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./templates/Cards";
function Trending() {
  const n = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const getTrending = async () => {
    try {
      console.log("Category:", category);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/${duration}`
      );

      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return (
    trending && (
      <div className="w-screen h-screen overflow-hidden overflow-y-auto text-white">
        <div className="w-full p-[4%] h-[10vh]  flex items-center">
          <h1 className="text-2xl mr-[-7vw] font-semibold text-zinc-400">
            <i
              onClick={() => {
                n("/");
              }}
              className="hover:text-[#6556CD] mr-5 ri-arrow-left-line"
            ></i>
            Trending
          </h1>

          <Topnav />
          <DropDown title="Category" options={["movie", "tv", "all"]} />
          <div className="w-[2%]"></div>
          <DropDown title="Duration" options={["day", "week"]} />
        </div>
        <Cards data={trending} />
      </div>
    )
  );
}

export default Trending;
