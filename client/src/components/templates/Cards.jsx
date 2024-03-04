import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <div className="flex flex-wrap w-full ">
      {data.map((e, i) => (
        <Link key={i} className=" w-[25vh] mr-[1%] mx-auto mb-[1%] ">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              e.backdrop_path || e.poster_path
            }`}
            className=" shadow-[8px_17px_38px_2px,rgba(0,0,0,.5)] object-cover h-[40vh]"
            alt=""
          />
          <h1 className="mt-3 text-2xl font-semibold text-zinc-400">
            {e.original_title || e.name || e.title || e.original_name}
          </h1>
        </Link>
      ))}
      {}
    </div>
  );
}

export default Cards;
