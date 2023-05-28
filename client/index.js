import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    dataIdFromObject: (o) => o.id
});

const Root = () => {
    return <ApolloProvider client={client}>Auth Starter</ApolloProvider>;
};

ReactDOM.render(<Root />, document.querySelector('#root'));
