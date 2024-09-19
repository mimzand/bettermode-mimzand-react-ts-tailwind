import "react-toastify/dist/ReactToastify.css";

import useGraphQL, { GraphQlContext } from "./apis/useGraphQL";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Index from "./pages";
import Auth from "./pages/auth";
import Posts from "./pages/posts";

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
    path: "/posts",
    element: <Posts />,
  },
]);

function App() {
  const gqlc = useGraphQL();

  return (
    <>
      <GraphQlContext.Provider value={gqlc}>
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-center"
          theme="colored"
          draggable
          pauseOnHover
          hideProgressBar={false}
        />
      </GraphQlContext.Provider>
    </>
  );
}

export default App;
