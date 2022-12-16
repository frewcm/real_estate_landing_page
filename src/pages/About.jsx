function About() {
  return (
    <div className="w-full h-[650px] flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <div className=" bg-gray-500 text-white h-60">
          <div className="mt-36 ml-36">
            <p className="">About Us</p>
            <p className="text-3xl">About Us - Who We Are?</p>
          </div>
        </div>
        <div className="mt-10 ml-36 w-3/5">
          <p className="text-3xl mb-3">Our Agency Story</p>
          <p className="text-gray-500 mb-8">
            Check out our company story and work process
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="px-7 py-5 bg-orange-400 rounded mt-5">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
