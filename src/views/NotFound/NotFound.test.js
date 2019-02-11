import React from 'react';
import ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next';
import NotFound from './NotFound';


describe('NotFound View', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTranslation()(<NotFound />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
