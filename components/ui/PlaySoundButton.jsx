import useSound from "use-sound";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";

export default function PlaySoundButton() {
  const [pause, usePause] = useState(false);
  const [play, { stop }] = useSound("./soundmono.mp3");

  function useToggleButton() {
    usePause(!pause);
    if (pause == false) {
      play();
    } else {
      stop();
    }
  }

  return (
    <>
      <div key="bsfillplayfill" className="sidebar-icon group">
        <button onClick={useToggleButton}>
          {<BsFillPlayFill size="40" />}
        </button>
        <span className="sidebar-tooltip group-hover:scale-100">play</span>
      </div>
    </>
  );
}
