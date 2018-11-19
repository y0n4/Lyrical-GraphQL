import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'; // interacts with graphql server on backend (makes request)
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
