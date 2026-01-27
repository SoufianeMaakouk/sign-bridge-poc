import VideoPanel from "./components/VideoPanel";
import Transcript from "./components/Transcript";
import Controls from "./components/Controls";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <div className="app">
      <h1>🏟️ Inclusive Sports Interview – SignBridge PoC</h1>

      <div className="video-row">
        <VideoPanel label="Deaf Journalist (Signing)" muted />
        <VideoPanel label="Athlete (Speaking)" />
      </div>

      <Transcript />

      <h2>AI Sign Language Avatar</h2>
      <Avatar />

      <Controls />
    </div>
  );
}
