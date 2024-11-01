export default function UI({ movie }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img src={movie.image_url} alt="" className="w-1/3 md:w-1/3" />

      <div className="w-full md:w-2/3 flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          Rating: {movie.rating} <i className="fas fa-star" />{" "}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
