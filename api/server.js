require('dotenv').config()
const express = require('express')
const jwt = require('express-jwt')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use(jwt({
  secret: process.env.JWT_SECRET,
  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  credentialsRequired: false, // allow empty tokens (but not invalid tokens)
}))
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ message: err.message }) // this is a case where 401 status is returned (not standard graphql 200)
  }
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false,
  })
)

app.listen(process.env.LISTEN_PORT)
console.log(`App listening on localhost:${process.env.LISTEN_PORT}`)