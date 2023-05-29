import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/signup';
import query from '../queries/currentUser';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
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
                <h3>Sign Up</h3>
                <AuthForm
                    onSubmit={this.onSubmit.bind(this)}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default graphql(query)(graphql(mutation)(SignupForm));
