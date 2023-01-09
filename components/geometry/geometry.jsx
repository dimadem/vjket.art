import { useRef, useMemo, useContext, useState, useEffect } from "react";
import { MenuContext } from "../../context/menu.context";
import { useTheme } from "next-themes";
import { BufferGeometry, Vector3, DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Text3D } from "@react-three/drei";

export default function Poly() {
  const { theme } = useTheme();

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
  // const [hoveredYear, hoverYear] = useState(true);

  // Colors
  // const black = "#171717";
  // const white = "#f1f1f1";
  // const neutralBlack = "#4B4B4B";
  // const neutralWhite = "#D9D9D9";

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
    // each year has a position
    const pointsForYears = [
      [1, 1, 1], //a
      [-1, -1, 1], //b
      [-1, 1, -1], //c
      [1, -1, -1], //d
    ];
    // put the position in the year object
    years.forEach((year, index) => {
      year.position = pointsForYears[index];
    });
  }, [years]);

  return (
    <>
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
              position={position} // pos of each text
              font="../Red_Hat_Mono-Light_Regular.json"
              size={0.15}
              height={0.02}
              renderOrder="1"
              onClick={() => (window.location.href = `/year/${slug}`)} // use next/link
            >
              {/* <link href={`/year/${slug}`}>{title}</link> */}
              {title}
              <meshBasicMaterial color={colorYear} />
            </Text3D>
          ))}
      </group>
    </>
  );
}
