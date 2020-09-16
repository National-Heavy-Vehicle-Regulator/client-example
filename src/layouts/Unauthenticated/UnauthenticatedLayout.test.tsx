import {ApolloProvider} from '@apollo/client';
import {render} from '@testing-library/react';
import {client} from 'app/apollo/clients';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import UnAuthenticated from './UnauthenticatedLayout';

describe('UnAuthenticated', () => {
  it('renders the UnAuthenticated component', () => {
    const {container} = render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <UnAuthenticated>
            <div></div>
          </UnAuthenticated>
        </BrowserRouter>
      </ApolloProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
