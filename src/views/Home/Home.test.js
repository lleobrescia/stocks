import React from 'react';
import ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next';
import Home from './Home';


describe('Home View', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTranslation()(<Home />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
