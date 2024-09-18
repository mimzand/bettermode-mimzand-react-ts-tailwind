import { ApolloQueryResult, NetworkStatus } from "@apollo/client";
import { toast } from "react-toastify";

export default {
  checkResponse(response: ApolloQueryResult<any>) {
    if (response.networkStatus == NetworkStatus.error) return false;
    return true;
  },

  ErrorHandler(error: any, noRedirect?: boolean) {
    const errorMessage =
      error?.cause?.result?.errors
        ?.map((error: any) => error.message)
        ?.join(", ") ||
      error?.cause?.message ||
      error.message ||
      "Unknown error";
    toast.error("Server error: " + errorMessage);
    if (!noRedirect && error.response?.status == 401) {
      // remove auth token and redirect
    }
  },
};
