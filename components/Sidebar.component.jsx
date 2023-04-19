import MainMenu from "./MainMenu.component";
import PlaySoundButton from "./ui/PlaySoundButton";
import SetThemeButton from "./ui/SetThemeButton";
import { useState, useEffect } from "react";
import { useResize } from "../hooks/useResize.hook";

const SideBar = () => {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  if (resize.width > 640) {
    return (
      <div className="flex flex-col justify-between md:flex-none basis-16 bg-black dark:bg-white">
        <MainMenu />
        <div className="">
          <PlaySoundButton />
          <SetThemeButton />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between basis-16 bg-black dark:bg-white">
        <MainMenu />
        <div className="flex">
          <PlaySoundButton />
          <SetThemeButton />
        </div>
      </div>
    );
  }
};
export default SideBar;
