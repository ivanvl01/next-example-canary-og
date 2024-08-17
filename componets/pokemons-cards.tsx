import { headers } from "next/headers";
import { PokemonCard } from "./pokemon-card";
import { Fragment } from "react";

interface Pokemon {
  name: string;
  url: string;
}
interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  order: number;
  sprites: {
    front_default: string;
  };
}

export async function PokemonsCards() {
  headers();
  const pokemons: PokemonDetails[] = await (async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list");
      }
      const data = await response.json();
      const pokemonList: Pokemon[] = data.results;

      const pokemonDetails: PokemonDetails[] = await Promise.all(
        // Get every third to remove evolutions
        pokemonList.slice(0, 3).map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          if (!response.ok) {
            throw new Error("Failed to fetch Pokémon details");
          }
          return response.json();
        })
      );
      return pokemonDetails;
    } catch (error) {
      console.error("Error fetching the Pokémon data:", error);
      return [];
    }
  })();

  return (
    <div
      className="flex lg:justify-evenly w-full mt-24 lg:flex-row  items-center gap-10 px-10"
      data-headers={headers()}
    >
      {pokemons.map((pokemon) => (
        <Fragment key={pokemon.name}>
          <PokemonCard pokemondetails={pokemon} />
        </Fragment>
      ))}
    </div>
  );
}
