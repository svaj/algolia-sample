const{algoliasearch:i,instantsearch:e,config:t}=window,{ALGOLIA_APP_ID:a,ALGOLIA_API_KEY:n,ALGOLIA_INDEX_NAME:r}=t,s=i(a,n),c=e({indexName:r,searchClient:s});c.addWidgets([e.widgets.searchBox({container:"#searchbox",placeholder:"Search for a product",autofocus:!0}),e.widgets.rangeSlider({container:"#price-widget",attribute:"price",precision:2,pips:!1,min:0,max:5e3}),e.widgets.hits({container:"#hits",templates:{item:'\n<article><a class="product-link" href="{{url}}">\n  <img src="{{image}}" align="left" alt="{{name}}" />\n  <div class="hit-name">\n    {{name}}\n  </div>\n  <div class="hit-description">\n    {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}\n  </div>\n  <div class="hit-price">${{price}}</div></a>\n</article>\n'}}),e.widgets.configure({hitsPerPage:8}),e.widgets.dynamicWidgets({container:"#dynamic-widgets",fallbackWidget:({container:i,attribute:t})=>e.widgets.panel({templates:{header:t}})(e.widgets.refinementList)({container:i,attribute:t}),widgets:[]}),e.widgets.pagination({container:"#pagination"})]),c.start();
//# sourceMappingURL=index.8fb185d5.js.map
