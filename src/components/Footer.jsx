import { RiHomeLine } from "react-icons/ri";
import { footer } from "../../Data";

const Footer = () => {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center">
      <div className="h-44 w-full flex flex-col items-center bg-orange-400">
        <div className="w-4/5 h-full grid grid-cols-2">
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <p className="text-3xl">Do You Have Questions ?</p>
            <p>We'll help you to grow your career and growth.</p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="bg-white px-7 py-5 rounded-full">
              <button className="text-orange-400  text-md ">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#696969] pb-5">
        <div className="grid grid-cols-2 text-white">
          <div className="w-3/4 m-10">
            <div className="flex text-3xl items-center mb-2">
              <RiHomeLine size={30} className="text-orange-400" />
              <p className="text-2xl first-letter:text-3xl">Rent</p>
              <p className="text-orange-400 ">Up</p>
            </div>
            <p className="text-2xl">Do You Need Help With Anything?</p>
            <p className="mt-2 text-gray-100">
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </p>
            <div className="flex space-x-2 mt-5">
              <input className="h-12 w-[450px] p-2 rounded" type="text" />
              <button className="h-12 bg-orange-400 rounded text-white p-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-3">
            {footer.map((footer, index) => {
              return (
                <div
                  className="w-1/3 flex flex-col m-10 items-center"
                  key={index}
                >
                  <p className="text-2xl">{footer.title}</p>
                  <p className="m-3">
                    {footer.text.map((text) => {
                      return <p>{text.list}</p>;
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
      <hr className="w-full" />
      <div className="w-full h-10 flex justify-center bg-[#696969] pt-3 pb-2 text-gray-100">
        <span className="text-sm">
          © {new Date().getFullYear()} RentUP. Designd By Frew Befekadu.
        </span>
      </div>
    </div>
  );
};

export default Footer;
