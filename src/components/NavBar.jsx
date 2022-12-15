import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-evenly items-center w-full h-16 bg-white sticky top-0">
      <div className="flex text-3xl">
        Rent<p className="text-orange-400 ">Up</p>
      </div>
      <div className="flex space-x-7">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Service</Link>
        <Link>Blog</Link>
        <Link>Pricing</Link>
        <Link>Contact</Link>
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
