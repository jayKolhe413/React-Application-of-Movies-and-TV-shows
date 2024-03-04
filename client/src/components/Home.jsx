import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";

function Home() {
  document.title = "Video | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)]; // Use Math.floor to get an integer
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      getHeader();
    }
    !trending && getTrending();
  }, [wallpaper, trending]);

  return trending && wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        {wallpaper ? <Header data={wallpaper} /> : <h1>Loading</h1>}
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
