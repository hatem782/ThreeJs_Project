import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Cube from "./shapes/Cube";
import CubePhy from "./shapes/CubePhy";
import Light from "./shapes/Light";
import City from "./shapes/City";
import Ground from "./shapes/Ground";
import { usePlane } from "@react-three/cannon";

import { Physics, useBox } from "@react-three/cannon";
import { PlaneBufferGeometry } from "three";
import { MeshLambertMaterial } from "three";
import MovingCube from "./shapes/MovingCube";

function App() {
  return (
    <Canvas camera={{ fov: 20, position: [-20, 20, 20] }}>
      <OrbitControls />
      <pointLight intensity={1} />
      <Light />
      <City />
      <Physics>
        <CubePhy pos={[3, 0, 3]} color="red" mass={1} friction={1} />
        <CubePhy pos={[0, 0, 0]} color="green" mass={1} friction={1} />
        <CubePhy pos={[0, 0, 3]} color="yellow" mass={1} friction={1} />
        <CubePhy pos={[3, 0, 0]} color="blue" mass={1} friction={1} />

        <MovingCube pos={[3, 0, 5]} color="blue" mass={1} />

        <Ground mass={0} pos={[0, -0.58, 0]} color="black" />
      </Physics>
    </Canvas>
  );
}

export default App;
