export default function CenterFrame({ children }) {
  return (
    <div className="flex w-screen h-screen items-center bg-white dark:bg-black">
      <div className="my-10 mr-6 ml-20 h-5/6 overflow-y-auto scrollbar-hide overscroll-contain">
        {children}
      </div>
    </div>
  );
}
