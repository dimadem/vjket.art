export default function CenterFrame({ children }) {
  return (
    <>
      <div className="flex order-2 h-screen w-11/12 basis-4/5 items-center bg-white dark:bg-black">
        <div className="my-10 mr-6 ml-20 h-5/6 w-full overflow-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </>
  );
}
