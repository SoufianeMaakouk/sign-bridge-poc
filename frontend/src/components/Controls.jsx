import { startRecognition, speak } from "../services/speech";

export default function Controls() {
  const startInterview = () => {
    startRecognition((text) => {
      window.__updateTranscript(text);
      speak(text);
    });
  };

  return (
    <div className="controls">
      <button onClick={startInterview}>
        🎤 Start Interview Translation
      </button>
    </div>
  );
}
