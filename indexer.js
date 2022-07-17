import fs from "fs";
import algoliasearch from "algoliasearch";
import dotenv from "dotenv";
import StreamArray from "stream-json/streamers/StreamArray.js";



// async wrapper around streaming from file to Algolia index
const streamObjectsFromFile = (algoliaIndex, datasetFile) => {

    return new Promise((resolve, reject) => {
        // Create a json stream array parser
        const jsonStream = StreamArray.withParser();

        // Stream file into indexing method
        fs.createReadStream(datasetFile).pipe(jsonStream.input);

        // Key is the array-index here
        jsonStream.on('data', async ({ key, value }) => {
            console.debug("Saving object to index... ", { key, value });
            try {
                await algoliaIndex.saveObject(value).wait();
            } catch (err) {
                console.error("Error while saving object to index", err);
                reject();
            }
        });

        jsonStream.on('end', () => {
            console.log('All Done');
            resolve();
        });
    });
}

const main = async () => {
    try {
        dotenv.config();
        // Algolia client credentials
        const {
            ALGOLIA_APP_ID, 
            ALGOLIA_API_KEY, 
            ALGOLIA_INDEX_NAME,
            DATASET_FILE,
        } = process.env;

        // Initialize the client
        const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

        // Initialize an index
        const index = algoliaClient.initIndex(ALGOLIA_INDEX_NAME);

        // index objects from file
        await streamObjectsFromFile(index, DATASET_FILE);

        // set index settings for search (facets, filters, searchable attributes, etc)
        await index.setSettings({
            searchableAttributes: [
             'brand',
             'categories',
             'type',
             'unordered(description)'
           ],
           ranking: [
            'desc(popularity)',
            'desc(rating)',
            'desc(price)',
           ],
           attributesForFaceting: [
             'searchable(brand)',
             'searchable(categories)',
             'price',
             'free_shipping'
           ]
         })
    }
    catch (err) {
        console.error(err);
    }
    
}

main();