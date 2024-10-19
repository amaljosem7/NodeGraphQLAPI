const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolvers')
const app = express()


// app.use((req, res) => {
//     res.send('hallo')
// })


app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true // Optional: enables GraphiQL UI
    })
);


app.listen(4000)