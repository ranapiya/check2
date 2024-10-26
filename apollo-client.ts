import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://testnet.api.euclidprotocol.com/graphql",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;