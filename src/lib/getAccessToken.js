import jwt from 'jwt-simple'

// these should match values in api/.env
const JWT_AUDIENCE = 'graphql-test-api'
const JWT_ISSUER = 'graphql-test-server'
const JWT_SECRET = 'some-strong-secret-key'

const getAccessToken = (userId, scope) => jwt.encode({
  aud: JWT_AUDIENCE,
  iss: JWT_ISSUER,
  iat: 1509041117,
  exp: 2540577117,
  sub: userId,
  scope: scope,
}, JWT_SECRET)

export default getAccessToken