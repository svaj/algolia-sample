import {config} from "dotenv";
config({ path: ".env" });
window.config = {
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
}