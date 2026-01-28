import { startRecognition, speak } from "../services/speech";

// Very simple PoC mapping (we will improve later)
function mapTextToSign(text) {
  const lower = text.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) return "hello";
  if (lower.includes("thank")) return "thankyou";
  if (lower.includes("yes")) return "yes";
  if (lower.includes("no")) return "no";

  return ""; // idle / no animation
}

export default function Controls({ setAnimation }) {
  const startInterview = () => {
    startRecognition((text) => {
      // Update transcript (existing behavior)
      window.__updateTranscript(text);

      // Speak text (existing behavior)
      speak(text);

      // NEW: trigger sign animation
      const sign = mapTextToSign(text);
      setAnimation(sign);
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
