import { useEffect } from "react";

export function useResize(setResize) {
  useEffect(() => {
    const handleResize = () => {
      setResize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setResize]);
}
