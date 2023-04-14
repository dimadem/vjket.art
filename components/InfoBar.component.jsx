import { useState, useEffect } from "react";
import { useResize } from "../hooks/useResize.hook";

export default function InfoBar({ discipline, year }) {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  return (
    <>
      {resize.width > 640 ? (
        <div
          className="
          select-none
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
                <p key={key} className="infoBar">
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
                  <p key={key} className="infoBar">
                    {letter}
                  </p>
                );
              })}
        </div>
      ) : null}
    </>
  );
}
