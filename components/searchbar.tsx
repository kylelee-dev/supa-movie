import { Input } from "@material-tailwind/react";

export default function Searchbar({ searchInput, setSearchInput}) {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search Image"
      placeholder="Search Image"
      icon={<i className="fas fa-search" />}
    />
  );
}
