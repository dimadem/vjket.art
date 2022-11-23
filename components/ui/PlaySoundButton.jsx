import useSound from "use-sound";
import { BsFillPlayFill } from "react-icons/bs";

export default function PlaySoundButton() {
  const [play] = useSound("./soundmono.mp3");

  return (
    <>
      <div key="bsfillplayfill" className="sidebar-icon group">
        <button onClick={play}>{<BsFillPlayFill size="40" />}</button>
        <span className="sidebar-tooltip group-hover:scale-100">play</span>
      </div>
    </>
  );
}
