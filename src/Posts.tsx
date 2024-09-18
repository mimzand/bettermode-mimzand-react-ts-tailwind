import { memo, useCallback, useEffect } from "react";
import useApi from "./apis/UseApi";

function Posts() {
  const Api = useApi();

  const getPosts = useCallback(() => {
    Api.getAllPosts().then((result) => {
      if (result) console.log(result);
    });
  }, [Api]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <button className="btn btn-primary" onClick={getPosts}>
        GET AGAIN!
      </button>
    </>
  );
}

export default memo(Posts);
