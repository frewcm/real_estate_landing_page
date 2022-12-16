import { location } from "../../../Data";
import LocationItem from "../locationComponent/LocationItem";

function Location() {
  return (
    <div className="w-full h-[800px] flex flex-col items-center mt-10">
      <div className="flex flex-col items-center mt-20">
        <p className="text-3xl">Explore By Location</p>
        <p className="text-center text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <div className="w-4/5 flex flex-wrap items-center mt-10">
          {location.map((location) => {
            return (
              <LocationItem
                key={location.id}
                name={location.name}
                villas={location.Villas}
                apartments={location.Apartments}
                offices={location.Offices}
                cover={location.cover}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Location;
