import "react-toastify/dist/ReactToastify.css";

import useGraphQL, { GraphQlContext } from "./apis/useGraphQL";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Index from "./pages";
import Auth from "./pages/auth";
import Stories from "./pages/stories";

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
]);

function App() {
  const gqlc = useGraphQL();

  return (
    <>
      <GraphQlContext.Provider value={gqlc}>
        <div className="container mx-auto max-w-max">
          <RouterProvider router={router} />
        </div>
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
