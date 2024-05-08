import { useState } from "react";
import Menue from "./Menue";
import { Link } from "react-router-dom";

function HomeNav() {
  const [userClick, setUserClick] = useState(false);

  const handleUserClick = () => {
    setUserClick((s) => !s);
  };

  return (
    <>
      <nav className="relative w-full h-full lg:px-16 px-10 py-3 flex  items-center justify-between shadow-xl">
        <h3 className="md:hidden text-xl font-bold">E-PIK</h3>

        <ul className="hidden  md:flex items-center gap-5 text-xs md:text-lg">
          <li className="text-2xl font-bold">E-PIK</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="store">Store</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            // height="2em"
            // width="2em"
            className="w-5 md:w-7"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M17 10 A7 7 0 0 1 10 17 A7 7 0 0 1 3 10 A7 7 0 0 1 17 10 z" />
            <path d="M21 21l-6-6" />
          </svg>
          <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 md:w-7">
            <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
          </svg>
          <svg
            onClick={handleUserClick}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            // height="2em"
            // width="2em"
            className="w-5 md:w-7"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <path d="M16 7 A4 4 0 0 1 12 11 A4 4 0 0 1 8 7 A4 4 0 0 1 16 7 z" />
          </svg>
        </div>
      </nav>
      <ul
        className={`bg-white w-44  absolute right-10 top-16 text-center p-2 text-sm space-y-2 rounded-sm shadow-md ${
          userClick ? "block" : "hidden"
        }`}
      >
        <li>Login</li>
        <hr className="" />
        <li>Sign Up</li>
      </ul>
      <Menue />
    </>
  );
}

export default HomeNav;
