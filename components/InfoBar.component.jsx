import { useState } from "react";
import { useResize } from "../hooks/useResize.hook";

export default function InfoBar({ discipline, year }) {
  const [resize, setResize] = useState({ width: 1280, height: undefined });
  useResize(setResize);

  return (
    <>
      {resize.width > 640 ? (
        <div
          className="
    flex 
    flex-col 
    h-screen 
    justify-evenly 
    items-center 
    w-1/5 
    bg-white dark:bg-black dark:text-neutralWhite"
        >
          {discipline &&
            discipline.split("").map((letter, key) => {
              return (
                <p key={key} className="text-3xl">
                  {letter}
                </p>
              );
            })}
          {year &&
            year
              .slice(0, 4)
              .split("")
              .map((letter, key) => {
                return (
                  <p key={key} className="text-3xl">
                    {letter}
                  </p>
                );
              })}
        </div>
      ) : null}
    </>
  );
}
