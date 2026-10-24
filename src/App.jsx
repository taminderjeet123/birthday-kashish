import { useEffect, useState,useRef } from "react";
import BunnySprite from "./BunnySprite";
import BirthdayGirlSprite from "./BirthdayGirlSprite";
import "./App.css";
import BirthdayParticleField from "./BirthdayParticleField";



const INTERACTIVE_WORDS = new Set([
  "golden",
  "happiness",
  "people",
  "beauty",
  "beautiful",
  "love",
  "smile",
  "birthday",
  "gollu",
  "darling",
  "sweetu",
  "kashish",
  "memories",
  "forever",
  "special",
  "cute",
  "heart",
  "happy",
  "surprise",
  "joy",
  "shine",
  "precious",
]);

function InteractiveText({ text }) {
  const parts = text.split(/(\s+)/);

  return (
    <>
      {parts.map((part, index) => {
        const word = part
          .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "")
          .toLowerCase();

        if (!INTERACTIVE_WORDS.has(word)) {
          return part;
        }

        return (
          <span
            key={`${index}-${word}`}
            className="interactive-word"
          >
            {part}
            <span className="word-sparkle" aria-hidden="true">
              ✦
            </span>
          </span>
        );
      })}
    </>
  );
}

const photos = [
  {
    src: "/photos/photo-1.jpeg",
    label: "The smile situation",
    caption: "An unfair amount of cuteness in one frame.",
    tag: "FAVOURITE FRAME",
  },
  
  {
    src: "/photos/photo-9.jpeg",
    label: "Certified Gollu moment",
    caption: "Literally the best glimpse of the you being gollu",
    tag: "CORE MEMORY",
  },
  
  {
    src: "/photos/photo-6.jpeg",
    label: "The camera roll classic",
    caption: "Yes, this one deserved its own spot.",
    tag: "NO SKIP",
  },
  {
    src: "/photos/photo-13.jpeg",
    label: "My favourite human",
    caption: "Some pictures just feel like happiness.",
    tag: "THE ONE",
  },
  {
    src: "/photos/photo-5.jpeg",
    label: "Main character energy",
    caption: "No explanation needed. Just look at you.",
    tag: "ICON BEHAVIOUR",
  },
  {
    src: "/photos/photo-8.jpeg",
    label: "Pretty privilege",
    caption: "Respectfully, the camera understood the assignment.",
    tag: "SERVING LOOKS",
  },
  {
    src: "/photos/photo-3.jpeg",
    label: "Little things, big feelings",
    caption: "A tiny snapshot of my chintu having fun with her frnds.",
    tag: "KEEP FOREVER",
  },
  {
    src: "/photos/photo-11.jpeg",
    label: "Just us being us",
    caption: "My kind of chaos. My kind of person.",
    tag: "US THINGS",
  },
  {
    src: "/photos/photo-12.jpeg",
    label: "One for the archives",
    caption: "Adding this to the collection of reasons I adore you.",
    tag: "GOLLUVISION",
  },
  {
    src: "/photos/photo-7.jpeg",
    label: "Khatarnaak Smile",
    caption: "The image that haunts me beautifully",
    tag: "GOLLUVISION",
  },
  {
    src: "/photos/photo-10.jpeg",
    label: "Savage",
    caption: "She is a 10 but she acts like she pays bills",
    tag: "GOLLUVISION",
  },
  {
    src: "/photos/photo-14.jpeg",
    label: "First Photo that you liked clicked by me.",
    caption: "",
    tag: "GOLLUVISION",
  }
];

const awards = [
  {
    emoji: "💗",
    title: "CEO OF BEING CUTE",
    colour: "pink",
    reason:
      "No one on this earth can compete with you in terms of cuteness. Even after a volcano-eruption-level anger moment, you can still give that cute smile that could melt anyone on this planet.",
  },
  {
    emoji: "👑",
    title: "MAIN CHARACTER",
    colour: "yellow",
    reason:
      "Here you got the Main Character award! I still remember when you said that you, Kashish, are the main character. Whenever something putha-sidha happens in your life, you come to me to get that main-character energy back. Such a cutieeeee!",
  },
  {
    emoji: "😈",
    title: "MASTIKHOOOOOR",
    colour: "orange",
    reason:
      "When it comes to doing mastiyaan, you are number one! Sometimes I wonder what will happen to this girl if she sits quietly without doing masti for even a second. You look so cute while doing mastiiissss!",
  },
  {
    emoji: "💞",
    title: "MY FAVOURITE PERSON",
    colour: "blue",
    reason:
      "Yes, you are my personal favourite person. Sometimes you motivate me, and you are the person who gives fuel to my feelings. Thank you, babes! ❤️",
  },
];

// EDIT THIS MESSAGE to make it sound exactly like you.
const birthdayLetter = `Happy birthday Kashish, Darling! 💛

I wish you very very very happy return of the day. After every year from your bday to bday you are becoming more cute, more smart, more beatifull,more mastikhoor and if this pace continous, i think one day you will become eternal.

You make chote chote moments feel very special, and some of my favourite memories are simply the little things we share. Your sharm waali smile, your silly moments, your ragebaiting me and all the things that make you YOU mean so much to me.

I hope you always remember how special you are. Never stop being your tabahi, wonderfully chaotic, lovable self.

From your childhood to this day, you have came across many ups and downs, and you always came out stronger, braver and more beautiful than before.

Despite of you are smart, beautifull, playfull, but still i see you as a 10 year old kid who holds my hand tightly like a small child.

I sometimes loves to tease you, and the moment you get angry and naraj from me, and after tons of apologies you came to me like a cute bacha, melts me hard.

The potential you have is next level, the way you complete your work in one go and teasing me, i still feel amazed how you did the angela yuu course , you were always ahead of me , no matter how much effort i put.

There is no doubt that you will achieve heights in your life, all your dreams of having great experience, travellings and everything will be fulfilled one day, and i hope i will be there to see you achieving those too.

I wish you with lots of happiness, love, and blessings babes. 

Happy birthday, Kashish. Keep smiling, keep shining and keep being my Gollu Darling. 💗`;

// EDIT THIS TOO: it's the last message she unlocks.
const finalMessage = `And if I had to choose my favourite person all over again, I'd still choose you.

Happy birthday, Gollu Darling. 💌

You deserve a year as beautiful as your smile.`;

function PhotoCard({ photo, index, failed, onError, onOpen }) {
  return (
    <button
      className={`memory-card memory-card-${index + 1}`}
      onClick={onOpen}
      aria-label={`Open photo: ${photo.label}`}
    >
      <div className="memory-photo">
        {failed ? (
          <div className="photo-placeholder">
            <span>✳</span>
            <strong>YOUR PHOTO HERE</strong>
            <small>{photo.tag}</small>
          </div>
        ) : (
          <img
            src={photo.src}
            alt={photo.label}
            loading="lazy"
            onError={onError}
          />
        )}

        <span className="photo-sticker">{photo.tag}</span>
      </div>

      <div className="memory-caption">
        <h3>
  <InteractiveText text={photo.label} />
</h3>

<p>
  <InteractiveText text={photo.caption} />
</p>
      </div>
    </button>
  );
}

function AwardMascot({ index }) {
  const spriteClasses = [
    "award-sprite-cute",
    "award-sprite-main",
    "award-sprite-masti",
    "award-sprite-favorite",
  ];

  const labels = [
    "Cute girl showing adorable expressions",
    "Crowned girl with main-character energy",
    "Bunny hopping and celebrating",
    "Girl cuddling a bunny",
  ];

  return (
    <div
      className={`award-mascot-stage award-sprite ${
        spriteClasses[index] || spriteClasses[0]
      }`}
      role="img"
      aria-label={labels[index] || "Birthday award character"}
    />
  );
}

function AwardCard({ award, index, flipped, onClick }) {
  return (
    <button
      className={`award-card award-${award.colour} award-card-${index + 1} ${
        flipped ? "is-flipped" : ""
      }`}
      onClick={onClick}
      aria-label={`${award.title}: click to ${
        flipped ? "hide" : "reveal"
      } the message`}
      aria-pressed={flipped}
    >
      <span className="award-card-inner">
        <span className="award-front">
          <AwardMascot index={index} />

          <strong className="award-title">
            {award.title}
          </strong>

          <span className="flip-hint">
            TAP TO REVEAL <span>↗</span>
          </span>
        </span>

        <span className="award-back">
          

          <span className="award-back-emoji">
            {award.emoji}
          </span>

          <span className="award-reason">
            {award.reason}
          </span>

          <span className="award-back-heart">♡</span>
        </span>
      </span>
    </button>
  );
}

function BirthdayGirlSticker() {
  return (
    <svg
      className="sticker-illustration"
      viewBox="0 0 240 220"
      role="img"
      aria-label="A cute girl blowing out birthday candles"
    >
      {/* Hair behind the girl */}
      <path
        d="M48 109 C20 83 34 34 76 24
           C110 10 147 37 145 80
           L137 130 L65 151 Z"
        fill="#513027"
        stroke="#171717"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Pink outfit */}
      <path
        d="M60 133 Q85 117 110 135
           L132 195 L43 195 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Neck */}
      <path
        d="M80 112 L78 137 Q93 148 108 132 L104 108"
        fill="#F6B99C"
        stroke="#171717"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Face */}
      <ellipse
        cx="88"
        cy="78"
        rx="39"
        ry="43"
        fill="#FFD0AE"
        stroke="#171717"
        strokeWidth="5"
      />

      {/* Hair fringe */}
      <path
        d="M49 73 C39 37 65 23 91 27
           C113 24 134 45 128 62
           L114 64 L104 48
           Q95 65 76 63 L67 80 Z"
        fill="#513027"
        stroke="#171717"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Side hair */}
      <path
        d="M50 67 Q40 99 56 116"
        fill="none"
        stroke="#513027"
        strokeWidth="13"
        strokeLinecap="round"
      />

      {/* Closed, happy eyes */}
      <path
        d="M68 82 Q75 91 82 82
           M94 81 Q101 90 108 80"
        fill="none"
        stroke="#171717"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Blushing cheeks */}
      <ellipse cx="66" cy="92" rx="9" ry="5" fill="#FF8DAA" />
      <ellipse cx="105" cy="91" rx="9" ry="5" fill="#FF8DAA" />

      {/* Pursed lips */}
      <path
        d="M116 87 Q124 81 130 88
           Q126 97 118 94 Z"
        fill="#FF5A78"
        stroke="#171717"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Breath lines toward the cake */}
      <path
        d="M133 84 Q143 79 149 84
           M136 96 Q145 94 151 98"
        fill="none"
        stroke="#48C7E8"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Arm */}
      <path
        d="M91 148 Q111 144 122 160"
        fill="none"
        stroke="#FFD0AE"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M91 148 Q111 144 122 160"
        fill="none"
        stroke="#171717"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Birthday cake plate */}
      <ellipse
        cx="171"
        cy="187"
        rx="51"
        ry="10"
        fill="#48C7E8"
        stroke="#171717"
        strokeWidth="4"
      />

      {/* Cake */}
      <path
        d="M132 151 L207 151 L201 184
           L139 184 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Icing */}
      <path
        d="M128 151
           Q137 140 146 151
           Q156 139 166 151
           Q177 139 187 151
           Q198 140 211 151
           L208 160
           Q201 168 194 159
           Q186 171 178 160
           Q168 171 160 160
           Q151 169 143 160
           L134 163 Z"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Candles */}
      <path d="M150 145 V130 M170 145 V126 M190 145 V132"
        fill="none"
        stroke="#171717"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M150 128 Q140 119 150 109
           Q160 121 150 128 Z
           M170 124 Q160 115 170 105
           Q180 117 170 124 Z
           M190 130 Q180 121 190 111
           Q200 123 190 130 Z"
        fill="#FFF36D"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      {/* Hair bow */}
      <path
        d="M49 46 Q32 30 37 51
           L49 59 L62 46
           Q70 29 53 36 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="51" cy="46" r="5" fill="#FFF36D" />
    </svg>
  );
}

function BirthdayCakeSticker() {
  return (
    <svg
      className="sticker-illustration"
      viewBox="0 0 180 155"
      role="img"
      aria-label="A pink birthday cake with candles"
    >
      <ellipse
        cx="90"
        cy="134"
        rx="74"
        ry="12"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="4"
      />

      <path
        d="M32 80 H148 V127 H32 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      <path
        d="M27 80
           Q39 62 51 80
           Q63 62 76 80
           Q88 62 100 80
           Q112 62 124 80
           Q137 62 153 80
           L148 96
           Q137 105 130 94
           Q119 108 108 95
           Q97 107 86 95
           Q75 108 64 95
           Q53 106 42 95
           L32 97 Z"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <path
        d="M48 104 H132"
        stroke="#FF5A1F"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M53 75 V48 M90 73 V40 M127 75 V48"
        stroke="#171717"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        className="candle-flame"
        d="M53 48 Q39 37 53 23 Q67 37 53 48 Z
           M90 40 Q76 29 90 15 Q104 29 90 40 Z
           M127 48 Q113 37 127 23 Q141 37 127 48 Z"
        fill="#FFF36D"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      <circle cx="54" cy="91" r="4" fill="#48C7E8" />
      <circle cx="91" cy="91" r="4" fill="#FFF36D" />
      <circle cx="126" cy="91" r="4" fill="#48C7E8" />

      <path
        d="M63 59 Q71 67 79 59 M101 59 Q109 67 117 59"
        stroke="#FF5A1F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BunnySticker() {
  return (
    <svg
      className="sticker-illustration bunny-illustration"
      viewBox="0 0 180 210"
      role="img"
      aria-label="A cute bunny celebrating"
    >
      {/* Ears */}
      <ellipse
        className="bunny-ear bunny-ear-left"
        cx="61"
        cy="44"
        rx="20"
        ry="42"
        transform="rotate(-15 61 44)"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
      />

      <ellipse
        className="bunny-ear bunny-ear-right"
        cx="119"
        cy="42"
        rx="20"
        ry="42"
        transform="rotate(15 119 42)"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
      />

      <ellipse
        cx="61"
        cy="45"
        rx="9"
        ry="28"
        transform="rotate(-15 61 45)"
        fill="#FF9ABC"
      />

      <ellipse
        cx="119"
        cy="43"
        rx="9"
        ry="28"
        transform="rotate(15 119 43)"
        fill="#FF9ABC"
      />

      {/* Body and face */}
      <ellipse
        cx="90"
        cy="147"
        rx="48"
        ry="49"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
      />

      <circle
        cx="90"
        cy="88"
        r="45"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
      />

      {/* Cheeks */}
      <ellipse cx="61" cy="98" rx="10" ry="7" fill="#FF9ABC" />
      <ellipse cx="119" cy="98" rx="10" ry="7" fill="#FF9ABC" />

      {/* Happy face */}
      <circle cx="74" cy="83" r="4.5" fill="#171717" />
      <path
        d="M104 82 Q111 88 118 80"
        fill="none"
        stroke="#171717"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M86 93 Q90 89 94 93 L90 97 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="2"
      />

      <path
        d="M90 97 Q81 110 75 101
           M90 97 Q99 110 105 101"
        fill="none"
        stroke="#171717"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Little arms */}
      <path
        className="bunny-arm"
        d="M48 130 Q25 117 24 137 Q25 149 43 145"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        className="bunny-arm"
        d="M132 130 Q155 117 156 137 Q155 149 137 145"
        fill="#FBF5E8"
        stroke="#171717"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Feet */}
      <ellipse
        cx="62"
        cy="186"
        rx="23"
        ry="12"
        fill="#FF9ABC"
        stroke="#171717"
        strokeWidth="4"
      />

      <ellipse
        cx="118"
        cy="186"
        rx="23"
        ry="12"
        fill="#FF9ABC"
        stroke="#171717"
        strokeWidth="4"
      />

      {/* Bow */}
      <path
        d="M105 48 Q89 33 96 51 L108 59
           L121 48 Q132 33 118 39 Z"
        fill="#FF69A6"
        stroke="#171717"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <circle cx="108" cy="49" r="5" fill="#FFF36D" />
    </svg>
  );
}

const SCENE_MUSIC = [
  "/music/scene-1.mp3",
  "/music/scene-2.mp3",
  "/music/scene-3.mp3",
  "/music/scene-4.mp3",
  "/music/scene-4.mp3",
];
export default function App() {
  const [scene, setScene] = useState(0);
  const [flippedAwards, setFlippedAwards] = useState([]);
  const [failedPhotos, setFailedPhotos] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [letterOpening, setLetterOpening] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [musicNeedsGesture, setMusicNeedsGesture] = useState(false);
const [musicPausedByUser, setMusicPausedByUser] = useState(false);
  const [musicNotice, setMusicNotice] = useState("");
  const [confettiKey, setConfettiKey] = useState(0);

const audioRef = useRef(null);


  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const track = SCENE_MUSIC[scene] || SCENE_MUSIC[0];
  let cancelled = false;

  audio.loop = true;
  audio.volume = 0.35;

  if (audio.getAttribute("src") !== track) {
    audio.pause();
    if (audio.getAttribute("src") !== track) {
  audio.src = track;
  audio.currentTime = 0;
}
    audio.load();
  }

  if (musicPausedByUser) {
    setIsPlaying(false);

    return () => {
      cancelled = true;
    };
  }

  async function startMusic() {
    try {
      await audio.play();

      if (!cancelled) {
        setIsPlaying(true);
        setMusicNeedsGesture(false);
      }
    } catch {
      if (!cancelled) {
        setIsPlaying(false);
        setMusicNeedsGesture(true);
      }
    }
  }

  startMusic();

  return () => {
    cancelled = true;
  };
}, [scene, musicPausedByUser]);

  useEffect(() => {
  if (!musicNeedsGesture || musicPausedByUser) return;

  async function resumeMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setMusicNeedsGesture(false);
    } catch {
      // The music button remains available.
    }
  }

  function handleFirstInteraction(event) {
    if (
      event.target instanceof Element &&
      event.target.closest(".music-button")
    ) {
      return;
    }

    resumeMusic();
  }

  window.addEventListener(
    "pointerdown",
    handleFirstInteraction,
    true
  );
  window.addEventListener(
    "keydown",
    handleFirstInteraction,
    true
  );

  return () => {
    window.removeEventListener(
      "pointerdown",
      handleFirstInteraction,
      true
    );
    window.removeEventListener(
      "keydown",
      handleFirstInteraction,
      true
    );
  };
}, [musicNeedsGesture, musicPausedByUser]);
  function goTo(nextScene) {
    setScene(Math.max(0, Math.min(4, nextScene)));
    setSelectedPhoto(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function celebrate() {
    setConfettiKey((current) => current + 1);
  }
  function openLetter() {
  if (letterOpen || letterOpening) return;

  setLetterOpening(true);
  celebrate();

  window.setTimeout(() => {
    setLetterOpening(false);
    setLetterOpen(true);
  }, 1000);
}

  function openTheZine() {
    celebrate();
    goTo(1);
  }

  function toggleAward(index) {
    setFlippedAwards((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  async function toggleMusic() {
  const audio = audioRef.current;
  if (!audio) return;

  if (!audio.paused) {
    audio.pause();
    setIsPlaying(false);
    setMusicPausedByUser(true);
    setMusicNeedsGesture(false);
    return;
  }

  setMusicPausedByUser(false);

  try {
    await audio.play();
    setIsPlaying(true);
    setMusicNeedsGesture(false);
  } catch {
    setIsPlaying(false);
    setMusicNeedsGesture(true);
  }
}

  function openFinalReveal() {
    setFinalOpen(true);
    celebrate();
  }

  function handleReplay() {
    setScene(0);
    setLetterOpen(false);
    setFinalOpen(false);
    setLetterOpening(false);
    setFlippedAwards([]);
    setSelectedPhoto(null);
    celebrate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={`site-shell scene-theme-${scene + 1}`}>
      <audio
  ref={audioRef}
  preload="auto"
  aria-hidden="true"
/>

      {confettiKey > 0 && (
        <div
          className="confetti-layer"
          key={confettiKey}
          aria-hidden="true"
        >
          {Array.from({ length: 34 }, (_, index) => (
            <i
              key={index}
              style={{ "--i": index }}
              className={`confetti confetti-${index % 5}`}
            />
          ))}
        </div>
      )}

      <header className="topbar clean-topbar">
  <div className="topbar-actions">
    <button
  className={`music-button music-icon-only ${
    isPlaying ? "music-playing" : ""
  }`}
  onClick={toggleMusic}
  aria-label={isPlaying ? "Pause music" : "Play music"}
  title={isPlaying ? "Pause music" : "Play music"}
>
  <span>{isPlaying ? "Ⅱ" : "♫"}</span>
</button>
  </div>
</header>

      {musicNotice && (
        <div className="music-notice" role="status">
          {musicNotice}
          <button onClick={() => setMusicNotice("")}>×</button>
        </div>
      )}

      <main className="scene-stage" key={scene}>
        {/* SCENE 1: THE COVER */}
        {/* SCENE 1: THE COVER */}
{scene === 0 && (
  <section className="cover-scene scene-enter">
    {/* Extra birthday particle universe */}
<div className="cover-party-field" aria-hidden="true">
  {Array.from({ length: 26 }, (_, index) => {
    const symbols = ["✦", "♡", "✧", "✳", "•", "♥"];

    return (
      <span
        key={index}
        className={`cover-party-particle party-particle-${index % 6}`}
        style={{
          left: `${(index * 37 + 7) % 96}%`,
          top: `${(index * 23 + 11) % 88}%`,
          "--delay": `${-(index % 9) * 0.4}s`,
        }}
      >
        {symbols[index % symbols.length]}
      </span>
    );
  })}

  <span className="cover-sunburst sunburst-one">✳</span>
  <span className="cover-sunburst sunburst-two">✦</span>
  <span className="cover-floating-heart">♡</span>
</div>
    <div className="cover-ambient" aria-hidden="true">
  <span className="ambient-star ambient-star-1">✦</span>
  <span className="ambient-star ambient-star-2">✧</span>
  <span className="ambient-heart ambient-heart-1">♡</span>
  <span className="ambient-heart ambient-heart-2">♥</span>
  <span className="ambient-squiggle ambient-squiggle-1">〰</span>
  <span className="ambient-squiggle ambient-squiggle-2">〰</span>
  <span className="ambient-ring ambient-ring-1" />
  <span className="ambient-ring ambient-ring-2" />
  <span className="ambient-dot ambient-dot-1" />
  <span className="ambient-dot ambient-dot-2" />
</div>
    {/* Animated doodles */}
    <span className="doodle cover-doodle doodle-circle">✳</span>
    <span className="doodle cover-doodle doodle-squiggle">〰</span>
    <span className="doodle cover-doodle doodle-triangle">△</span>
    <span className="doodle cover-doodle doodle-star">✦</span>

    <div className="cover-orbit orbit-one" />
    <div className="cover-orbit orbit-two" />

    {/* Black sticker: girl blowing out the candles */}
    {/* Black sticker: girl blowing out the candles */}
<button
  type="button"
  className="girl-sprite-position girl-interactive"
  onClick={celebrate}
  aria-label="Send Gollu a birthday confetti burst"
  title="Tap for birthday magic!"
>
  <BirthdayGirlSprite />
  <span className="girl-tap-heart" aria-hidden="true">♡</span>
  <span className="girl-tap-sparkle" aria-hidden="true">✦</span>
</button>

    {/* Pink sticker: birthday cake */}
    <div className="cover-sticker-wrap cake-sticker-wrap">
      <BirthdayCakeSticker />
    </div>

    {/* Cute animated bunny */}
    <div
  className="bunny-sprite-anchor"
  aria-label="A bunny hopping in place"
>
  <BunnySprite />

  <span className="bunny-sprite-heart" aria-hidden="true">
    ♡
  </span>
</div>

    <div className="cover-main">
      <p className="cover-greeting">
  <InteractiveText text="Happy  Birthday Sweetu Ptitu mtituuu" />
</p>

     <h1>
  <InteractiveText text="GOLLU" />
  <span className="cover-second-line">
    <InteractiveText text="DARLING!" />
  </span>
</h1>


      <p className="handwritten cover-handline">
  <InteractiveText text="Ajj to Haryana Gurl Ka Happy walaa Birthday Haiiiiiiii" />
</p>

      <p className="cover-subtext">
  <InteractiveText text="I hope you will like this chutkii sa surprise." />
</p>

      <button className="big-cta cover-cta" onClick={openTheZine}>
  <span className="cta-text">PITARA KHOLO BHAISAAAAB!</span>
  <span className="cta-arrow">↗</span>
</button>
    </div>
  </section>
)} 

        {/* SCENE 2: THE PHOTO DUMP */}
        {/* SCENE 2: THE PHOTO DUMP */}
{scene === 1 && (
  <section className="photos-scene scene-enter">
    <BirthdayParticleField />
    {/* Background decorations */}
    <div className="photo-chaos-doodles" aria-hidden="true">
      <span className="photo-doodle photo-doodle-star">✳</span>
      <span className="photo-doodle photo-doodle-heart">♡</span>
      <span className="photo-doodle photo-doodle-ring" />
      <span className="photo-doodle photo-doodle-squiggle">〰</span>
      <span className="photo-doodle photo-doodle-sparkle">✦</span>
      <span className="photo-doodle photo-doodle-star-two">✳</span>
    </div>

    {/* Big, personal heading */}
    <div className="section-heading photo-section-heading">
      {/* Moving scrapbook ribbon */}
<div className="photo-marquee" aria-hidden="true">
  <div className="photo-marquee-track">
    <span>
      GOLLU CORE ✳ CAMERA ROLL CRIMES ✳ MAIN CHARACTER MOMENTS ✳
      BEST GIRL CONTENT ✳ NO NORMAL POSES ALLOWED ✳
    </span>
    <span>
      GOLLU CORE ✳ CAMERA ROLL CRIMES ✳ MAIN CHARACTER MOMENTS ✳
      BEST GIRL CONTENT ✳ NO NORMAL POSES ALLOWED ✳
    </span>
  </div>
</div>
      <div className="photo-heading-copy">
        <p className="photo-top-label">
          This is the Photos ka pitara of Tindu Mindu that make me smile.
        </p>

        <h2 className="photo-main-title">
          <span className="photo-title-first">
            CAMERA ROLL
          </span>

          <span className="photo-title-second">
            OBSESSION!!
          </span>
        </h2>
      </div>
    </div>

    {/* Existing gallery, photo enlargement and error handling preserved */}
    <div className="memory-grid photo-memory-grid">
      {photos.map((photo, index) => (
        <PhotoCard
          key={photo.src}
          photo={photo}
          index={index}
          failed={Boolean(failedPhotos[photo.src])}
          onError={() =>
            setFailedPhotos((current) => ({
              ...current,
              [photo.src]: true,
            }))
          }
          onOpen={() => setSelectedPhoto(photo)}
        />
      ))}
    </div>
  </section>
)}

        {/* SCENE 3: THE AWARDS */}
        {/* SCENE 3: THE GOLLU AWARDS NIGHT */}
{scene === 2 && (
  <section className="awards-scene scene-enter">
    <div className="awards-chaos-decor" aria-hidden="true">
      <span className="awards-doodle awards-star-one">✳</span>
      <span className="awards-doodle awards-heart-one">♡</span>
      <span className="awards-doodle awards-star-two">✦</span>
      <span className="awards-doodle awards-squiggle">〰</span>
      <span className="awards-doodle awards-ring" />
      <span className="awards-doodle awards-dot" />
    </div>

    <div className="awards-show-heading">
      <h2>
        <span>THE GOLLU</span>
        <span className="awards-heading-accent">
          AWARDS NIGHT!!
        </span>
      </h2>

      <p>
        One girl. Zero competition. Extremely questionable judging.
      </p>
    </div>

    <div className="awards-grid">
      {awards.map((award, index) => (
        <AwardCard
          key={award.title}
          award={award}
          index={index}
          flipped={flippedAwards.includes(index)}
          onClick={() => {
            toggleAward(index);

            if (!flippedAwards.includes(index)) {
              celebrate();
            }
          }}
        />
      ))}
    </div>
  </section>
)}

        {/* SCENE 4: THE LETTER */}
        {/* SCENE 4: THE LOVE LETTER */}
{scene === 3 && (
  <section
    className={`letter-scene scene-enter ${
      letterOpening ? "is-opening" : ""
    } ${letterOpen ? "is-letter-open" : ""}`}
  >
    {/* Floating hearts and scrapbook decorations */}
   <div className="letter-love-particles" aria-hidden="true">
  <span className="love-particle love-particle-1">♡</span>
  <span className="love-particle love-particle-2">♥</span>
  <span className="love-particle love-particle-3">✦</span>
  <span className="love-particle love-particle-4">♡</span>
  <span className="love-particle love-particle-5">✧</span>
  <span className="love-particle love-particle-6">♥</span>
  <span className="love-particle love-particle-7">✳</span>
  <span className="love-particle love-particle-8">♡</span>

  {/* Extra floating hearts */}
  <span className="love-particle love-particle-9">♡</span>
  <span className="love-particle love-particle-10">♥</span>
  <span className="love-particle love-particle-11">♡</span>
  <span className="love-particle love-particle-12">♥</span>

  {/* Extra sparkles and flowers */}
  <span className="love-particle love-particle-13">✦</span>
  <span className="love-particle love-particle-14">✧</span>
  <span className="love-particle love-particle-15">❀</span>
  <span className="love-particle love-particle-16">✳</span>

  {/* Tiny floating love notes */}
  <span className="love-particle love-particle-17">♡</span>
  <span className="love-particle love-particle-18">∞</span>
  <span className="love-particle love-particle-19">✦</span>
  <span className="love-particle love-particle-20">♥</span>
</div>

    <span className="letter-doodle letter-heart" aria-hidden="true">
      ♡
    </span>
    <span className="letter-doodle letter-sparkle" aria-hidden="true">
      ✳
    </span>
    <span className="letter-doodle letter-arrow" aria-hidden="true">
      ↘
    </span>

    {/* The approved title and supporting line */}
    <div className="letter-intro">
      <h2 className="love-note-title">
        <span>A little note</span>
        <span>
          for my <em>Love ♡</em>.
        </span>
      </h2>

      <p className="love-note-subtitle">
        Sometimes, I just want you to know how special you are.
      </p>

      <div className="love-note-sticker" aria-hidden="true">
        MADE WITH ♡
      </div>
    </div>

    {!letterOpen ? (
      <div className="envelope-wrap">
        <div
          className={`envelope ${
            letterOpening ? "is-opening" : ""
          }`}
          role="button"
          tabIndex={letterOpening ? -1 : 0}
          aria-label="Open the letter to Kashish"
          aria-disabled={letterOpening}
          onClick={openLetter}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              openLetter();
            }
          }}
        >
          <div className="envelope-paper">
            <span className="envelope-note-heart">♡</span>
            <strong>To Kashish, with love ♡</strong>
          </div>

          <div className="envelope-front-pocket" aria-hidden="true" />
          <div className="envelope-flap" aria-hidden="true" />

          <div className="envelope-heart" aria-hidden="true">
            ♥
          </div>

          <span className="envelope-sparkle envelope-sparkle-one">
            ✦
          </span>
          <span className="envelope-sparkle envelope-sparkle-two">
            ✧
          </span>
        </div>

        <button
          className="big-cta letter-cta"
          onClick={openLetter}
          disabled={letterOpening}
        >
          <span>OPEN MY LITTLE LETTER</span>
          <span className="letter-button-heart">♡</span>
        </button>
      </div>
    ) : (
      <article className="letter-paper">
        <span className="letter-washi-tape" aria-hidden="true" />

        <div className="letter-paper-top">
          <span className="paper-heart-decoration" aria-hidden="true">
            ♡
          </span>
          <span className="paper-heart-decoration" aria-hidden="true">
            ✦
          </span>
        </div>

        {/* Your original message remains editable in birthdayLetter. */}
        <div className="letter-content">
          {birthdayLetter.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="letter-signature">
          <span>with all my love,</span>
          <strong>Your Taminderjeet Singh. ♡</strong>
        </div>

        <span className="letter-paper-corner" aria-hidden="true">
          ✳
        </span>
      </article>
    )}
  </section>
)}

        {/* SCENE 5: THE FINAL REVEAL */}
        {/* SCENE 5: THE BIRTHDAY FINALE */}
{scene === 4 && (
  <section className="final-scene scene-enter">

    {/* Chaos, confetti, hearts and stars */}
    <div className="final-party-particles" aria-hidden="true">
      <span className="party-particle party-1">✦</span>
      <span className="party-particle party-2">♡</span>
      <span className="party-particle party-3">✳</span>
      <span className="party-particle party-4">♥</span>
      <span className="party-particle party-5">✧</span>
      <span className="party-particle party-6">★</span>
      <span className="party-particle party-7">♡</span>
      <span className="party-particle party-8">✦</span>
      <span className="party-particle party-9">♥</span>
      <span className="party-particle party-10">✳</span>
      <span className="party-particle party-11">∞</span>
      <span className="party-particle party-12">✧</span>
      <span className="party-particle party-13">★</span>
      <span className="party-particle party-14">♡</span>
      <span className="party-particle party-15">✦</span>
      <span className="party-particle party-16">♥</span>
    </div>

    <div className="final-party-orbit orbit-party-one" />
    <div className="final-party-orbit orbit-party-two" />

    <div className="final-copy">

      {/* The birthday greeting is the star of the page */}
      <h2 className="birthday-finale-title">
        <span className="final-word final-word-happy">
          HAPPY
        </span>

        <span className="final-word final-word-birthday">
          BIRTHDAY,
        </span>

        <span className="final-word final-word-godu">
          Love ❤️!
        </span>
      </h2>

      {!finalOpen ? (
        <button
          className="big-cta final-party-cta"
          onClick={openFinalReveal}
        >
          ONE LAST SURPRISE!
          <span>↗</span>
        </button>
      ) : (
        <div className="final-message-card">
          <span className="final-message-label">
            ♡ FROM ME, TO YOU ♡
          </span>

          {finalMessage.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <span className="final-heart">♡</span>
        </div>
      )}

      <button
        className="replay-link"
        onClick={handleReplay}
      >
        ↻ LET'S DO THIS AGAIN!
      </button>
    </div>

  </section>
)}
      </main>

      {scene !== 0 && (
  <nav className="floating-scene-nav" aria-label="Scene navigation">
    <button
      className="float-nav-button float-nav-back"
      onClick={() => goTo(scene - 1)}
      aria-label="Go to previous scene"
    >
      <span>←</span> BACK
    </button>

    <button
      className="float-nav-button float-nav-next"
      onClick={() =>
        scene === 4 ? handleReplay() : goTo(scene + 1)
      }
      aria-label={scene === 4 ? "Replay birthday website" : "Go to next scene"}
    >
      {scene === 4 ? "AGAIN" : "NEXT"}
      <span>{scene === 4 ? "↻" : "↗"}</span>
    </button>
  </nav>
)}

      {selectedPhoto && (
        <div
          className="photo-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.label}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="photo-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close enlarged photo"
            >
              ×
            </button>

            {failedPhotos[selectedPhoto.src] ? (
              <div className="photo-placeholder modal-placeholder">
                <span>✳</span>
                <strong>ADD YOUR PHOTO</strong>
              </div>
            ) : (
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.label}
                onError={() =>
                  setFailedPhotos((current) => ({
                    ...current,
                    [selectedPhoto.src]: true,
                  }))
                }
              />
            )}

            <div className="modal-caption">
              <span>{selectedPhoto.tag}</span>
              <h3>{selectedPhoto.label}</h3>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}