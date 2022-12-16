function LocationItem({ name, villas, apartments, cover, offices }) {
  return (
    <div className="relative h-56 w-80 m-5 drop-shadow-xl">
      <img
        className="w-full box-decoration-slice h-full object-cover "
        src={cover}
        alt=""
      />
      <div className="w-full h-full absolute bottom-0 flex flex-col items-center justify-center text-white ">
        <p className=" ">{name}</p>
        <div className="flex space-x-2">
          <p>{villas}</p>
          <p>{offices}</p>
          <p>{apartments}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationItem;
