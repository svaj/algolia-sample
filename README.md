# algolia-sample
A sample project with Algolia.  This project will (when provided with Algolia API credentials) index the dataset in `dataset/bestbuy.json` in Algolia.  It will also set up the index with some basic configuration around searchable attributes, facets, etc.  This project also includes a UI to interact with the indexed data on Algolia.

# Configuration
This sample application is configurable via environment variables.  A .env.example is provided.

# Indexing
The data from the dataset may be indexed to Algolia via running `yarn index`.

# Search UI
The search UI may be run locally via `yarn start`.  To build the UI, `yarn build` may be used.  The built html/css/js is created in `dist/`.

# Author's note
This project helped me introduce myself to the Algolia product.  It was created in under a day and provided me with a great overview of the search service Algolia provides.  If I were to take a bit more time to refine this project, I'd want to:

* Ensure I'm properly batching and avoiding rate-limiting in the indexer.  I noticed the sdk provides some (perhaps all) of this functionality, but to quickly work with stream-json, I opted to send objects one-at-a-time.  Ideally I'd store up just under [10MB of objects](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/sending-records-in-batches/) and send those for indexing in one batch.  I'd also need to find out the rate limiting details to avoid hitting those.
* Explore more of the widgets available in [the widget showcase](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/).  Particularly, I think I could have hooked up the ratings (ratingsMenu) and free shipping (toggleRefinement) widgets to provide a better UX.
* Implemented infinite scroll, or provide a better pagination experience.
* Provided a way to share search results via [routing urls](https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/js/).

Overall, I'd highly recommend someone to take a dataset, get it indexed, and start playing around with Algolia!  I was seriously impressed at the amount of functionality that I've seen take **weeks** to build using other solutions.
