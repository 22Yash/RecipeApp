import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderBase } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.0.102:4000/graphql",
  cache: new InMemoryCache(),
});

export default function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProviderBase client={client}>{children}</ApolloProviderBase>;
}
