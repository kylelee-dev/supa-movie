"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { getAllMovies, searchMovies } from "actions/movieActions";
import { Spinner } from "@material-tailwind/react";
import { useAtomValue } from "@zedux/react";
import { searchAtom } from "utils/zedux/atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MovieCardList() {
  let count = 0;
  const search = useAtomValue(searchAtom);
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["movies", search],
      queryFn: ({ pageParam }) =>
        searchMovies({ search, page: pageParam, pageSize: 12 }),
      getNextPageParam: (lastPage) =>
        lastPage.page ? lastPage.page + 1 : null,
    });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  // useEffect(() => {}, [inView]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
      console.log(count++);
    }
  }, [inView, hasNextPage]);
  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
      {isFetching || (isFetchingNextPage && <Spinner />)}
      {
        <>
          {data?.pages
            ?.map((page) => page.data)
            ?.flat()
            ?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <div ref={ref} className="w-full bg-gray-200"></div>
        </>
      }
    </div>
  );
}
