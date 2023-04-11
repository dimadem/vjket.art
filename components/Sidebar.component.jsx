import MainMenu from "./ui/MainMenu";
import PlaySoundButton from "./ui/PlaySoundButton";
import SetThemeButton from "./ui/SetThemeButton";

export default function Sidebar() {
  return (
    <div className="flex order-first flex-col z-10 basis-16 min-h-full justify-between bg-black dark:bg-white">
      <MainMenu />
      <div>
        <PlaySoundButton />
        <SetThemeButton />
      </div>
    </div>
  );
}
