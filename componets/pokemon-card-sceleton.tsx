export function PokemonCardSceleton() {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl h-[644px] w-[374px] items-center p-12">
      <div className="capitalize font-bold text-2xl"></div>
      <div className="w-[200px] h-[200px] bg-gray-400"></div>
      <div className="bg-green-50/50 p-5 rounded-lg flex flex-col gap-4 w-full h-full">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Height</b>: <div className="w-[100px] h-[30px] bg-gray-400"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Weight</b>: <div className="w-[100px] h-[30px] bg-gray-400"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Order</b>: <div className="w-[100px] h-[30px] bg-gray-400"></div>
        </div>
        <button className="bg-white rounded-xl text-primary font-semibold p-4 shadow-md mt-auto">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
