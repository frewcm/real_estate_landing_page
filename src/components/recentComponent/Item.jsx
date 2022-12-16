import { ImLocation2 } from "react-icons/im";

function Item({ name, location, cover, catagory, price, type }) {
  return (
    <div className="w-80 h-[420px] bg-white rounded mt-14 shadow-lg m-4">
      <div className=" w-full flex flex-col items-start">
        <img className="h-1/2 rounded" src={cover} alt={name} />
        <p className="m-5 bg-green-50 px-3 py-2 text-green-500 rounded">
          {catagory}
        </p>
        <p className="ml-5">{name}</p>
        <div className="flex items-center ml-5 space-x-1">
          <ImLocation2 className="text-gray-500" />
          <p className="text-gray-500">{location}</p>
        </div>
        <div className="w-4/5 flex items-center justify-between m-5">
          <p className="bg-orange-400 px-5 py-3 rounded-full text-white">
            {price}
          </p>
          <p className="">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
