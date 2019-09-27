import React from 'react';
import { AppContext } from './app-context';
import { Var } from './app-context-types';

interface ContextState {
  vars: Var[];
}

const INCREMENT = 1;

export class AppContextProvider extends React.Component<{}, ContextState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      vars: [
        {
          name: 'A',
          age: 20,
        },
        {
          name: 'B',
          age: 30,
        },
        {
          name: 'C',
          age: 40,
        },
      ],
    };
  }

  private readonly modifyAge = (name: string, inc?: boolean): void => {
    const { vars } = this.state;
    const current: Var = vars.find(({ name: varName }): boolean => varName === name);
    if (current) {
      current.age = inc ? current.age + INCREMENT : current.age - INCREMENT;
    }
    this.setState({
      vars,
    });
  };

  incrementAge = (name: string): void => {
    this.modifyAge(name, true);
  };

  decrementAge = (name: string): void => {
    this.modifyAge(name);
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { vars } = this.state;
    return (
      <AppContext.Provider
        value={{
          vars,
          incrementAge: this.incrementAge,
          decrementAge: this.decrementAge,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
