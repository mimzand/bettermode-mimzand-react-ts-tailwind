import LoadingOverlay from "../components/loading-overlay";
import useErrorHandler from "../api/useErrorHandler";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import Api from "../api";

export default function Index() {
  const navigate = useNavigate();
  const { data, error } = useQuery(Api.Queries.Auth.authMemberQuery);
  useErrorHandler(error);

  useEffect(() => {
    if (data) navigate("/stories");
  }, [data, navigate]);

  return <LoadingOverlay />;
}
