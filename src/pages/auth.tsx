import LoadingOverlay from "../components/loading-overlay";
import useErrorHandler from "../api/useErrorHandler";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import Api from "../api";

export default function Auth() {
  const { data, error } = useQuery(Api.Queries.Auth.getAccessTokenQuery, {
    variables: {
      networkDomain:
        import.meta.env.VITE_NETWORK_DOMAIN ||
        "betterhunt-sj1n88tv.bettermode.io",
    },
  });
  useErrorHandler(error);

  useEffect(() => {
    if (data) {
      localStorage.setItem("access_token", data?.tokens?.accessToken || "");
      window.location.href = "/";
    }
  }, [data]);

  return <LoadingOverlay />;
}
