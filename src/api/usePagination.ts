import {
  ApolloError,
  OperationVariables,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { useEffect, useState } from "react";

export default function usePagination(
  query: DocumentNode,
  options?: { variables?: OperationVariables }
) {
  const [data, setData] = useState<Array<any>>([]);
  const [isMore, setIsMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError>();
  const [endCursor, setEndCursor] = useState<string | null>();

  const {
    data: initData,
    loading: initLoading,
    error: initError,
  } = useQuery(query, {
    variables: {
      ...options?.variables,
    },
  });

  const [
    lazyLoadMore,
    { data: moreData, loading: moreLoading, error: moreError },
  ] = useLazyQuery(query);

  useEffect(() => {
    setLoading(initLoading);
  }, [initLoading]);

  useEffect(() => {
    setError(initError);
  }, [initError]);

  useEffect(() => {
    setLoading(moreLoading);
  }, [moreLoading]);

  useEffect(() => {
    setError(moreError);
  }, [moreError]);

  useEffect(() => {
    if (initData) {
      setData(initData.posts?.nodes);
      setIsMore(initData?.posts?.pageInfo?.hasNextPage);
      setEndCursor(initData?.posts?.pageInfo?.endCursor);
    }
  }, [initData]);

  useEffect(() => {
    if (moreData) {
      setData((data) => [...data, ...(moreData?.posts?.nodes || [])]);
      setIsMore(moreData?.posts?.pageInfo?.hasNextPage);
      setEndCursor(moreData?.posts?.pageInfo?.endCursor);
    }
  }, [moreData]);

  function loadMore() {
    lazyLoadMore({
      variables: {
        ...options?.variables,
        after: endCursor,
      },
    });
  }

  return { data, loading, error, isMore, loadMore };
}
