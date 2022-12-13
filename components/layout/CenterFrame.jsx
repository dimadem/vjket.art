export default function CenterFrame({ children }) {
  return (
    <div className="flex order-2 w-full h-screen items-center bg-white dark:bg-black">
      <div className="my-10 mx-6 h-5/6 overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
