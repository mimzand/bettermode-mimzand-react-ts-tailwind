import LoadingOverlay from "../components/loading-overlay";
import ErrorHandler from "../api/errorHandler";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import Api from "../api";

export default function Auth() {
  const { data, error } = useQuery(Api.Queries.Auth.getAccessTokenQuery, {
    variables: {
      networkDomain:
        import.meta.env.VITE_NETWORK_DOMAIN || "mimzand.bettermode.io",
    },
  });

  useEffect(() => {
    if (error) ErrorHandler(error);
    else if (data) {
      localStorage.setItem("access_token", data?.tokens?.accessToken || "");
      window.location.href = "/";
    }
  }, [data, error]);

  return <LoadingOverlay />;
}
