import React from 'react';
import { AppContext } from 'context';
import { AppContextProps } from 'context/app-context-types';
import { Var } from './var';
import { Title } from './container.styles';

interface ContainerContentProps {
  children?: React.ReactNode;
}

const renderVars = (context: AppContextProps): React.ReactNode => {
  const { vars, incrementAge, decrementAge } = context;
  return Object.keys(vars).map(
    (name: string): React.ReactNode => (
      <Var key={name} name={vars[name].name} age={vars[name].age} incrementAge={incrementAge} decrementAge={decrementAge} />
    ),
  );
};

export const ContainerContent: React.FunctionComponent = (props: ContainerContentProps): React.ReactElement => {
  const { children } = props;
  return (
    <AppContext.Consumer>
      {(context): React.ReactNode => (
        <>
          <Title>Vars:</Title>
          {renderVars(context)}
          {children}
        </>
      )}
    </AppContext.Consumer>
  );
};
