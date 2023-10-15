import { useEffect, useState } from "react";
import axios from "axios";

import MovieList from "../components/MovieList";
import PageHeading from "../components/PageHeading";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=e7225497&s=marvel"
      );

      setMovies(response.data.Search);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className=" bg-gray-800">
      <div className="py-16 px-4 mx-auto max-w-screen-xl">
        <PageHeading title="Movies List" />
        <div className="grid grid-cols-4 gap-4 p-5">
          <MovieList movies={movies} />
        </div>
      </div>
    </section>
  );
};

export default Home;
