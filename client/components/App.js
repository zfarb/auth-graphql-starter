import React from 'react';
import Header from './Header';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

function App(props) {
    return (
        <div>
            <Header loading={props.loading} user={props.user} />
            {props.children}
        </div>
    );
}

export default graphql(query)(App);
