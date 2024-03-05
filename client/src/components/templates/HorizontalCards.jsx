import Loading from "./Loading";

function HorizontalCards({ data }) {
  return (
    <div className="w-full px-[5%] text-white h-[40vh] pl-5 pr-5">
      <div className="flex overflow-auto w-[100%] h-[40vh]  ">
        {data.map((e, i) => (
          <div key={i} className="mr-5 relative  min-w-[15%] ">
            <img
              className="object-cover w-full h-full"
              src={`https://image.tmdb.org/t/p/original/${
                e.backdrop_path || e.poster_path
              }`}
              alt=""
            />
            <h1 className="absolute left-auto right-auto text-xl font-semibold bottom-2 ">
              {e.title || e.name || e.original_name || e.original_title}
            </h1>

            {/* <p className="w-[70%] mt-3 mb-3 ">
              {e.overview.slice(0, 40)}....
              <span className="text-zinc-500">more</span>
            </p> */}
          </div>
        ))}
        <Loading />
      </div>
    </div>
  );
}

export default HorizontalCards;
