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

export default function PolyMenu() {
  return (
    <div className="flex order-2 bg-neutralWhite dark:bg-black w-screen h-screen">
      <Canvas gl={{ antialias: false }}>
        {/* background */}
        {/* set color for darkmode and lightmode */}
        <color args={["#D9D9D9"]} attach="background" />
        {/* post processing */}
        <EffectComposer>
          <DepthOfField
            focusDistance={0.025}
            focalLength={0.07}
            bokehScale={6}
            height={720}
          />
          <Noise opacity={0.1} />
          <Glitch
            delay={[0.5, 2]}
            duration={[0.01, 0.2]}
            // strength={[0.2, 0.4]}
            // mode={GlitchMode.SPORADIC}
          />

          <Vignette offset={0.1} darkness={0.6} />
        </EffectComposer>
        {/* performance data */}
        {/* <Perf position="bottom-left" /> */}
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
        {/* Poly */}
        <Poly />
      </Canvas>
    </div>
  );
}
