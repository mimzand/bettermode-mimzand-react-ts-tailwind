import { Link } from "react-router-dom";

function PostCard({ post, featured }: { post: any; featured?: boolean }) {
  return (
    <>
      <Link to={`/stories/post/${post?.slug}-${post?.id}`}>
        <div className="card bg-white w-full card-bordered card-compact cursor-pointer">
          <figure>
            <div className="w-full relative aspect-video">
              <div
                className={
                  "w-full h-full bg-cover bg-center absolute top-0 start-0"
                }
                style={{
                  backgroundImage: `url(${
                    featured
                      ? post?.fields?.find(
                          (field: any) => field.key == "cover_image"
                        )?.relationEntities?.medias[0]?.urls?.full
                      : post?.fields?.find(
                          (field: any) => field.key == "cover_image"
                        )?.relationEntities?.medias[0]?.urls?.medium
                  })`,
                }}
              />
            </div>
          </figure>
          <div className="card-body gap-4">
            {!featured && (
              <div className="grow-0 shrink-0">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex space-x-2 items-center empty:hidden text-sm">
                    <img
                      src="/icons/heart-rounded.svg"
                      className="shrink-0 h-[1.25em] w-[1.25em]"
                    />
                    <span>{post?.reactionsCount}</span>
                  </div>
                </div>
              </div>
            )}
            <div>
              <h2 className="card-title">{post?.title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
