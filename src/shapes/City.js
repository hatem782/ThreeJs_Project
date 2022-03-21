import React from "react";
import Cube from "./Cube";

function City() {
  return (
    <>
      <Root />

      <Cube pos={[-1.75, 0.9, -4.25]} scale={[1.5, 3, 1.5]} color="blue" />
      <Cube pos={[-4.25, 0.9, -4.25]} scale={[1.5, 3, 1.5]} color="#724CF9" />
      <Cube pos={[-1.75, 0.4, -1.75]} scale={[1.5, 2, 1.5]} color="#564592" />
      <Cube pos={[-4.25, 0.9, -1.75]} scale={[1.5, 3, 1.5]} color="#D1143D" />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Cube pos={[0, -0.6, 0]} scale={[2, 0.1, 10.1]} color="white" />
      <Cube pos={[0, -0.6, 0]} scale={[10.1, 0.1, 2]} color="white" />

      <Cube pos={[0, -0.56, -4]} scale={[0.2, 0.05, 1]} color="#282d35" />
      <Cube pos={[0, -0.56, -2]} scale={[0.2, 0.05, 1]} color="#282d35" />
      <Cube pos={[0, -0.56, 0]} scale={[0.2, 0.05, 1]} color="#282d35" />
      <Cube pos={[0, -0.56, 2]} scale={[0.2, 0.05, 1]} color="#282d35" />
      <Cube pos={[0, -0.56, 4]} scale={[0.2, 0.05, 1]} color="#282d35" />

      <Cube pos={[-4, -0.56, 0]} scale={[1, 0.05, 0.2]} color="#282d35" />
      <Cube pos={[-2, -0.56, 0]} scale={[1, 0.05, 0.2]} color="#282d35" />
      <Cube pos={[0, -0.56, 0]} scale={[1, 0.05, 0.2]} color="#282d35" />
      <Cube pos={[2, -0.56, 0]} scale={[1, 0.05, 0.2]} color="#282d35" />
      <Cube pos={[4, -0.56, 0]} scale={[1, 0.05, 0.2]} color="#282d35" />
    </>
  );
};

export default City;
