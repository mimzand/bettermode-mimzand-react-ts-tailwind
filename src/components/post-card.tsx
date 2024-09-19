function PostCard() {
  return (
    <>
      <div className="card bg-white w-full card-bordered card-compact cursor-pointer">
        <figure>
          <div className="w-full relative aspect-video">
            <div className="w-full h-full bg-cover bg-center absolute top-0 start-0  bg-[url('https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp')]" />
          </div>
        </figure>
        <div className="card-body gap-4">
          <div className="grow-0 shrink-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex space-x-2 items-center empty:hidden text-sm">
                <img
                  src="/icons/heart-rounded.svg"
                  className="shrink-0 h-[1.25em] w-[1.25em]"
                />
                <span>0</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
