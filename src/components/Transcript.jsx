import { useState } from "react";

export default function Transcript() {
  const [text, setText] = useState("Waiting for athlete speech…");

  window.__updateTranscript = setText;

  return (
    <div className="transcript">
      <strong>Live Transcript</strong>
      <p>{text}</p>
    </div>
  );
}
