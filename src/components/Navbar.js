import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="flex space-x-3 px-10 items-center font-bold bg-gray-800">
        <div className="text-2xl mr-5">LOGO/BRAND</div>
        <Link to="/" className="py-1 px-8 rounded-md m-3 bg-gray-400">
          1
        </Link>
        <Link to="/2" className="py-1 px-8 rounded-md m-3 bg-gray-500">
          2
        </Link>
        <Link to="/3" className="py-1 px-8 rounded-md m-3 bg-gray-500">
          3
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
