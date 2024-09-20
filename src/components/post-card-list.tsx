import PostCard from "./post-card";

function PostCardList({
  posts,
  isMore,
  loading,
  loadMore,
}: {
  isMore: boolean;
  loading: boolean;
  posts: Array<any>;
  loadMore: () => void;
}) {
  return (
    <>
      <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts &&
            posts.length &&
            posts.map((post) => <PostCard key={post?.id} post={post} />)}
        </div>
        {isMore && (
          <div className="mt-3">
            <button
              className="btn btn-sm btn-secondary w-full"
              onClick={loadMore}
            >
              {loading && <span className="loading loading-spinner" />}
              Show more
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PostCardList;
