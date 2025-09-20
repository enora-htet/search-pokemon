export type Attack = { name: string; type: string; damage: number };

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions?: Array<{
    id: string;
    number: string;
    name: string;
    image: string;
    types: string[];
  }> | null;
};
