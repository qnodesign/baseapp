import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const config = {
  adapter: new Adapter(),
};

configure(config);
