import { useEffect, useRef } from "react";

export default function VideoPanel({ label, muted }) {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <div className="video-box">
      <span>{label}</span>
      <video ref={videoRef} autoPlay playsInline muted={muted} />
    </div>
  );
}
