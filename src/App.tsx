import useGraphQL, { GraphQlContext } from "./apis/useGraphQL";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Posts from "./Posts";

function App() {
  const gqlc = useGraphQL();

  return (
    <>
      <GraphQlContext.Provider value={gqlc}>
        <Posts />
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
