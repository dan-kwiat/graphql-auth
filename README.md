# GraphQL Auth

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
