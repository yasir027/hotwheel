import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import React, { useRef } from "react";

export function TextElement() {
  const { viewport } = useThree();
  const refStart = useRef();
  const refGTA = useRef();
  const refDeadpool = useRef();

  return (
    <>
      {/* Regular-sized text with rectangle */}
      <mesh position={[-2, 1.5, 2]}>
        <boxGeometry args={[viewport.width / 6 + 0.02, 0.5, 0.06]} /> {/* Rectangle dimensions */}
        <meshBasicMaterial color="black" transparent opacity={0.5} /> {/* Rectangle color and opacity */}
        <Text
          ref={refStart}
          position={[0, 0, 0.03]} // Position for regular-sized text inside the rectangle
          color="blue"
          fontSize={0.3} // Font size for regular-sized text
          maxWidth={viewport.width / 2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          rectangleDepth={0.06} // Depth for this rectangle

        >
          Welcome to CIS :)
        </Text>
      </mesh>

      {/* Smaller text with rectangle */}
      <mesh position={[-1, 0.3, -0.7]} scale={[-1, 1, 1]}>
        <boxGeometry args={[viewport.width / 24, 0.1, 0.08]} />
        <meshBasicMaterial color="black" transparent opacity={0.7} />
        <Text
          ref={refStart}
          position={[0, 0, 0.04]}
          color="green"
          fontSize={0.12}
          maxWidth={viewport.width / 2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          scale={[-1, 1, 1]} // Flip text horizontally
          rectangleDepth={0.08} // Depth for this rectangle

        >
          START
        </Text>
      </mesh>

      {/* Smaller text with rectangle */}
      <mesh position={[-2, 0.3, -0.01]} rotation={[0, Math.PI / 2, 0]} scale={[-1, 1, 1]}>
        <boxGeometry args={[viewport.width / 22, 0.1, 0.05]} />
        <meshBasicMaterial color="black" transparent opacity={0.5} />
        <Text
          ref={refGTA}
          position={[0, 0, 0.025]}
          color="red"
          fontSize={0.0}
          maxWidth={viewport.width / 2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          scale={[-1, 1, 1]} // Flip text horizontally
          rectangleDepth={0.05} // Depth for this rectangle

        >
          GTA VI
        </Text>
      </mesh>

      {/* Smaller text with rectangle */}
      <mesh position={[-4, 0.3, 1.5]} rotation={[0, Math.PI / 2, 0]}> {/* Rotate the mesh horizontally by 90 degrees */}
        <boxGeometry args={[viewport.width / 22, 0.1, -0.06]} /> {/* Decrease the width */}
        <meshBasicMaterial color="black" transparent opacity={0.5} /> {/* Rectangle color and opacity */}
        <Text
          ref={refDeadpool}
          position={[0, 0, -0.03]} // Position for smaller text inside the rectangle
          color="white"
          fontSize={0.08} // Font size for smaller text
          maxWidth={viewport.width / 2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          scale={[-1, 1, 1]} // Flip text horizontally
          rectangleDepth={-0.06} // Depth for this rectangle

        >
          DEADPOOL
        </Text>
      </mesh>
    </>
  );
  }
