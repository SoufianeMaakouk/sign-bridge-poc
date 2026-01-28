import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";

function AvatarModel({ animationName }) {
  const group = useRef();

  const avatar = useGLTF("/models/avatar.glb");
  const hello = useGLTF("/models/animations/hello.glb");
  const thankyou = useGLTF("/models/animations/thankyou.glb");

  // 🔑 Rename animation clips explicitly
  const animations = useMemo(() => {
    const h = hello.animations.map(a => a.clone());
    h.forEach(a => (a.name = "hello"));

    const t = thankyou.animations.map(a => a.clone());
    t.forEach(a => (a.name = "thankyou"));

    return [...h, ...t];
  }, [hello, thankyou]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!animationName) return;

    Object.values(actions).forEach(a => a.stop());

    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.2).play();
    }
  }, [animationName, actions]);

  return (
    <primitive
      ref={group}
      object={avatar.scene}
      scale={1.6}
      position={[0, -1.6, 0]}
    />
  );
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
