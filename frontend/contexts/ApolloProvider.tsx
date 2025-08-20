import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderBase } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://recipeapp-backend-xsx1.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProviderBase client={client}>{children}</ApolloProviderBase>;
}
