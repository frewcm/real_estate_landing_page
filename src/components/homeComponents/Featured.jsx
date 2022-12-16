import { GiFamilyHouse, GiGreenhouse, GiVikingLonghouse } from "react-icons/gi";
import { BsFillHouseFill, BsHouse } from "react-icons/bs";

function Featured() {
  return (
    <div className="h-[500px] w-full bg-gray-100 flex flex-col items-center justify-center">
      <div className="h-3/4 flex flex-col items-center mt-10">
        <p className="text-4xl">Featured Property Types</p>
        <p className="mt-5 mb-5 text-gray-500">Find All Type of Property.</p>

        <div className="w-full flex space-x-7">
          <div className="w-48 h-56 flex flex-col items-center justify-center shadow-xl shadow-slate-300">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
              <GiFamilyHouse
                size={30}
                className="text-red-500  shadow-red-500/50"
              />
            </div>

            <p>Family House</p>
            <p>122 Property</p>
          </div>
          <div className=" w-48 h-56  flex flex-col items-center justify-center shadow-xl shadow-slate-300">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
              <GiGreenhouse
                size={30}
                className="text-green-500 shadow-green-500/50"
              />
            </div>

            <p>House & Villa</p>
            <p>155 Property</p>
          </div>
          <div className="w-48 h-56  flex flex-col items-center justify-center shadow-xl shadow-slate-300">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full">
              <BsFillHouseFill
                size={30}
                className="text-yellow-500  shadow-yellow-500/50"
              />
            </div>
            <p>Apartment</p>
            <p>122 Property</p>
          </div>
          <div className="w-48 h-56  flex flex-col items-center justify-center shadow-xl shadow-slate-300">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
              <BsHouse
                size={30}
                className="text-purple-500 shadow-purple-500/50"
              />
            </div>
            <p>Office & Studio</p>
            <p>300 Property</p>
          </div>
          <div className="w-48 h-56  flex flex-col items-center justify-center shadow-xl shadow-slate-300">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <GiVikingLonghouse
                size={30}
                className="text-blue-500 shadow-blue-500/50"
              />
            </div>
            <p>OVilla & Condo</p>
            <p>80 Property</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
