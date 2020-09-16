import {ApolloProvider} from '@apollo/client';
import {act, render, RenderResult} from '@testing-library/react';
import {client} from 'app/apollo/clients';
import React from 'react';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import {mockRandomForEach} from 'jest-mock-random';
let app: RenderResult<typeof import('@testing-library/dom/types/queries')>;

describe('Home', () => {
  mockRandomForEach([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]);
  it('renders the Home component', () => {
    act(() => {
      app = render(
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Home />
          </ApolloProvider>
        </BrowserRouter>,
      );
    });
    expect(app.container.firstChild).toMatchSnapshot();
  });
});
