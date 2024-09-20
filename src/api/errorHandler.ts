import { toast } from "react-toastify";

export default function ErrorHandler(error: any, noRedirect?: boolean) {
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
