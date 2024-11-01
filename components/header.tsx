"use client";

import { useRecoilState } from "recoil";
import Logo from "./logo";
import { searchState } from "utils/recoil/atoms";
import { useAtomState } from "@zedux/react";
import { searchAtom } from "utils/zedux/atoms";

export default function Header() {
  // const [search, setSearch] = useRecoilState(searchState);
  const [search, setSearch] = useAtomState(searchAtom)
  return (
    <header className="fixed top-0 left-0 right-0 p-4 py-2 bg-gray-900 flex justify-between">
      <nav className="flex gap-2 items-center">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex w-full max-w-72 gap-2 items-center border border-white rounded-md p-2 text-white">
        <i className="fas fa-search"></i>
        <input
          className="bg-transparent"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
