import { useEffect, useState } from "react";
import "./BunnySprite.css";

// The transparent sprite atlas has 12 cells: 6 columns x 2 rows.
// Frame indexes are zero-based. This sequence starts with a crouch,
// hops through airborne poses, then lands and loops.
const JUMP_SEQUENCE = [6, 1, 2, 3, 4, 9, 10, 11, 0, 6];
const FRAME_INTERVAL_MS = 140;

export default function BunnySprite() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    );

    // Leave the bunny in its crouched first pose if reduced motion is preferred.
    if (motionPreference?.matches) return undefined;

    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % JUMP_SEQUENCE.length);
    }, FRAME_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  const frameIndex = JUMP_SEQUENCE[step];
  const column = frameIndex % 6;
  const row = Math.floor(frameIndex / 6);

  return (
    <div
      className="bunny-sprite-frame"
      role="img"
      aria-label="A cute bunny hopping, floating, and landing"
      style={{
        "--frame-x": `${column * 20}%`,
        "--frame-y": row === 0 ? "0%" : "100%",
      }}
    />
  );
}
