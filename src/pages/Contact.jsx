function Contact() {
  return (
    <div className="w-full h-[750px] flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <div className=" bg-gray-500 text-white h-60">
          <div className="mt-36 ml-36">
            <p className="">Contact Us</p>
            <p className="text-3xl font-bold">Get Helps & Friendly Support</p>
          </div>
        </div>
        <div className="mt-10 ml-36 w-3/5 bg-white p-5 shadow-lg shadow-slate-400">
          <form className="h-full flex flex-col items-start space-y-2">
            <label className="mb-6 mt-3">Fillup The Form</label>
            <div className="w-full flex space-x-2">
              <input
                className="w-1/2 h-10 rounded pl-2 border-2 focus:outline-none placeholder:text-black"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-1/2 h-10 rounded pl-2 border-2 focus:outline-none placeholder:text-black "
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="w-full h-10 rounded pl-2 border-2 focus:outline-none placeholder:text-black"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-full h-36 pl-2 rounded border-2 focus:outline-none placeholder:text-black"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className=" text-white px-7 py-5 bg-orange-400 rounded mt-5">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
