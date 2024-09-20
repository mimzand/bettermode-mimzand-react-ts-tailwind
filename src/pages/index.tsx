import LoadingOverlay from "../components/loading-overlay";
import ErrorHandler from "../api/errorHandler";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import Api from "../api";

export default function Index() {
  const navigate = useNavigate();
  const { data, error } = useQuery(Api.Queries.Auth.authMemberQuery);

  useEffect(() => {
    if (error) ErrorHandler(error);
    else if (data) navigate("/stories");
  }, [data, error, navigate]);

  return <LoadingOverlay />;
}
