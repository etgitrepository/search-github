import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { SearchBar } from './components/search-bar/search-bar';
import reducer from './reducer';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');

  const store = createStore(reducer, applyMiddleware(thunkMiddleware));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('handleChange function', () => {
  it('should keep on the state the value introduced by the user', () => {
    const component = shallow(<SearchBar />);
    component.setState({ search: 'test' });
    component.find('input').simulate('change', { target: { value: 'axileb' } });

    expect(component.state()).toEqual({ search: 'axileb' });
  });
});
