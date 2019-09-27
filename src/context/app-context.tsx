import React from 'react';
import { AppContextProps, Var } from './app-context-types';

const vars: Var[] = [];

export const AppContext = React.createContext<AppContextProps>({
  vars,
  incrementAge: undefined,
  decrementAge: undefined,
});
