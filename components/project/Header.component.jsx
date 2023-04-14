import { useState, useEffect } from "react";
import { useResize } from "../../hooks/useResize.hook";

export default function HeaderComponent({ title, disciplines }) {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  return (
    <div className="flex flex-row items-start space-x-2 pb-2">
      {resize.width > 640 ? (
        <div className="w-1/2">
          <span className="border text-xs px-4 bg-neutralWhite dark:bg-neutralBlack select-none">
            {disciplines}
          </span>
        </div>
      ) : null}

      <div
        className="
        sm:w-1/2
        w-full
        h-fit
        overflow-x-auto
        scrollbar-hide
        overscroll-contain
        overflow-y-hidden
        "
      >
        <span
          className="
          select-none
          p-2
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
