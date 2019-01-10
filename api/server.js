const express = require('express')
const jwt = require('express-jwt')
const graphqlHTTP = require('express-graphql')
const config = require('./config')
const schema = require('./schema')

const app = express()
const port = process.env.PORT || 4000
const { audience, issuer, secret } = config.jwt

app.use(jwt({
  audience,
  issuer,
  secret,
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

app.listen(port)
console.log(`App listening on localhost:${port}`)