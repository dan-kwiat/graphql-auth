import jwt from 'jwt-simple'

const SECRET = 'some-strong-secret-key'

const getAccessToken = (userId, scope) => jwt.encode({
  iss: 'graphql-test-server',
  iat: 1509041117,
  exp: 2540577117,
  aud: 'graphql-test-api',
  sub: userId,
  scope: scope,
}, SECRET)

export default getAccessToken