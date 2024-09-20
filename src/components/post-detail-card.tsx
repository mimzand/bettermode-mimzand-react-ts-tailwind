import { useCallback } from "react";
import Like from "./like";

function PostDetailCard({ post }: { post: any }) {
  const timeAgo = useCallback((dateString: string) => {
    const now = new Date();
    const pastDate = new Date(dateString);

    let years = now.getFullYear() - pastDate.getFullYear();
    let months = now.getMonth() - pastDate.getMonth();
    let days = now.getDate() - pastDate.getDate();

    if (days < 0) {
      months--;
      const daysInLastMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += daysInLastMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0) return `${years} years ago`;
    else if (months > 0) return `${months} months ago`;
    else return `${days} days ago`;
  }, []);

  return (
    <>
      <div className="card bg-white w-full card-bordered card-compact ">
        <figure>
          <div className="w-full relative aspect-video">
            <div
              className={
                "w-full h-full bg-cover bg-center absolute top-0 start-0"
              }
              style={{
                backgroundImage: `url(${
                  post?.fields?.find((field: any) => field.key == "cover_image")
                    ?.relationEntities?.medias[0]?.urls?.full
                })`,
              }}
            />
          </div>
        </figure>
        <div className="card-body gap-4">
          <div className="cursor-pointer">
            <div className="flex items-center space-x-3 min-w-0 grow post-member-bar">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-xl">
                  <span className="font-medium uppercase text-md">
                    {post?.owner?.member?.name?.match(/\b(\w)/g).join("")}
                  </span>
                </div>
              </div>
              <div className="min-w-0 grow">
                <div className="font-medium">{post?.owner?.member?.name}</div>
                <div className="text-sm">{timeAgo(post?.publishedAt)}</div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="card-title font-medium text-2xl">{post?.title}</h1>
          </div>

          <article
            className="space-y-4"
            dangerouslySetInnerHTML={{
              __html: JSON.parse(
                post?.fields?.find((field: any) => field.key == "content")
                  ?.value || '""'
              )?.replace(/(<? *script)/gi, "illegalscript"),
            }}
          />

          <div className="card-actions justify-start items-center space-x-2">
            <Like
              postId={post?.id}
              active={
                post?.reactions &&
                post?.reactions?.length &&
                post?.reactions[0]?.reaction == "like-it" &&
                post?.reactions[0]?.reacted == true
              }
              total={post?.reactionsCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetailCard;
