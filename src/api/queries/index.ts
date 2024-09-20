import { authMemberQuery } from "./authMemberQuery";
import { getAccessTokenQuery } from "./getAccessTokenQuery";
import { getAllPostsQuery } from "./getAllPostsQuery";

const ApiQueries = {
  Auth: {
    authMemberQuery,
    getAccessTokenQuery,
  },
  Posts: {
    getAllPostsQuery,
  },
};

export default ApiQueries;
