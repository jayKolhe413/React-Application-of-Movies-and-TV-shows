import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header({ data }) {
  // Ensure that data exists, or provide an empty object
  data = data ?? {};

  // Extract relevant properties from data
  const { backdrop_path, profile_path } = data;

  // Construct the background image URL
  const imageUrl =
    backdrop_path || profile_path
      ? `https://image.tmdb.org/t/p/original/${backdrop_path || profile_path}`
      : "";

  return (
    <motion.div
      initial={{ scale: 0.3 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),
        url(${imageUrl})`,
        backgroundPosition: `top`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
      className="w-full text-white  h-[60vh] flex flex-col justify-end p-[5%]"
    >
      <h1 className="text-5xl w-[70%] font-semibold font-black  ">
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      <p className="w-[70%] mb-1  mt-2">
        {data.overview.slice(0, 200)} ...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="mb-4">
        <i className="text-yellow-600 ri-megaphone-fill"></i>
        {data.release_date || "No information"}
        <i className="ml-5 text-yellow-600 ri-album-fill"></i>
        {data.media_type}
      </p>
      <div className="">
        <Link className="bg-[#6556CD] p-4 rounded font-semibold mt-5 ">
          Watch Trailer
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
