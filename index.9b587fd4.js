const { algoliasearch: $56a0b18e519895ee$var$algoliasearch , instantsearch: $56a0b18e519895ee$var$instantsearch , config: $56a0b18e519895ee$var$config  } = window;
const { ALGOLIA_APP_ID: $56a0b18e519895ee$var$ALGOLIA_APP_ID , ALGOLIA_API_KEY: $56a0b18e519895ee$var$ALGOLIA_API_KEY , ALGOLIA_INDEX_NAME: $56a0b18e519895ee$var$ALGOLIA_INDEX_NAME  } = $56a0b18e519895ee$var$config;
const $56a0b18e519895ee$var$searchClient = $56a0b18e519895ee$var$algoliasearch($56a0b18e519895ee$var$ALGOLIA_APP_ID, $56a0b18e519895ee$var$ALGOLIA_API_KEY);
const $56a0b18e519895ee$var$search = $56a0b18e519895ee$var$instantsearch({
    indexName: $56a0b18e519895ee$var$ALGOLIA_INDEX_NAME,
    searchClient: $56a0b18e519895ee$var$searchClient
});
$56a0b18e519895ee$var$search.addWidgets([
    $56a0b18e519895ee$var$instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search for a product",
        autofocus: true
    }),
    $56a0b18e519895ee$var$instantsearch.widgets.rangeSlider({
        container: "#price-widget",
        attribute: "price",
        precision: 2,
        pips: false,
        min: 0.00,
        max: 5000.00
    }),
    $56a0b18e519895ee$var$instantsearch.widgets.hits({
        container: "#hits",
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
`
        }
    }),
    $56a0b18e519895ee$var$instantsearch.widgets.configure({
        hitsPerPage: 8
    }),
    $56a0b18e519895ee$var$instantsearch.widgets.dynamicWidgets({
        container: "#dynamic-widgets",
        fallbackWidget ({ container: container , attribute: attribute  }) {
            return $56a0b18e519895ee$var$instantsearch.widgets.panel({
                templates: {
                    header: attribute
                }
            })($56a0b18e519895ee$var$instantsearch.widgets.refinementList)({
                container: container,
                attribute: attribute
            });
        },
        widgets: []
    }),
    $56a0b18e519895ee$var$instantsearch.widgets.pagination({
        container: "#pagination"
    }), 
]);
$56a0b18e519895ee$var$search.start();


//# sourceMappingURL=index.9b587fd4.js.map
