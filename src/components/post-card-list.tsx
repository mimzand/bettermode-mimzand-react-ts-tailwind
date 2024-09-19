import PostCard from "./post-card";

function PostCardList() {
  return (
    <>
      <div className="space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="mt-3">
          <button className="btn btn-sm btn-secondary w-full ">Show more</button>
        </div>
      </div>
    </>
  );
}

export default PostCardList;
