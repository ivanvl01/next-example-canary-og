import Image from "next/image";

export function PokemonCard({ pokemondetails }: { pokemondetails: any }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl h-[644px] w-[374px] items-center p-12">
      <div className="capitalize font-bold text-2xl">{pokemondetails.name}</div>
      <Image
        src={pokemondetails.sprites.front_default}
        alt={pokemondetails.name}
        height={200}
        width={200}
        loading={"lazy"}
      />
      <div className="bg-green-50/50 p-5 rounded-lg flex flex-col gap-4 w-full h-full">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Height</b>: {pokemondetails.height}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Weight</b>: {pokemondetails.weight}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-4 h-4 rounded-full" />
          <b>Order</b>: {pokemondetails.order}
        </div>
        <button className="bg-white rounded-xl text-primary font-semibold p-4 shadow-md mt-auto">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
