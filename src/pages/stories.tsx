import PostCard from "../components/post-card";
import PostCardList from "../components/post-card-list";
import PostListHeader from "../components/post-list-haeder";

function Stories() {
  return (
    <>
      <div className="w-full flex flex-col max-w-full md:max-w-8xl self-center space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 py-3 sm:py-3.5 md:py-4 lg:py-5 px-0 sm:px-0 md:px-0 lg:px-0">
        <PostListHeader />
        <PostCard />

        <PostListHeader />
        <PostCardList />
      </div>
    </>
  );
}

export default Stories;
