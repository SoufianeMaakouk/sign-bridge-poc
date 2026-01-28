import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

function AvatarModel({ animationName }) {
  const group = useRef();

  const avatar = useGLTF("/models/avatar.glb");
  const hello = useGLTF("/models/animations/hello.glb");
  const thank = useGLTF("/models/animations/thankyou.glb");

  // Collect animations safely
  const animations = {
    hello: hello.animations?.[0],
    thankyou: thank.animations?.[0],
  };

  const { actions } = useAnimations(
    Object.values(animations).filter(Boolean),
    group
  );

  useEffect(() => {
    if (!animationName || !actions) return;

    // Stop all animations
    Object.values(actions).forEach((a) => a.stop());

    // Play requested animation
    const clip =
      animationName === "hello"
        ? animations.hello
        : animationName === "thankyou"
        ? animations.thankyou
        : null;

    if (clip) {
      const action = actions[clip.name];
      action.reset().fadeIn(0.3).play();
    }
  }, [animationName, actions]);

  return (
    <primitive
      ref={group}
      object={avatar.scene}
      scale={1.2}
      position={[0, -1.5, 0]}
    />
  );
}

export default function Avatar({ animationName }) {
  return (
    <Canvas camera={{ position: [0, 1.6, 3] }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} />
      <AvatarModel animationName={animationName} />
      <OrbitControls />
    </Canvas>
  );
}
