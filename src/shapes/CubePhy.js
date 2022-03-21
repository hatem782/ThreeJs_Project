import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

const CubePhy = ({
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
    material: { friction: friction, name: "slippery" },
  }));

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

export default CubePhy;
