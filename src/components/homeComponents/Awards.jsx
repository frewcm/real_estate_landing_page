import { awards } from "../../../Data";
import AwardItem from "../awardComponents/AwardItem";

function Awards() {
  return (
    <div className="w-full h-[580px] flex flex-col items-center bg-gray-500">
      <div className="flex flex-col items-center mt-20">
        <p className="text-white">Our Awards</p>
        <p className="text-3xl text-center text-white leading-10 ">
          Over 1,24,000+ Happy User Bieng With Us <br /> Still They Love Our
          Services
        </p>
        <div className="w-3/4 flex">
          {awards?.map((award, index) => {
            return (
              <AwardItem
                key={index}
                icon={award.icon}
                num={award.num}
                name={award.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Awards;
