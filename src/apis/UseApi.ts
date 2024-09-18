import { useCallback, useContext } from "react";
import { GraphQlContext } from "./useGraphQL";
import { getAllPostsQuery } from "./queries";
import responseHandler from "./responseHandler";

export default function useApi() {
  const gqlClient = useContext(GraphQlContext);

  const getAllPosts = useCallback(
    async (setLoading?: (value?: boolean) => void) => {
      if (!gqlClient) return;

      setLoading && setLoading(true);
      const response = await gqlClient
        .query({
          query: getAllPostsQuery,
          variables: { limit: 2, offset: 1 },
        })
        .catch((error: any) => {
          responseHandler.ErrorHandler(error);
        })
        .finally(() => {
          setLoading && setLoading(false);
        });

      if (response && response.data && responseHandler.checkResponse(response))
        return response.data;
    },
    [gqlClient]
  );

  return { getAllPosts };
}
