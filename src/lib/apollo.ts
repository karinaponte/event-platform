import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7p8kc0yzy01z7fpl77m7g/master',
    cache: new InMemoryCache()
})