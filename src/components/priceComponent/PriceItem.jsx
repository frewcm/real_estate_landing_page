function PriceItem({ plan, price, ptext, list }) {
  return (
    <div className="w-96 h-[500px] mt-10  flex flex-col items-center m-5 shadow-lg shadow-slate-400 hover:scale-110 duration-300">
      <div className="flex flex-col items-center mt-10">
        <p className="text-2xl font-bold">{plan}</p>
        <p className="text-6xl font-bold">$ {price}</p>
        <p className="mt-3">{ptext}</p>
        <div className="mt-10">
          {list.map((list) => {
            return (
              <div className="flex space-x-2 items-center mt-4">
                <p>{list.icon}</p>
                <p>{list.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PriceItem;
