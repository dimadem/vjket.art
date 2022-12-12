import useSound from "use-sound";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";

export default function PlaySoundButton() {
  const [pause, usePause] = useState(false);
  const [play, { stop }] = useSound("./soundmono.mp3");

  function toggleButton() {
    if (pause) {
      usePause(false);
      play();
    } else {
      usePause(true);
      stop();
    }
  }

  return (
    <>
      <div key="bsfillplayfill" className="sidebar-icon group">
        <button onClick={toggleButton}>{<BsFillPlayFill size="40" />}</button>
        <span className="sidebar-tooltip group-hover:scale-100">play</span>
      </div>
    </>
  );
}
