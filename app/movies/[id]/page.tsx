import { getMovie } from "actions/movieActions";
import UI from "./ui";

export default async function MovieDetail({ params }) {
  // Doing on the serverside for metadata (SEO)
  const movie = await getMovie(params.id);
  return (
    <main className="my-16 py-16 bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>Movie does not exist.</div>}
    </main>
  );
}
