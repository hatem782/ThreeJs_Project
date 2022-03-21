const Cube = ({ pos = [0, 0, 0], scale = [1, 1, 1], color, onClick }) => {
  return (
    <mesh onClick={onClick} position={pos} scale={scale}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Cube;
