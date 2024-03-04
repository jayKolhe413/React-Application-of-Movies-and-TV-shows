import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios.jsx";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";
import Loading from "./templates/Loading";

function Home() {
  document.title = "Video | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      getHeader();
    }
    // Introduce a delay before fetching trending data so it will create a delay
    const delay = setTimeout(() => {
      getTrending();
    }, 3000);

    // Clear the timeout if the component unmounts or when the data is fetched
    return () => clearTimeout(delay);
  }, [category, wallpaper, trending]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex">
          <Sidenav />
          <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
            <Topnav />

            <>
              {wallpaper ? <Header data={wallpaper} /> : <h1>Loading</h1>}
              <div className="flex items-center justify-between p-5 ">
                <h1 className="text-2xl font-semibold text-zinc-400">
                  Trending
                </h1>
                <DropDown
                  title="filter"
                  options={["Tv", "Movie", "All"]}
                  func={(value) => {
                    console.log(value.toLowerCase());
                    setCategory(value.toLowerCase());
                  }}
                />
              </div>
              <HorizontalCards data={trending} />
            </>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
