import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { useEffect, useState, createContext } from "react";

export const GraphQlContext = createContext<
  ApolloClient<NormalizedCacheObject> | undefined
>(undefined);

export default function useGraphQL() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const httpLink = createHttpLink({
      uri: import.meta.env.VITE_API_HOST,
    });

    const authLink = setContext((_, { headers }) => {
      const token =
        localStorage.getItem("access_token") || import.meta.env.VITE_AUTH_TOKEN;

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    setClient(
      new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      })
    );
  }, []);

  return client;
}
