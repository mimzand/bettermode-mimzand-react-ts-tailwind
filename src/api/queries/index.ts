import { getAccessTokenQuery } from "./getAccessTokenQuery";
import { getAllPostsQuery } from "./getAllPostsQuery";
import { authMemberQuery } from "./authMemberQuery";
import { getPostQuery } from "./getPostQuery";

const ApiQueries = {
  Auth: {
    authMemberQuery,
    getAccessTokenQuery,
  },
  Posts: {
    getPostQuery,
    getAllPostsQuery,
  },
};

export default ApiQueries;
