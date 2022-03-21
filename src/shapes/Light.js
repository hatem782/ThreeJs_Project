import React from "react";

function Light() {
  return (
    <>
      <spotLight angle={0.2} position={[20, 15, 20]} />
      <spotLight angle={0.2} position={[-20, 15, 20]} />
      <spotLight angle={0.2} position={[-20, 15, -20]} />
      <spotLight angle={0.2} position={[20, 15, -20]} />
    </>
  );
}

export default Light;
