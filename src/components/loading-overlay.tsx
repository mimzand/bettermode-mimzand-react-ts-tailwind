function LoadingOverlay() {
  return (
    <div className="absolute top-0 left-0 bg-black bg-opacity-60 z-10 h-full min-h-screen w-full flex items-center justify-center">
      <div className="flex m-auto items-center">
        <span className="loading loading-ring loading-lg" />
        <span className="text-xl ml-2 text-white">
          Connecting to the server...
        </span>
      </div>
    </div>
  );
}

export default LoadingOverlay;
