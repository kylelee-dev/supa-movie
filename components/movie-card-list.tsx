"use client"

import { useQuery } from "@tanstack/react-query"
import MovieCard from "./movie-card"
import { getAllMovies } from "actions/movieActions"
import { Spinner } from "@material-tailwind/react"


export default function MovieCardList() {
    const getAllMoviesQuery = useQuery({
        queryKey: ['movies'],
        queryFn: () => getAllMovies(),
    })

    return <div className="grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
        {getAllMoviesQuery.isLoading && <Spinner />}
        {getAllMoviesQuery.data && getAllMoviesQuery.data.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))}
    </div>

}