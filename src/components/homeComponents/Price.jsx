import { price } from "../../../Data";
import PriceItem from "../priceComponent/PriceItem";

function Price() {
  return (
    <div className="w-full h-[800px] flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <p className="text-3xl">Select Your Package</p>
        <p className="text-center mt-5 text-gray-500">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos
          dolores
        </p>
        <div className="flex w-4/5">
          {price.map((price, index) => {
            return (
              <PriceItem
                key={index}
                plan={price.plan}
                price={price.price}
                ptext={price.ptext}
                list={price.list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Price;
