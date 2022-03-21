import { usePlane } from "@react-three/cannon";

const Ground = ({
  pos = [0, 0, 0],
  scale = [100, 1, 100],
  color,
  onClick,
  mass = 0,
}) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: pos,
    mass: mass,
    material: { friction: 0, name: "slippery" },
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[scale[0], scale[2]]} />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Ground;
