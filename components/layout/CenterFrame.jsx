export default function CenterFrame({ children }) {
  return (
    <div className="flex w-fit h-screen items-center bg-white dark:bg-black">
      <div className="my-10 mr-6 ml-20 h-5/6 w-fit overflow-y-auto scrollbar-hide overscroll-contain">
        {children}
      </div>
    </div>
  );
}
