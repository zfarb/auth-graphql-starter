import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/login';
import query from '../queries/currentUser';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    onSubmit({ email, password }) {
        const { mutate } = this.props;

        mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch((res) =>
            this.setState({
                errors: res.graphQLErrors.map((err) => err.message)
            })
        );
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        );
    }
}

export default graphql(mutation)(LoginForm);
