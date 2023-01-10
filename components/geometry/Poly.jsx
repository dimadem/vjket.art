import { useRef, useMemo, useContext, useState, useEffect } from "react";
import { MenuContext } from "../../context/menu.context";
import { useTheme } from "next-themes";
import { BufferGeometry, Vector3, DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Text3D } from "@react-three/drei";
import { useRouter } from "next/router";

export default function Poly() {
  const { theme } = useTheme();
  // create router for navigation
  const router = useRouter();

  // set color for darkmode and lightmode
  const [colorPoly, setColorPoly] = useState("#4B4B4B");
  const [colorYear, setColorYear] = useState("#171717");

  useMemo(() => {
    if (theme == "light") setColorPoly("#4B4B4B");
    if (theme == "dark") setColorPoly("#D9D9D9");
    if (theme == "light") setColorYear("#171717");
    if (theme == "dark") setColorYear("#f1f1f1");
  }, [theme]);

  // get data from context
  const { menu, setMenu } = useContext(MenuContext);
  const { disciplines, years } = menu;

  // Refs
  const mesh = useRef();

  // States
  const [hoveredPoly, hoverPoly] = useState(true);
  const [hoveredYear, hoverYear] = useState(true);

  // Animate rotation
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 10;
  }, []);

  // construct Poly
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

  useEffect(() => {
    // position for each year
    const pointsForYears = [
      [1, 1, 1], //a
      [-1, -1, 1], //b
      [-1, 1, -1], //c
      [1, -1, -1], //d
    ];
    // put array with points to year array
    years.forEach((year, index) => {
      year.position = pointsForYears[index];
    });
  }, [years]);

  return (
    <group ref={mesh} scale={1.5}>
      {/* Poly */}
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
          color={colorPoly}
          side={DoubleSide}
          wireframe={hoveredPoly ? true : false}
        />
      </mesh>
      {/* Years */}
      {years &&
        years.map(({ slug, title, _id, position }) => (
          <Text3D
            key={_id}
            position={position} // pos of each year
            font="../Red_Hat_Mono-Light_Regular.json"
            size={0.2}
            height={0.07}
            onClick={() => router.push(`/year/${slug}`)}
            onPointerOver={() => hoverYear(false)}
            onPointerOut={() => hoverYear(true)}
          >
            {title}
            <meshBasicMaterial
              color={colorYear}
              wireframe={hoveredYear ? true : false}
            />
          </Text3D>
        ))}
    </group>
  );
}
