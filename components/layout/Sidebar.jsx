import MainMenu from "../ui/MainMenu";
import PlaySoundButton from "../ui/PlaySoundButton";
import SetThemeButton from "../ui/SetThemeButton";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col z-10 basis-16 h-screen order-first bg-black dark:bg-white">
      <MainMenu />
      <div className="mt-auto">
        <PlaySoundButton />
        <SetThemeButton />
      </div>
    </div>
  );
}
