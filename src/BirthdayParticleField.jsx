import "./BirthdayParticleField.css";

const PARTICLE_COUNT = 24;
const COLUMNS = 6;
const ROWS = 4;

// Stable 6 x 4 placement grid, with small offsets so it feels organic without stacking.
const motionPresets = ["float", "spin", "drift", "bob", "sway", "pulse"];
const X_POSITIONS = [2, 18, 35, 52, 69, 85];
const Y_POSITIONS = [3, 27, 51, 75];
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
  const column = index % COLUMNS;
  const row = Math.floor(index / COLUMNS);
  const jitterX = ((column * 3 + row * 2) % 4) * 1.5;
  const jitterY = ((column + row * 3) % 5) * 1.4;

  return {
    index,
    column,
    row,
    left: `${X_POSITIONS[column] + jitterX}%`,
    top: `${Y_POSITIONS[row] + jitterY}%`,
size: 65 + ((index * 17) % 55),
    delay: `${-((index * 7) % 23) / 3}s`,
    duration: `${5 + ((index * 11) % 8)}s`,
    motion: motionPresets[index % motionPresets.length],
  };
});

export default function BirthdayParticleField() {
  return (
    <div className="birthday-particle-field" aria-hidden="true">
      {PARTICLES.map((particle) => (
        <span
          key={particle.index}
          className={`birthday-particle particle-motion-${particle.motion}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            "--particle-x": `${(particle.column / (COLUMNS - 1)) * 100}%`,
            "--particle-y": `${(particle.row / (ROWS - 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
