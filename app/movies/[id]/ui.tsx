export default function UI({ id }) {
  const mockData = {
    imgSrc: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    title: "Dune: Part Two",
    desc: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    rating: 8.3,
    popularity: 3437.313,
    release_date: "2024-02-27",
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img src={mockData.imgSrc} alt="" className="w-1/3 md:w-1/3" />

      <div className="w-full md:w-2/3 flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">{mockData.title}</h1>
        <p className="text-lg font-medium">{mockData.desc}</p>
        <div className="font-bold text-lg">Rating: {mockData.rating} <i className="fas fa-star"/> </div>
        <div className="font-bold text-lg">Popularity: {mockData.popularity}</div>
        <div className="font-bold text-lg">Release Date: {mockData.release_date}</div>
      </div>
    </div>
  );
}
