import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { AppContext } from 'context';
import { AppContextProps } from 'context/app-context-types';
import { ContainerContent } from './container';

let component: ReactWrapper;
const ZERO = 0;

describe('ContainerContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    component = mount(<ContainerContent />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBeTruthy();
  });

  describe('ContainerContent', () => {
    let context: AppContextProps;
    beforeEach(() => {
      jest.clearAllMocks();
      context = {
        vars: [],
        incrementAge: jest.fn(),
        decrementAge: jest.fn(),
      };
    });

    it('shoud have content from context', () => {
      context.vars = [
        {
          name: 'John Doe',
          age: 30,
        },
        {
          name: 'Jane Doe',
          age: 20,
        },
      ];
      component = mount(
        <AppContext.Provider value={context}>
          <ContainerContent />
        </AppContext.Provider>,
      );

      expect(component.find('h2').length).toEqual(context.vars.length);
    });

    it('shoud not have content from context', () => {
      context.vars = [];
      component = mount(
        <AppContext.Provider value={context}>
          <ContainerContent />
        </AppContext.Provider>,
      );

      expect(component.find('h2').length).toEqual(ZERO);
    });
  });
});
