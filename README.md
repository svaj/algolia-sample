# algolia-sample
A sample project with Algolia

# Configuration
This sample application is configurable via environment variables.  A .env.example is provided.

# Indexing
The data from the dataset may be indexed to Algolia via running `yarn index`.

# Search UI
The search UI may be run locally via `yarn start`.  To build the UI, `yarn build` may be used.  The built html/css/js is created in `dist/`.  Currently the search UI will need to have its api key/index details configured in `src/app.js`.