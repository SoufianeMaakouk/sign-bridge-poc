import { useState } from "react";
import VideoPanel from "./components/VideoPanel";
import Transcript from "./components/Transcript";
import Controls from "./components/Controls";
import Avatar from "./components/Avatar";

export default function App() {
  const [sign, setSign] = useState(null);

  // Make it globally accessible for speech recognition
  window.__playSign = (text) => {
    const t = text.toLowerCase();

    if (t.includes("hello")) setSign("hello");
    else if (t.includes("thank you") || t.includes("thanks"))
      setSign("thankyou");
  };

  return (
    <div className="app">
      <h1>🏟️ Inclusive Sports Interview – SignBridge PoC</h1>

      <div className="video-row">
        <VideoPanel label="Deaf Journalist (Signing)" muted />
        <VideoPanel label="Athlete (Speaking)" />
      </div>

      <Transcript />

      <h2>AI Sign Language Avatar</h2>
      <Avatar animationName={sign} />

      <Controls />
    </div>
  );
}
