function HorizontalCards({ data }) {
  console.log(data);
  return (
    <div className="w-full h-[40vh] p-5  ">
      <div className="mb-5 ">
        {" "}
        <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
      </div>
      <div className="flex w-[100%] overflow-x-auto">
        {data.map((e, i) => (
          <div key={i} className="mr-5 min-w-[15%] bg-red-100 ">
            <h1> {e.title || e.name || e.original_name || e.original_title}</h1>
            <p className="w-[70%] mt-3 mb-3 text-white">
              {e.overview.slice(0, 100)}....
              <span className="text-blue-400">more</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
