"use client";

import Link from "next/link";

export default function MovieCard({movie}) {
  const mockData = {
    imgSrc: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    title: "Dune: Part Two",
    desc: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    rating: 8.3,
    popularity: 3437.313,
    release_date: "2024-02-27",
  };
  return (
    <div className="col-span-1 relative">
      {/* Image */}
      <img src={movie.image_url} alt="movie-image" className="w-full" />
      {/* Dim */}
      <Link href={`/movies/${movie.id}`}>
        <div className="flex absolute top-0 bottom-0 left-0 right-0 z-10 items-center justify-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="text-white font-bold">{movie.title}</p>
        </div>
      </Link>
    </div>
  );
}
