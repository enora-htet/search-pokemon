"use client";

import { useQuery } from "@apollo/client/react"; 
import { useSearchParams, useRouter } from "next/navigation";
import { GET_POKEMON_BY_NAME } from "@/lib/queries";
import type { Pokemon } from "@/types/pokemon";
import { Suspense } from "react";

function InnerResult() {
  const params = useSearchParams();
  const router = useRouter();
  const name = (params.get("q") || "").trim();

  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON_BY_NAME, {
    variables: { name },
    skip: !name,
  });

  if (!name) {
    return <div style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}>
      Try searching for <b>bulbasaur</b>, <b>charmander</b>, or <b>squirtle</b>.
    </div>;
  }
  if (loading) return <div>Searching <b>{name}</b>…</div>;
  if (error) return <div>Error: {error.message}</div>;

  const p = data?.pokemon;
  if (!p) return <div>No Pokémon named <b>{name}</b> was found.</div>;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginTop: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={p.image} alt={p.name} width={120} height={120} />
        <div>
          <h2>{p.name} <small>#{p.number}</small></h2>
          <div>Types: {p.types.join(", ")}</div>
        </div>
      </div>

      <h3>Fast Attacks</h3>
      <ul>
        {p.attacks.fast.map((a) => (
          <li key={a.name}>{a.name} — {a.type} ({a.damage})</li>
        ))}
      </ul>

      <h3>Special Attacks</h3>
      <ul>
        {p.attacks.special.map((a) => (
          <li key={a.name}>{a.name} — {a.type} ({a.damage})</li>
        ))}
      </ul>

      <h3>Evolutions</h3>
      {p.evolutions?.length ? (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {p.evolutions.map((e) => (
            <button
              key={e.id}
              onClick={() => router.push(`/?q=${encodeURIComponent(e.name)}`)}
              style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "8px", cursor: "pointer" }}
            >
              <img src={e.image} alt={e.name} width={80} height={80} /><br />
              {e.name}<br />
              <small>{e.types.join(", ")}</small>
            </button>
          ))}
        </div>
      ) : (
        <div>None</div>
      )}
    </div>
  );
}

export default function PokemonResult() {
  return (
    <Suspense fallback={<div>Loading result…</div>}>
      <InnerResult />
    </Suspense>
  );
}
