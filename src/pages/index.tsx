import { useCallback, useEffect } from "react";
import LoadingOverlay from "../components/loading-overlay";
import { useNavigate } from "react-router-dom";
import useApi from "../apis/UseApi";

export default function Index() {
  const Api = useApi();
  const navigate = useNavigate();

  const getToken = useCallback(() => {
    Api.Auth.authMember().then((result) => {
      if (result) navigate("/posts");
    });
  }, [Api.Auth, navigate]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <LoadingOverlay />;
}
