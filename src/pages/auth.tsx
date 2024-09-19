import { useCallback, useEffect } from "react";
import LoadingOverlay from "../components/loading-overlay";
import useApi from "../apis/UseApi";

export default function Auth() {
  const Api = useApi();

  const getToken = useCallback(async () => {
    await Api.Auth.getAccessToken().then((response) => {
      if (response) window.location.href = "/";
    });
  }, [Api]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <LoadingOverlay />;
}
