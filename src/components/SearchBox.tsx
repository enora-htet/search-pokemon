"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, FormEvent } from "react";

function InnerSearch() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [value, setValue] = useState(initial);

  // keep input in sync with URL
  useEffect(() => setValue(initial), [initial]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = value.trim();
    router.push(next ? `/?q=${encodeURIComponent(next)}` : "/");
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px" }}>
      <input
        aria-label="Search Pokémon by name"
        placeholder="Search Pokémon by name…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" style={{ background: "#3b82f6", color: "white", border: "none", borderRadius: "6px" }}>
        Search
      </button>
    </form>
  );
}

export default function SearchBox() {
  return (
    <Suspense fallback={<div>Loading search…</div>}>
      <InnerSearch />
    </Suspense>
  );
}
