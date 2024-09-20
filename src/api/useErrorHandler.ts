import { toast } from "react-toastify";
import { useEffect } from "react";

export default function useErrorHandler(error: any, noRedirect?: boolean) {
  return useEffect(() => {
    if (error) {
      const errorMessage =
        error?.cause?.result?.errors
          ?.map((error: any) => error.message)
          ?.join(", ") ||
        error?.cause?.message ||
        error.message ||
        "Unknown error";
      toast.error("Server error: " + errorMessage);

      if (!noRedirect && error.cause?.status == 403) {
        localStorage.removeItem("access_token");
        window.location.href = "/auth";
      }
    }
  }, [error, noRedirect]);
}
