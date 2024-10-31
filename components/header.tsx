"use client";

import Logo from "./logo";

export default function Header() {
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
        <input className="bg-transparent" placeholder="Search Movies"/>
      </div>
    </header>
  );
}
