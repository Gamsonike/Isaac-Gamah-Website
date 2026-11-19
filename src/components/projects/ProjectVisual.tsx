import type { ProjectVisualKind } from "@/content/projects";

const C = { bg: "#0B2E33", panel: "#123C42", line: "#4F7C82", mist: "#93B1B5", ice: "#B8E3E9" };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect width="400" height="250" fill={C.bg} />
      <rect x="0" y="0" width="400" height="22" fill={C.panel} />
      <circle cx="12" cy="11" r="3" fill={C.line} />
      <circle cx="23" cy="11" r="3" fill={C.line} />
      <circle cx="34" cy="11" r="3" fill={C.line} />
      {children}
    </>
  );
}

const Bars = ({ x, y, h }: { x: number; y: number; h: number[] }) => (
  <>
    {h.map((v, i) => (
      <rect key={i} x={x + i * 16} y={y - v} width="9" height={v} rx="2" fill={i % 3 === 0 ? C.ice : C.line} />
    ))}
  </>
);

function Toolkit() {
  return (
    <Frame>
      <rect x="0" y="22" width="70" height="228" fill={C.panel} opacity="0.7" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="12" y={40 + i * 26} width={i === 0 ? 46 : 38} height="8" rx="4" fill={i === 0 ? C.ice : C.line} opacity={i === 0 ? 1 : 0.6} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${96 + i * 100} 38)`}>
          <rect width="90" height="76" rx="8" fill={C.panel} />
          <circle cx="45" cy="42" r="21" fill="none" stroke={C.line} strokeOpacity="0.5" strokeWidth="6" />
          <circle cx="45" cy="42" r="21" fill="none" stroke={C.ice} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${50 + i * 25} 200`} transform="rotate(-90 45 42)" />
          <rect x="12" y="8" width="30" height="5" rx="2.5" fill={C.mist} opacity="0.7" />
        </g>
      ))}
      <rect x="96" y="128" width="190" height="104" rx="8" fill={C.panel} />
      <Bars x={110} y={218} h={[30, 52, 40, 66, 48, 72, 38, 58, 44, 62]} />
      <rect x="298" y="128" width="90" height="104" rx="8" fill={C.panel} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="310" y={144 + i * 20} width="40" height="5" rx="2.5" fill={C.mist} opacity="0.7" />
          <rect x="310" y={153 + i * 20} width={60 - i * 8} height="4" rx="2" fill={C.line} />
        </g>
      ))}
    </Frame>
  );
}

function Soc() {
  const pts: [number, number][] = [[250, 70], [330, 55], [360, 120], [300, 165], [230, 140]];
  return (
    <Frame>
      <rect x="14" y="34" width="210" height="200" rx="8" fill={C.panel} />
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <rect x="26" y={50 + i * 20} width="22" height="5" rx="2.5" fill={i === 3 ? C.ice : C.line} />
          <rect x="56" y={50 + i * 20} width={90 + ((i * 37) % 60)} height="5" rx="2.5" fill={C.mist} opacity="0.55" />
        </g>
      ))}
      <rect x="236" y="34" width="150" height="130" rx="8" fill={C.panel} />
      {pts.map(([x, y], i) => (
        <line key={i} x1="310" y1="100" x2={x} y2={y} stroke={C.line} strokeOpacity="0.8" />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={C.bg} stroke={C.mist} />
      ))}
      <circle cx="310" cy="100" r="10" fill={C.ice} />
      <rect x="236" y="176" width="150" height="58" rx="8" fill={C.panel} />
      <Bars x={250} y={224} h={[14, 26, 18, 34, 22, 30, 16, 28]} />
    </Frame>
  );
}

function Shop() {
  return (
    <Frame>
      <rect x="14" y="34" width="372" height="16" rx="8" fill={C.panel} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={24 + i * 52} y="38" width="36" height="8" rx="4" fill={i === 0 ? C.ice : C.line} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${14 + i * 92} 62)`}>
          <rect width="84" height="120" rx="8" fill={C.panel} />
          <rect x="8" y="8" width="68" height="56" rx="6" fill={C.line} opacity="0.45" />
          <rect x="22" y="22" width="40" height="28" rx="3" fill="none" stroke={C.ice} strokeWidth="2" />
          <rect x="8" y="74" width="54" height="6" rx="3" fill={C.mist} opacity="0.8" />
          <rect x="8" y="86" width="34" height="5" rx="2.5" fill={C.line} />
          <rect x="8" y="98" width="68" height="14" rx="5" fill={C.ice} />
        </g>
      ))}
      <rect x="296" y="62" width="90" height="170" rx="8" fill={C.panel} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="306" y={76 + i * 24} width="40" height="5" rx="2.5" fill={C.mist} opacity="0.8" />
          <rect x="306" y={85 + i * 24} width="26" height="4" rx="2" fill={C.line} />
        </g>
      ))}
      <rect x="306" y="196" width="70" height="26" rx="6" fill={C.ice} />
      <rect x="14" y="192" width="272" height="40" rx="8" fill={C.panel} opacity="0.6" />
    </Frame>
  );
}

const Phone = ({ x, y, tint }: { x: number; y: number; tint: boolean }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="104" height="206" rx="16" fill={C.panel} stroke={C.line} strokeWidth="1.5" />
    <rect x="36" y="8" width="32" height="5" rx="2.5" fill={C.bg} />
    <rect x="12" y="26" width="80" height="44" rx="8" fill={tint ? C.ice : C.line} opacity={tint ? 1 : 0.55} />
    <rect x="20" y="36" width="36" height="5" rx="2.5" fill={C.bg} opacity="0.7" />
    <rect x="20" y="48" width="56" height="9" rx="3" fill={C.bg} />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <circle cx="22" cy={90 + i * 22} r="6" fill={C.line} />
        <rect x="34" y={85 + i * 22} width={44 + ((i * 13) % 20)} height="5" rx="2.5" fill={C.mist} opacity="0.7" />
        <rect x="34" y={94 + i * 22} width="28" height="4" rx="2" fill={C.line} />
      </g>
    ))}
  </g>
);

function Mobile() {
  return (
    <Frame>
      <Phone x={90} y={30} tint />
      <Phone x={206} y={30} tint={false} />
    </Frame>
  );
}

const map = { toolkit: Toolkit, soc: Soc, shop: Shop, mobile: Mobile } as const;

/**
 * Stylised UI illustration. It is NOT a real screenshot and is labelled as such.
 * Replace with real screenshots by adding an `image` field to the project data.
 */
export function ProjectVisual({ kind, title }: { kind: ProjectVisualKind; title: string }) {
  const Art = map[kind];
  return (
    <div className="relative overflow-hidden rounded-xl bg-midnight ring-1 ring-mist/20">
      <svg viewBox="0 0 400 250" role="img" aria-label={`Illustrative interface preview for ${title}`} className="block h-auto w-full" preserveAspectRatio="xMidYMid slice">
        <Art />
      </svg>
      <span className="absolute bottom-2 right-2 rounded bg-midnight/90 px-2 py-1 font-mono text-[10px] text-ice ring-1 ring-mist/25">
        Illustrative preview, not a screenshot
      </span>
    </div>
  );
}
