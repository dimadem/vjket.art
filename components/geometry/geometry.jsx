import { BufferGeometry, Vector3, DoubleSide } from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function Poly() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 5;
  }, []);

  let geometry = useMemo(() => {
    const g = new BufferGeometry();
    const points = [
      new Vector3(-1, 1, -1), //c
      new Vector3(-1, -1, 1), //b
      new Vector3(1, 1, 1), //a

      new Vector3(1, 1, 1), //a
      new Vector3(1, -1, -1), //d
      new Vector3(-1, 1, -1), //c

      new Vector3(-1, -1, 1), //b
      new Vector3(1, -1, -1), //d
      new Vector3(1, 1, 1), //a

      new Vector3(-1, 1, -1), //c
      new Vector3(1, -1, -1), //d
      new Vector3(-1, -1, 1), //b
    ];
    g.setFromPoints(points);
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <mesh ref={mesh} scale={2} geometry={geometry}>
      <meshStandardMaterial color="darkGrey" side={DoubleSide} />
    </mesh>
  );
}
