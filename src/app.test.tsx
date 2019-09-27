import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from './app';

let component: ShallowWrapper;

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(component.exists()).toBeTruthy();
  });
});
