import { list } from "../../../Data";
import Item from "../recentComponent/Item";

function Recent() {
  return (
    <div className="w-full h-[1250px] flex flex-col items-center  bg-white">
      <div className="flex flex-col items-center mt-24">
        <p className="text-3xl">Recent Property Listed</p>
        <p className="text-gray-500 mt-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <div className="w-4/5 flex flex-wrap ">
          {list?.map((home) => {
            return (
              <Item
                key={home.id}
                name={home.name}
                location={home.location}
                cover={home.cover}
                catagory={home.category}
                price={home.price}
                type={home.type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recent;
