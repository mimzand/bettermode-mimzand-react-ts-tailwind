function PostListHeader() {
  return (
    <>
      <div className="flex justify-between items-end">
        <div className="min-w-0 break-words px-4 sm:px-0 flex-1">
          <div className="sm:flex sm:justify-between">
            <div className="sm:w-0 sm:flex-1 space-y-2">
              <h3 className="font-medium text-2xl">Top Story</h3>
              <div className="text-sm">Top story of this week</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostListHeader;
