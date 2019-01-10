# GraphQL Auth

GraphQL schema directives provide an elegant solution for fine-grained authorisation e.g. based on the requester's access token scopes.  We explore this possibility with the following:

* A Node + Express + GraphQL API serving data from a JSON file.  Authentication and authorisation are performed using directives on certain queries and fields.
* A React web app serving a customised GraphiQL interface for interacting with the API.  The toolbar allows you to set the scopes of the JSON Web Token (which is sent to the API in the authorisation header).

## Demo

[https://graphql-auth.now.sh](https://graphql-auth.now.sh)

## Installation

Install the web app:

```bash
yarn
```

In another terminal, install the API:

```bash
cd api
yarn
```

## Run in Development

In development mode, both the web app and API will reload on file changes.

Run the web app:

```bash
yarn start
```

In another terminal, run the API:

```bash
cd api
yarn dev
```

## Experiment

Start with this query:

```
{
  allArticles {
    id
    authorId
    authorName
    review {
      rating
      comment
    }
  }
}
```

Try changing the JWT scope field in the toolbar (remember to re-execute the query).

To test the `@isAuthenticated` directive, try removing the `Authorization` header in `./src/App.js`.

## Thanks

This repo was inspired by [this talk](https://youtu.be/4_Bcw7BULC8?t=916) and related code: [github.com/chenkie/graphql-auth](https://github.com/chenkie/graphql-auth).
