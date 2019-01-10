const { AuthorizationError } = require('./../errors')

const directiveResolvers = {
  isAuthenticated(next, source, args, context) {
    if (!context.user) {
      throw new AuthorizationError({
        message: 'You must supply a JWT for authorization!'
      })
    }
    return next()
  },
  hasScope(next, source, args, context) {
    const expectedScopes = args.scopes
    const scopes = context.user && context.user.scope && context.user.scope.split(' ')
    const hasAllScopes = scopes && expectedScopes.every(x => scopes.indexOf(x) !== -1)
    if (!hasAllScopes) {
      throw new AuthorizationError({
        message: `You are not authorized. Expected scopes: ${expectedScopes.join(', ')}`
      })
    }
    return next()
  }
}

module.exports = { directiveResolvers }
