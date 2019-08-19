import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme'
import BoardView from './board_view';
import MemoryRouter from 'react-router'

jest.mock('react-router-dom')

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('loads id into board on board change', () => {
    window.location.pathname = "/board/0";
    const wrapper = mount(<MemoryRouter
      initialEntries={['/board/0']}>
      <App />
    </MemoryRouter>);
    const board_wrapper = wrapper.find(BoardView);
    expect(board_wrapper.instance().state.id).toBe("0");
  })
})

