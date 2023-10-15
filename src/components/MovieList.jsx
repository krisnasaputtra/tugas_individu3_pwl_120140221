const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.map((movie) => (
        <div
          className="max-w-sm border rounded-lg shadow bg-white border-gray-700"
          key={movie.imdbID}
        >
          <div className="flex items-center justify-center p-4">
            <img className="rounded-t-lg" src={movie.Poster} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold  text-gray-900">
                {movie.Title}
              </h5>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
