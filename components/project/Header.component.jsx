export default function HeaderComponent({ title, disciplines }) {
  return (
    <div className="flex flex-row items-center space-x-2 pb-2">
      <div className="w-1/2">
        <span
          className="
    px-4
    border 
    text-xs 
    font-light 
    bg-neutralWhite
    dark:bg-neutralBlack
    "
        >
          {disciplines}
        </span>
      </div>

      <div
        className="
    w-1/2
    overflow-x-auto
    scrollbar-hide
    overscroll-contain
    "
      >
        <span
          className="
    font-normal
    text-2xl
    tracking-widest
    truncate
    "
        >
          {title}
        </span>
      </div>
    </div>
  );
}
