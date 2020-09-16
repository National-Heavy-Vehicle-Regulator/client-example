import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './app';

const root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(root, document.getElementById('root'));
