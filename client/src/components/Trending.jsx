import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./templates/Loading";

function Trending() {
  const n = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const [page, setpage] = useState(1);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${category}/day`
      );
      console.log(data);
      setTrending(data.results);
      setTrending((prevState) => [...prevState, ...data.results]);
      setpage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return (
    trending && (
      <div className="w-screen h-screen  text-white">
        <div className="w-full  h-[10vh]  flex items-center">
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
          {/* <DropDown
            title="Category"
            func={(value) => setCategory(value)}
            options={["movie", "tv", "all"]}
          />
          <div className="w-[2%]"></div>
          <DropDown
            title="Duration"
            func={(value) => setDuration(value)}
            options={["day", "week"]}
          /> */}
        </div>
        <InfiniteScroll
          dataLength={trending.length}
          loader={<Loading />}
          hasMore={true}
          next={getTrending()}
        >
          <Cards data={trending} />
        </InfiniteScroll>
      </div>
    )
  );
}

export default Trending;
