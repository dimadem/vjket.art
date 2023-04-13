export default function CenterFrame({ children }) {
  return (
    <div className="items-center bg-white dark:bg-black">
      <div className="my-10 mx-6 h-5/6 overflow-y-auto scrollbar-hide w-full">
        {children}
      </div>
    </div>
  );
}
