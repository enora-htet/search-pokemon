import SearchBox from "@/components/SearchBox";
import PokemonResult from "@/components/PokemonResult";

export default function Page() {
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <h1 style={{ fontSize: "28px" }}>Search Pokémon</h1>
      <p>
        Uses the <a href="https://graphql-pokemon2.vercel.app/">Pokémon GraphQL API</a> via Apollo Client.
        Type a name and press Enter.
      </p>
      <SearchBox />
      <PokemonResult />
    </div>
  );
}

export const dynamic = "force-static";
