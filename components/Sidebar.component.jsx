import MainMenu from "./MainMenu.component";
import PlaySoundButton from "./ui/PlaySoundButton";
import SetThemeButton from "./ui/SetThemeButton";
import { useState } from "react";
import { useResize } from "../hooks/useResize.hook";

export default function SideBar() {
  const [resize, setResize] = useState({ width: undefined, height: undefined });
  useResize(setResize);

  return (
    <>
      {resize.width > 640 ? (
        <div className="flex flex-col justify-between md:flex-none basis-16 bg-black dark:bg-white">
          <MainMenu />
          <div>
            <PlaySoundButton />
            <SetThemeButton />
          </div>
        </div>
      ) : (
        <div className="flex justify-between md:flex-none basis-16 bg-black dark:bg-white">
          <MainMenu />
          <div className="flex">
            <PlaySoundButton />
            <SetThemeButton />
          </div>
        </div>
      )}
    </>
  );
}
