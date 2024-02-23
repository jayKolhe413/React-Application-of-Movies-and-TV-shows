import React from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";

function Home() {
  document.title = "Video | Home";
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <Topnav />
      </div>
    </>
  );
}

export default Home;
