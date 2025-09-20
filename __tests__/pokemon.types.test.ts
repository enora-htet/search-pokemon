import { Bulbasaur, Charmander, Squirtle } from "../tests/fixtures/pokemon.mocks";

describe("Starter Pokémon types", () => {
  test("Bulbasaur includes Grass", () => {
    expect(Bulbasaur.types).toContain("Grass");
  });

  test("Charmander is Fire", () => {
    expect(Charmander.types[0]).toBe("Fire");
  });

  test("Squirtle is Water", () => {
    expect(Squirtle.types[0]).toBe("Water");
  });
});
