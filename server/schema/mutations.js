const graphql = require('graphql');
const { GraphQLObject, GraphQLString } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObject({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                AuthService.signup({ email, password, req });
            }
        }
    }
});

module.exports = mutation;
