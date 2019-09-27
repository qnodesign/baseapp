export interface Var {
  name: string;
  age: number;
}

export interface AppContextProps {
  vars: Var[] | undefined[];
  incrementAge: (name: string) => void;
  decrementAge: (name: string) => void;
}
