import { useCallback, useContext } from "react";
import responseHandler from "./responseHandler";
import { GraphQlContext } from "./useGraphQL";
import {
  authMemberQuery,
  getAllPostsQuery,
  getAccessTokenQuery,
} from "./queries";

export default function useApi() {
  const gqlClient = useContext(GraphQlContext);

  const Auth = {
    getAccessToken: useCallback(
      async (payload?: { setLoading?: (value?: boolean) => void }) => {
        if (!gqlClient) return;

        payload?.setLoading && payload.setLoading(true);
        const response = await gqlClient
          .query({
            query: getAccessTokenQuery,
            variables: {
              networkDomain:
                import.meta.env.VITE_NETWORK_DOMAIN || "mimzand.bettermode.io",
            },
          })
          .catch((error: any) => {
            responseHandler.ErrorHandler(error);
          })
          .finally(() => {
            payload?.setLoading && payload.setLoading(false);
          });

        if (
          response &&
          response.data &&
          responseHandler.checkResponse(response)
        ) {
          localStorage.setItem(
            "access_token",
            response?.data?.tokens?.accessToken || ""
          );
          return response.data;
        }
      },
      [gqlClient]
    ),

    authMember: useCallback(
      async (payload?: { setLoading?: (value?: boolean) => void }) => {
        if (!gqlClient) return;

        payload?.setLoading && payload.setLoading(true);
        const response = await gqlClient
          .query({
            query: authMemberQuery,
          })
          .catch((error: any) => {
            responseHandler.ErrorHandler(error);
          })
          .finally(() => {
            payload?.setLoading && payload.setLoading(false);
          });

        if (
          response &&
          response.data &&
          responseHandler.checkResponse(response)
        )
          return response.data;
      },
      [gqlClient]
    ),
  };

  const getAllPosts = useCallback(
    async (payload?: { setLoading?: (value?: boolean) => void }) => {
      if (!gqlClient) return;

      payload?.setLoading && payload.setLoading(true);
      const response = await gqlClient
        .query({
          query: getAllPostsQuery,
          variables: { limit: 2, offset: 1 },
        })
        .catch((error: any) => {
          responseHandler.ErrorHandler(error);
        })
        .finally(() => {
          payload?.setLoading && payload.setLoading(false);
        });

      if (response && response.data && responseHandler.checkResponse(response))
        return response.data;
    },
    [gqlClient]
  );

  return { Auth, getAllPosts };
}
