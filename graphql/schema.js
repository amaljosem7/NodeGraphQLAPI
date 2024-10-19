const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type TestData {
        text: String
        views: Int
    }

    type RootQuery {
        hello: TestData!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);