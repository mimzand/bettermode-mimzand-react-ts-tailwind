import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import apolloClient from "./api/apolloClient";
import Stories from "./pages/stories";
import Auth from "./pages/auth";
import Post from "./pages/post";
import Index from "./pages";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/stories/post/:postSlug",
    element: <Post />,
  },
]);

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <div className="container mx-auto max-w-screen-lg">
          <RouterProvider router={router} />
        </div>
        <ToastContainer
          position="bottom-center"
          theme="colored"
          draggable
          pauseOnHover
          hideProgressBar={false}
        />
      </ApolloProvider>
    </>
  );
}

export default App;
