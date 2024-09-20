import PostListHeader from "../components/post-list-header";
import LoadingOverlay from "../components/loading-overlay";
import PostCardList from "../components/post-card-list";
import useErrorHandler from "../api/useErrorHandler";
import usePagination from "../api/usePagination";
import PostCard from "../components/post-card";
import { useQuery } from "@apollo/client";
import Api from "../api";

function Stories() {
  const {
    data: featuredPostsData,
    loading: featuredPostsLoading,
    error: featuredPostsError,
  } = useQuery(Api.Queries.Posts.getAllPostsQuery, {
    variables: {
      limit: 1,
      spaceIds: ["VAjOJUdJcr7Q"],
      postTypeIds: ["QilxdwEWof9clDm"],
      orderByString: "publishedAt",
      reverse: true,
      filterBy: [
        {
          keyString: "fields.featured",
          operator: "equals",
          value: "true",
        },
      ],
    },
  });
  useErrorHandler(featuredPostsError);

  const {
    data: PostsData,
    loading: PostsLoading,
    error: PostsError,
    isMore,
    loadMore,
  } = usePagination(Api.Queries.Posts.getAllPostsQuery, {
    variables: {
      limit: 3,
      spaceIds: ["VAjOJUdJcr7Q"],
      postTypeIds: ["QilxdwEWof9clDm"],
      orderByString: "publishedAt",
      reverse: false,
    },
  });
  useErrorHandler(PostsError);

  return (
    <>
      <div className="w-full flex flex-col max-w-full md:max-w-8xl self-center space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 py-3 sm:py-3.5 md:py-4 lg:py-5 px-0 sm:px-0 md:px-0 lg:px-0">
        <PostListHeader title="Top Story" subtitle="Top story of this week" />
        <PostCard post={featuredPostsData?.posts?.nodes[0]} featured />

        <PostListHeader
          title="Other Stories"
          subtitle="Other Stories of products"
        />
        <PostCardList
          posts={PostsData}
          isMore={isMore}
          loadMore={loadMore}
          loading={PostsLoading}
        />
      </div>
      {featuredPostsLoading && <LoadingOverlay />}
    </>
  );
}

export default Stories;
