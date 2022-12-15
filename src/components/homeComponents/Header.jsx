import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="bg-[url('/banner.png')] h-[604px] w-full object-cover bg-center flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-6xl font-bold text-gray-100 text-center">
          Search Your Next <br /> Home
        </p>
        <p className="text-gray-100 mt-5">
          Find new & featured property located in your local city.
        </p>
      </div>
      <div className="w-3/4 h-24 flex items-center bg-gray-100 mt-10 rounded px-10 space-x-2">
        <div className="w-1/4 p-3 flex flex-col items-start border">
          <p className="text-gray-500">City/Street</p>
          <input
            className="w-full h-8 border pl-2 placeholder:text-black focus:outline-none"
            type="text"
            placeholder="Location"
          />
        </div>
        <div className="w-1/4 p-3 flex flex-col items-start border">
          <p className="text-gray-500">Property Type</p>
          <input
            className="w-full h-8 border pl-2 placeholder:text-black focus:outline-none"
            type="text"
            placeholder="Property Type  "
          />
        </div>
        <div className="w-1/4 p-3 flex flex-col items-start border">
          <p className="text-gray-500">Price Range</p>
          <input
            className="w-full h-8 border pl-2 placeholder:text-black focus:outline-none"
            type="text"
            placeholder="Price Range"
          />
        </div>
        <div className="w-1/4 h-full border flex items-center justify-center space-x-3">
          <p>Advance Filter</p>
          <BiSearch
            size={20}
            className="h-12 w-20 p-3 rounded text-white bg-orange-400 "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
