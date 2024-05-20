import Link from "next/link";
import React from "react";
// import "./globals.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <div className="flex items-center gap-1 relative">
            <div className="">
              <Hexagon />
              <BookIcon />
            </div>

            <span className="text-xl font-bold uppercase tracking-tight text-red-800 bg-green-600">
              E-Library
            </span>
          </div>
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;

const Hexagon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="#ce7041"
    stroke="#ce7041"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#ce7041"
    // width={45}
    // height={45}
    className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform"
    // style={{ width: '20px', height: '20px' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);