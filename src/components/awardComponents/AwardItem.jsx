function AwardItem({ icon, num, name }) {
  return (
    <div className="w-60 h-60 mt-24 m-3 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="bg-gray-600  p-10 rounded-tr-[60px] rounded-bl-[60px]">
          {icon}
        </p>
        <p className="mt-5 text-4xl text-white font-bold">{num}</p>
        <p className="text-gray-100">{name}</p>
      </div>
    </div>
  );
}

export default AwardItem;
