import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const { scene } = useGLTF("/models/avatar.glb");
  return <primitive object={scene} scale={1.6} position={[0, -1.6, 0]} />;
}

export default function Avatar() {
  return (
    <div style={{ height: "400px", background: "#111", borderRadius: "12px" }}>
      <Canvas camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <AvatarModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
