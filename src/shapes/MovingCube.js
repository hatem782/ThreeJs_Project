import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

//const keys=[40,39,38,37];
let test = 0;
const MovingCube = ({
  pos = [0, 0, 0],
  scale = [1, 1, 1],
  color,
  onClick,
  mass = 1,
  friction = 0,
}) => {
  const [ref, api] = useBox(() => ({
    mass: mass,
    position: pos,
    material: { friction: 0, name: "slippery" },
    rotation: [0, 0, 0],
  }));

  const [forward, setforward] = useState(0);
  const [rot, setRot] = useState(0);

  useEffect(() => {
    const handleKeydown = ({ key }) => {
      if (key == "ArrowUp") {
        setforward(1);
      }
      if (key == "ArrowDown") {
        setforward(-1);
      }
      if (key == "ArrowLeft") {
        setRot(-1);
      }
      if (key == "ArrowRight") {
        setRot(1);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    const handleKeyup = ({ key }) => {
      if (key == "ArrowUp") {
        setforward(0);
      }
      if (key == "ArrowDown") {
        setforward(0);
      }
      if (key == "ArrowLeft") {
        setRot(0);
      }
      if (key == "ArrowRight") {
        setRot(0);
      }
    };
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  useEffect(() => {
    console.log(forward);
  }, [forward]);

  useFrame(() => {
    test = test + rot * 0.1;
    api.velocity.set(
      Math.cos(test) * (forward * 6),
      0,
      Math.sin(test) * (forward * 6)
    );
    api.rotation.set(0, -test, 0);
  });

  return (
    <mesh
      castShadow
      onClick={() => {
        api.velocity.set(0, 0, 2);
      }}
      ref={ref}
      scale={scale}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
};

export default MovingCube;
