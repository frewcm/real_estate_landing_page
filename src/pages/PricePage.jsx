import Price from "../components/homeComponents/Price";

function PricePage() {
  return (
    <div className="w-full h-[1000px] flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <div className=" bg-gray-500 text-white h-60">
          <div className="mt-36 ml-36">
            <p className="">30 days money back guarantee</p>
            <p className="text-3xl">No Extra Fees. Friendly Support</p>
          </div>
        </div>
        <div className="mt-10 ">
          <Price />
        </div>
      </div>
    </div>
  );
}

export default PricePage;
