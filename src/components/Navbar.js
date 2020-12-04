// import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const active = useLocation().pathname;

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex space-x-3 px-10 items-center font-bold bg-gray-800">
        <div className="text-2xl mr-5">GMAT</div>
        <NavLink
          to="/"
          className={`py-1 px-8 rounded-md m-3 ${active === '/' ? 'bg-gray-400' : ' bg-gray-500'}`}
        >
          1
        </NavLink>
        <NavLink
          to="/2"
          className={`py-1 px-8 rounded-md m-3 ${active === '/2' ? 'bg-gray-400' : ' bg-gray-500'}`}
        >
          2
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
