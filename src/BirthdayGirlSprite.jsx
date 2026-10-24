import { useEffect, useState } from "react";
import "./BirthdayGirlSprite.css";

const ANIMATION = [
  { frame: 7, duration: 650 }, // Cute resting pose
  { frame: 0, duration: 520 }, // Looks at the cake
  { frame: 1, duration: 300 }, // Gets ready to blow
  { frame: 2, duration: 520 }, // Blows toward the candles
  { frame: 3, duration: 260 }, // Reacts to the candles
  { frame: 4, duration: 360 }, // Happy reaction
  { frame: 5, duration: 360 }, // Raises her hand
  { frame: 6, duration: 520 }, // Big celebration
  { frame: 7, duration: 600 }, // Returns to resting pose
];

export default function BirthdayGirlSprite() {
  const [step, setStep] = useState(0);

  const { frame, duration } = ANIMATION[step];
  const column = frame % 4;
  const row = Math.floor(frame / 4);

  useEffect(() => {
    if (
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setStep((current) => (current + 1) % ANIMATION.length);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [step, duration]);

  return (
    <div
      className="birthday-girl-sprite"
      role="img"
      aria-label="Birthday girl looking at the cake, blowing out candles, and celebrating"
      style={{
        "--sprite-x": `${(column / 3) * 100}%`,
        "--sprite-y": row === 0 ? "0%" : "100%",
      }}
    />
  );
}