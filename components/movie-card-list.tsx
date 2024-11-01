"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { getAllMovies, searchMovies } from "actions/movieActions";
import { Spinner } from "@material-tailwind/react";
import { useAtomValue } from "@zedux/react";
import { searchAtom } from "utils/zedux/atoms";

export default function MovieCardList() {
  const search = useAtomValue(searchAtom);
  const getAllMoviesQuery = useQuery({
    queryKey: ["movies", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
      {getAllMoviesQuery.isLoading && <Spinner />}
      {getAllMoviesQuery.data &&
        getAllMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
