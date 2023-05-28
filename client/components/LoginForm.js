import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/login';
import query from '../queries/currentUser';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
    onSubmit({ email, password }) {
        const { mutate } = this.props;

        mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default graphql(mutation)(LoginForm);
