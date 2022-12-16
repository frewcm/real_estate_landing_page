import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";

function NavBar() {
  return (
    <div className="flex justify-evenly items-center w-full h-16 bg-white sticky top-0 z-40">
      <div className="flex text-3xl items-center">
        <RiHomeLine size={30} className="text-orange-400" />
        <p className="text-2xl first-letter:text-3xl">Rent</p>
        <p className="text-orange-400 ">Up</p>
      </div>
      <div className="flex space-x-7">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/price">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex space-x-5">
        <Link className="flex items-center space-x-1">
          <p className="bg-orange-400 rounded-full w-6 h-6 text-center ">2</p>
          <p>My List</p>
        </Link>
        <Link className="px-5 bg-orange-400 rounded text-white py-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
