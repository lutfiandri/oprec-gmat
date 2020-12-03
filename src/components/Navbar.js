// import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  // const [active, setActive] = useState(use);
  const active = useLocation().pathname;
  // console.log(active);

  return (
    <header className="sticky top-0">
      <nav className="flex space-x-3 px-10 items-center font-bold bg-gray-800">
        <div className="text-2xl mr-5">LOGO/BRAND</div>
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
        <NavLink
          to="/3"
          className={`py-1 px-8 rounded-md m-3 ${active === '/3' ? 'bg-gray-400' : ' bg-gray-500'}`}
        >
          3
        </NavLink>
        <div>{active}</div>
      </nav>
    </header>
  );
};

export default Navbar;
