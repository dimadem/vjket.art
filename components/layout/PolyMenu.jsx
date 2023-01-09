import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Poly from "../geometry/geometry";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";
// import { GlitchMode } from "postprocessing";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function PolyMenu() {
  // take theme from context
  const { theme } = useTheme();

  // set color for darkmode and lightmode
  const [color, setColor] = useState("#4B4B4B");
  useEffect(() => {
    if (theme == "dark") setColor("#4B4B4B");
    if (theme == "light") setColor("#D9D9D9");
  }, [theme]);

  const black = "#171717";
  const white = "#f1f1f1";
  const neutralBlack = "#4B4B4B";
  const neutralWhite = "#D9D9D9";

  return (
    <div className="flex order-2 bg-neutralWhite dark:bg-black w-screen h-screen">
      {/* Canvas */}
      <Canvas gl={{ antialias: false }}>
        {/* performance data */}
        <Perf position="bottom-left" />

        {/* background */}
        <color args={[color]} attach="background" />

        {/* Camera */}
        <OrbitControls
          // makeDefault
          enableDamping={true}
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
        />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} />

        {/* Geometry */}
        <Poly />

        {/* Effects */}
        <EffectComposer>
          {/* <DepthOfField
            focusDistance={0.0025}
            focalLength={0.007}
            bokehScale={4}
            height={240}
          /> */}
          <Noise opacity={0.7} />
          <Glitch delay={[0.5, 2]} duration={[0.01, 0.2]} />

          <Vignette offset={0.1} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
