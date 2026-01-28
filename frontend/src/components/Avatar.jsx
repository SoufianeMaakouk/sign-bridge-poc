import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useRef } from "react";

function AvatarModel({ animationName }) {
  const { scene, animations } = useGLTF("/models/avatar.glb");
  const { actions } = useAnimations(animations, scene);
  const ref = useRef();

  // Play animation when animationName changes
  useFrame(() => {
    if (animationName && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.2).play();
    }
  });

  return <primitive ref={ref} object={scene} scale={1.6} position={[0, -1.6, 0]} />;
}

export default function Avatar({ animationName }) {
  return (
    <div style={{ height: "400px", background: "#111", borderRadius: "12px" }}>
      <Canvas camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <AvatarModel animationName={animationName} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
