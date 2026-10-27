// Four laptop illustrations for the "How I work" section (drawn with SVG, no image files needed).
// Index 0 = Discover, 1 = Planning, 2 = Development, 3 = Launch.

function Laptop({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={label}>
      <rect width="320" height="200" fill="#12161d" />
      <rect x="58" y="22" width="204" height="124" rx="10" fill="#0e1116" stroke="#2a3140" strokeWidth="2" />
      <path d="M30 150h260l-14 22H44z" fill="#1e2430" stroke="#2a3140" strokeWidth="2" />
      <rect x="136" y="150" width="48" height="5" rx="2.5" fill="#2a3140" />
      {children}
    </svg>
  );
}

const Discover = () => (
  <Laptop label="Laptop with search">
    <rect x="78" y="36" width="90" height="6" rx="3" fill="#2a3140" />
    <rect x="78" y="48" width="56" height="6" rx="3" fill="#2a3140" />
    <circle cx="168" cy="88" r="26" fill="none" stroke="#8b9bff" strokeWidth="6" />
    <line x1="187" y1="107" x2="210" y2="130" stroke="#8b9bff" strokeWidth="8" strokeLinecap="round" />
  </Laptop>
);

const Planning = () => (
  <Laptop label="Laptop with wireframe">
    <rect x="76" y="36" width="168" height="14" rx="4" fill="none" stroke="#8b9bff" strokeWidth="2" />
    <rect x="76" y="58" width="76" height="72" rx="5" fill="none" stroke="#6ee7c8" strokeWidth="2" strokeDasharray="5 4" />
    <rect x="164" y="58" width="80" height="32" rx="5" fill="#1e2430" stroke="#2a3140" strokeWidth="2" />
    <rect x="164" y="98" width="80" height="32" rx="5" fill="#1e2430" stroke="#2a3140" strokeWidth="2" />
  </Laptop>
);

const Development = () => (
  <Laptop label="Laptop with code">
    <rect x="76" y="36" width="60" height="7" rx="3" fill="#8b9bff" />
    <rect x="92" y="50" width="96" height="7" rx="3" fill="#6ee7c8" />
    <rect x="92" y="64" width="70" height="7" rx="3" fill="#8e97a8" />
    <rect x="106" y="78" width="110" height="7" rx="3" fill="#8b9bff" />
    <rect x="92" y="92" width="52" height="7" rx="3" fill="#6ee7c8" />
    <rect x="92" y="106" width="84" height="7" rx="3" fill="#8e97a8" />
    <rect x="76" y="120" width="40" height="7" rx="3" fill="#8b9bff" />
  </Laptop>
);

const Launch = () => (
  <Laptop label="Laptop with cloud upload">
    <circle cx="132" cy="102" r="18" fill="#1e2430" />
    <circle cx="158" cy="90" r="24" fill="#1e2430" />
    <circle cx="186" cy="102" r="17" fill="#1e2430" />
    <rect x="132" y="102" width="54" height="17" fill="#1e2430" />
    <line x1="160" y1="112" x2="160" y2="62" stroke="#6ee7c8" strokeWidth="6" strokeLinecap="round" />
    <polygon points="160,48 144,68 176,68" fill="#6ee7c8" />
  </Laptop>
);

export const processIllustrations = [Discover, Planning, Development, Launch];
