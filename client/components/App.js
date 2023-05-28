import React from 'react';
import Header from './Header';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

function App(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}

export default graphql(query)(App);
