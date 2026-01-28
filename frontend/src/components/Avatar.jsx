import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const avatar = useGLTF("/models/avatar.glb");

  return (
    <primitive
      object={avatar.scene}
      scale={1.5}
      position={[0, -1.5, 0]}
    />
  );
}

export default function Avatar() {
  return (
    <div style={{ height: "400px", background: "#222", borderRadius: "12px" }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <OrbitControls />
        <AvatarModel />
      </Canvas>
    </div>
  );
}
