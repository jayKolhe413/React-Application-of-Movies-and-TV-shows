import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10 overflow-auto ">
      <h1 className="text-2xl text-white font-bold">
        <i className=" text-[#6556CD] ri-tv-fill mr-3"></i>

        <span className="text-2xl">Video</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className=" mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-movie-2-fill  mr-2"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-tv-2-fill  mr-2"></i> TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-group-fill  mr-2"></i> Stars
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="ri-information-fill"></i> Information
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className=" mr-2 ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
