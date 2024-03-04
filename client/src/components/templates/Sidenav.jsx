import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10 overflow-auto ">
      <h1 className="text-2xl font-bold text-white">
        <i className=" text-[#6556CD] ri-tv-fill mr-3"></i>

        <span className="text-2xl">Video</span>
      </h1>
      <nav className="flex flex-col gap-1 text-xl text-zinc-400">
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-tv-2-fill"></i> TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-group-fill"></i> Stars
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col gap-1 text-xl text-zinc-400">
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-information-fill"></i> Information
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
