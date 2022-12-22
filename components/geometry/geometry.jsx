import { BufferGeometry, Vector3, DoubleSide, CameraHelper } from "three";
import Link from "next/link";
import { useRef, useMemo, useContext, useState } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { MeshDistortMaterial, Text3D, useHelper } from "@react-three/drei";
import { MenuContext } from "../../context/menu.context";
// extend({ Link });

export default function Poly() {
  const { menu, setMenu } = useContext(MenuContext);
  const { disciplines, years } = menu;
  const mesh = useRef();
  const [hoveredPoly, hoverPoly] = useState(true);
  const [hoveredYear, hoverYear] = useState(true);
  const [useColor, setColor] = useState("#4B4B4B"); // color of text for dark and white mode

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 10;
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
    // console.log("points", points);

    return g;
  }, []);

  const pointsForYears = [
    [1, 1, 1], //a
    [-1, -1, 1], //b
    [-1, 1, -1], //c
    [1, -1, -1], //d
  ];

  years.forEach((year, index) => {
    // console.log("year", year);
    // console.log("index", index);
    // console.log("pointsForYears[index]", pointsForYears[index]);
    year.position = pointsForYears[index];
  });

  // console.log("YEARS ADD", years);

  return (
    <>
      <group ref={mesh} scale={1.5}>
        <mesh
          geometry={geometry}
          position={[0, 0, 0]}
          onPointerOver={() => hoverPoly(false)}
          onPointerOut={() => hoverPoly(true)}
          renderOrder="0"
        >
          <MeshDistortMaterial
            distort={0.2}
            // speed={1}
            roughness={0}
            color="#4B4B4B"
            side={DoubleSide}
            wireframe={hoveredPoly ? true : false}
          />
        </mesh>

        {years &&
          years.map(({ slug, title, _id, position }) => (
            <Text3D
              key={_id}
              position={position} // pos of each text
              font="../Red_Hat_Mono-Light_Regular.json"
              size={0.15}
              height={0.02}
              renderOrder="1"
              onClick={() => (window.location.href = `/year/${slug}`)} // use next/link
            >
              {/* <link href={`/year/${slug}`}>{title}</link> */}
              {title}
              <meshBasicMaterial color="black" />
            </Text3D>
          ))}
      </group>
    </>
  );
}
