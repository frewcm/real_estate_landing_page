import Featured from "../components/homeComponents/Featured";

function Service() {
  return (
    <div className="w-full h-[650px] flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <div className=" bg-gray-500 text-white h-60">
          <div className="mt-36 ml-36">
            <p className="">Services</p>
            <p className="text-3xl">Services -All Services</p>
          </div>
        </div>
        <Featured />
      </div>
    </div>
  );
}

export default Service;
