import LoadingOverlay from "../components/loading-overlay";
import PostDetailCard from "../components/post-detail-card";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/page-title";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Api from "../api";

function Post() {
  const [pageTitle, setPageTitle] = useState("Post - BetterMode");

  const { postSlug } = useParams();
  const postId = postSlug?.substring(postSlug.lastIndexOf("-") + 1);
  const { data, loading } = useQuery(Api.Queries.Posts.getPostQuery, {
    variables: { id: postId },
  });

  const post = data?.post;

  useEffect(() => {
    if (post?.title) setPageTitle(post.title);
  }, [post?.title]);

  return (
    <>
      <PageTitle title={pageTitle} />
      <div className="w-full flex flex-col max-w-full md:max-w-8xl self-center space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 py-3 sm:py-3.5 md:py-4 lg:py-5 px-0 sm:px-0 md:px-0 lg:px-0">
        <div className="card bg-white w-full card-bordered card-compact p-2 md:p-4 lg:p-8 flex flex-row items-center gap-2">
          <Link className="btn btn-ghost btn-circle text-xl" to="/stories">
            ←
          </Link>
          <Link
            className="btn btn-ghost btn-primary text-lg rounded-full"
            to="/stories"
          >
            Stories
          </Link>
        </div>
        <PostDetailCard post={post} />
      </div>
      {loading && <LoadingOverlay />}
    </>
  );
}

export default Post;
