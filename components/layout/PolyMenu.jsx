import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Poly from "../geometry/geometry";

export default function PolyMenu() {
  return (
    <div className="flex order-2 bg-neutralWhite dark:bg-black w-screen h-screen">
      {/* <video
        className="w-screen h-screen object-cover"
        muted
        loop
        autoPlay
        src="./media/polymenu/polymenu2.mp4"
        type="video/mp4"
      /> */}

      <Canvas className="w-screen h-screen">
        {/* performance data */}
        {/* <Perf position="bottom-left" /> */}
        {/* Camera */}
        <OrbitControls makeDefault />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />

        {/* Poly */}
        <Poly />
      </Canvas>
    </div>
  );
}
