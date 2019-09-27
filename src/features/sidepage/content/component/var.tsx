import React from 'react';

export interface VarProps {
  key: string;
  name: string;
  age: number;
  children?: React.ReactNode;
  incrementAge: (name: string) => void;
  decrementAge: (name: string) => void;
}

export enum Buttons {
  INC = 'Inc',
  DEC = 'Dec',
}

export const Var: React.FunctionComponent<VarProps> = (props: VarProps): React.ReactElement => {
  const { name, age, incrementAge, decrementAge } = props;
  const increment = (): void => incrementAge(name);
  const decrement = (): void => decrementAge(name);

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <button id={Buttons.INC} type="button" onClick={increment}>
        {Buttons.INC}
      </button>
      <button id={Buttons.DEC} type="button" onClick={decrement}>
        {Buttons.DEC}
      </button>
    </>
  );
};
