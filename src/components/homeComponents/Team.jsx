import { team } from "../../../Data";
import TeamItem from "../teamComponent/TeamItem";

function Team() {
  return (
    <div className="w-full h-[1150px] flex flex-col items-center ">
      <div className="flex flex-col items-center mt-20">
        <p className="text-3xl font-bold">Our Featured Agents</p>
        <p className="text-center text-gray-500  mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <div className="flex items-center w-4/5 flex-wrap mt-10">
          {team.map((member) => {
            return (
              <TeamItem
                key={member.list}
                list={member.list}
                cover={member.cover}
                address={member.address}
                name={member.name}
                icon={member.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
