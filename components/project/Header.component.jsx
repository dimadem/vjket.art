import { useState } from "react";
import { useResize } from "../../hooks/useResize.hook";

export default function HeaderComponent({ title, disciplines }) {
  const [resize, setResize] = useState({ width: undefined, height: undefined });
  useResize(setResize);

  return (
    <div className="flex flex-row items-center space-x-2 pb-2">
      {resize.width > 640 ? (
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
      ) : null}

      <div
        className="
        sm:w-1/2
        w-full
        px-2
        overflow-x-auto
        scrollbar-hide
        overscroll-contain
        "
      >
        <span
          className="
    font-normal
    text-2xl
    sm:tracking-widest
    truncate
    "
        >
          {title}
        </span>
      </div>
    </div>
  );
}
