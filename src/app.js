const { algoliasearch, instantsearch, config } = window;
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = config;

console.info("config", config)
const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const search = instantsearch({
  indexName: ALGOLIA_INDEX_NAME,
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for a product',
    autofocus: true,

  }),
  	

  instantsearch.widgets.rangeSlider({
    container: '#price-widget',
    attribute: 'price',
    precision: 2,
    pips: false,
    min: 0.00,
    max: 5000.00,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article><a class="product-link" href="{{url}}">
  <img src="{{image}}" align="left" alt="{{name}}" />
  <div class="hit-name">
    {{name}}
  </div>
  <div class="hit-description">
    {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
  </div>
  <div class="hit-price">\${{price}}</div></a>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.panel({ templates: { header: attribute } })(
        instantsearch.widgets.refinementList
      )({
        container,
        attribute,
      });
    },
    widgets: [
    ],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
