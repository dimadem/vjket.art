export default function CenterFrame({ children }) {
  return (
    <div className="flex flex-col h-screen w-full justify-center overflow-hidden bg-white dark:bg-black">
      <div className="flex flex-col h-fit items-center overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
