/*
 * Editorial figure suite — one shared art direction:
 * canvas #171717 · type #F3F1EA · secondary #85827C · accent #C9362B · lines #B8B4AA
 * Every figure is 16:9 (viewBox 1600 × 900), conceptual, and clearly labelled.
 * No figure reproduces an internal interface.
 */

import type { ReactNode } from "react";

const C = {
  bg: "#171717",
  fg: "#F3F1EA",
  sec: "#85827C",
  acc: "#C9362B",
  div: "#B8B4AA",
};
const SANS = "Inter, sans-serif";
const SERIF = "Newsreader, serif";
const RULE = "rgba(184,180,170,0.4)";
const FAINT = "rgba(184,180,170,0.22)";

/* ------------------------------ shared parts ------------------------------ */

function Shell({
  fig,
  title,
  children,
  id,
}: {
  fig: string;
  title: string;
  children: ReactNode;
  id: string;
}) {
  return (
    <svg viewBox="0 0 1600 900" role="img" aria-label={`Figure ${fig}: ${title}`} preserveAspectRatio="xMidYMid meet">
      <rect width="1600" height="900" fill={C.bg} />
      <text x="96" y="88" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.sec}>
        RG — FIG. {fig}
      </text>
      <text x="1504" y="88" textAnchor="end" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.sec}>
        {title.toUpperCase()}
      </text>
      <line x1="96" y1="112" x2="1504" y2="112" stroke={RULE} strokeWidth="1" />
      <line x1="96" y1="812" x2="1504" y2="812" stroke={FAINT} strokeWidth="1" />
      <text x="96" y="850" fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        CONCEPTUAL DIAGRAM — NOT A PRODUCT SCREENSHOT
      </text>
      <text x="1504" y="850" textAnchor="end" fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        16 : 9
      </text>
      <defs>
        <marker id={`arr-${id}`} markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill={C.div} />
        </marker>
        <marker id={`arr-acc-${id}`} markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill={C.acc} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

function Box({
  x,
  y,
  w,
  h,
  lines,
  accent = false,
  fill = false,
  sub,
  fontSize = 24,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
  accent?: boolean;
  fill?: boolean;
  sub?: string;
  fontSize?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={fill ? C.acc : "none"}
        stroke={accent ? C.acc : RULE}
        strokeWidth={accent ? 1.6 : 1}
      />
      {accent && !fill ? <rect x={x} y={y} width={8} height={8} fill={C.acc} /> : null}
      {lines.map((t, i) => (
        <text
          key={t}
          x={x + w / 2}
          y={y + h / 2 + (i - (lines.length - 1) / 2) * (fontSize + 8) + fontSize / 3}
          textAnchor="middle"
          fontFamily={SANS}
          fontSize={fontSize}
          fontWeight="500"
          fill={fill ? C.fg : C.fg}
        >
          {t}
        </text>
      ))}
      {sub ? (
        <text x={x + w / 2} y={y + h + 32} textAnchor="middle" fontFamily={SANS} fontSize="15" letterSpacing="2" fill={C.sec}>
          {sub.toUpperCase()}
        </text>
      ) : null}
    </g>
  );
}

function StepLabel({ x, y, n }: { x: number; y: number; n: string }) {
  return (
    <text x={x} y={y} fontFamily={SERIF} fontStyle="italic" fontSize="26" fill={C.sec}>
      {n}
    </text>
  );
}

/* Token row for formula figures */
type Tok = { t: string; kind: "chip" | "op" | "paren" | "ghost" };

function Tokens({ x, y, tokens, compact = false }: { x: number; y: number; tokens: Tok[]; compact?: boolean }) {
  let cx = x;
  const H = 60;
  const nodes: ReactNode[] = [];
  tokens.forEach((tok, i) => {
    if (tok.kind === "op") {
      const w = 46;
      nodes.push(
        <text key={i} x={cx + w / 2} y={y + H / 2 + 12} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize={compact ? 28 : 34} fill={C.div}>
          {tok.t}
        </text>
      );
      cx += w + 12;
    } else if (tok.kind === "paren") {
      const w = 30;
      nodes.push(
        <text key={i} x={cx + w / 2} y={y + H / 2 + 13} textAnchor="middle" fontFamily={SERIF} fontSize={compact ? 30 : 38} fill={C.acc}>
          {tok.t}
        </text>
      );
      cx += w + 12;
    } else if (tok.kind === "ghost") {
      const w = 96;
      nodes.push(
        <g key={i}>
          <rect x={cx} y={y} width={w} height={H} fill="none" stroke={C.div} strokeWidth="1" strokeDasharray="6 6" opacity="0.6" />
          <text x={cx + w / 2} y={y + H / 2 + 10} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="26" fill={C.sec}>
            ?
          </text>
        </g>
      );
      cx += w + 12;
    } else {
      const w = tok.t.length * (compact ? 9 : 11) + (compact ? 36 : 44);
      nodes.push(
        <g key={i}>
          <rect x={cx} y={y} width={w} height={H} fill="none" stroke={RULE} strokeWidth="1" />
          <text x={cx + w / 2} y={y + H / 2 + 8} textAnchor="middle" fontFamily={SANS} fontSize={compact ? 18 : 21} fontWeight="500" fill={C.fg}>
            {tok.t}
          </text>
        </g>
      );
      cx += w + 12;
    }
  });
  return <g>{nodes}</g>;
}

const chip = (t: string): Tok => ({ t, kind: "chip" });
const op = (t: string): Tok => ({ t, kind: "op" });
const paren = (t: string): Tok => ({ t, kind: "paren" });
const ghost: Tok = { t: "", kind: "ghost" };

/* ================================================================
   CASE STUDY 01 — Custom formula creation
   ================================================================ */

export function F1FormulaChallenge() {
  return (
    <Shell fig="01" title="The Formula Challenge" id="f1">
      <text x={96} y={196} fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.sec}>
        AVAILABLE DATAPOINTS
      </text>
      {["Data point 1", "Data point 2", "Data point 3"].map((t, i) => (
        <g key={t}>
          <rect x={96} y={236 + i * 100} width={240} height={68} fill="none" stroke={RULE} strokeWidth="1" />
          <rect x={112} y={262 + i * 100} width={10} height={10} fill={C.sec} />
          <text x={138} y={280 + i * 100} fontFamily={SANS} fontSize="22" fontWeight="500" fill={C.fg}>
            {t}
          </text>
        </g>
      ))}
      {/* converging elbows */}
      <path d="M336 270 H456 V470 H548" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-f1)" />
      <path d="M336 370 H456 V470" fill="none" stroke={C.div} strokeWidth="1.4" />
      <path d="M336 470 H548" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-f1)" />

      <text x={560} y={420} fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.sec}>
        ONE ASSEMBLED EXPRESSION
      </text>
      <Tokens
        x={560}
        y={440}
        tokens={[chip("Data point 1"), op("×"), chip("0.5"), op("+"), paren("("), chip("Data point 2"), op("÷"), chip("Data point 3"), paren(")")]}
      />
      <line x1={560} y1={556} x2={1459} y2={556} stroke={FAINT} strokeWidth="1" />
      <text x={560} y={592} fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        = ONE COMPUTED DATAPOINT
      </text>
      <text x={800} y={700} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        An expression assembled from parts — not typed from memory.
      </text>
    </Shell>
  );
}

export function F2Progressive() {
  return (
    <Shell fig="02" title="Progressive Selection" id="f2">
      <line x1="800" y1="170" x2="800" y2="762" stroke={FAINT} strokeWidth="1" />
      <text x={400} y={206} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.fg}>
        A — THE RESTING STATE
      </text>
      <text x={1200} y={206} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.fg}>
        B — AFTER THE REQUEST
      </text>
      {/* A */}
      <rect x={250} y={400} width={300} height={68} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={400} y={443} textAnchor="middle" fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
        + Add Data Point
      </text>
      <rect x={250} y={510} width={300} height={180} fill="none" stroke={C.div} strokeWidth="1" strokeDasharray="4 8" opacity="0.35" />
      <text x={400} y={724} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="26" fill={C.sec}>
        Options stay out of the way.
      </text>
      {/* B */}
      <rect x={1050} y={280} width={300} height={68} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={1200} y={323} textAnchor="middle" fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
        + Add Data Point
      </text>
      <line x1="1200" y1="348" x2="1200" y2="372" stroke={C.div} strokeWidth="1.4" />
      <g>
        <rect x={1050} y={380} width={300} height={240} fill="none" stroke={RULE} strokeWidth="1" />
        {["Data point 1", "Data point 2", "Data point 3", "Data point 4"].map((t, i) => (
          <g key={t}>
            <line x1={1050} y1={440 + i * 60} x2={1350} y2={440 + i * 60} stroke={FAINT} strokeWidth="1" />
            {i === 1 ? <rect x={1050} y={440} width={4} height={60} fill={C.acc} /> : null}
            <text x={1082} y={417 + i * 60} fontFamily={SANS} fontSize="20" fontWeight={i === 1 ? "600" : "400"} fill={i === 1 ? C.fg : C.div}>
              {t}
            </text>
          </g>
        ))}
      </g>
      <text x={1200} y={680} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="26" fill={C.sec}>
        Choices surface only when asked.
      </text>
    </Shell>
  );
}

export function F3Construction() {
  return (
    <Shell fig="03" title="Formula Construction & Grouping" id="f3">
      <text x={96} y={196} fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.sec}>
        EXPRESSIONS ARE ORGANISED INTO LOGICAL SECTIONS
      </text>
      {/* group 01 */}
      <rect x={140} y={300} width={470} height={230} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={164} y={340} fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        GROUP 01
      </text>
      <Tokens x={190} y={390} compact tokens={[chip("Data point 1"), op("÷"), chip("Data point 2")]} />
      {/* operator */}
      <text x={800} y={438} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="64" fill={C.acc}>
        ×
      </text>
      {/* group 02 */}
      <rect x={990} y={300} width={470} height={230} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={1014} y={340} fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        GROUP 02
      </text>
      <Tokens x={998} y={390} compact tokens={[paren("("), chip("Data point 3"), op("−"), chip("Data point 4"), paren(")")]} />
      <line x1={140} y1={600} x2={1460} y2={600} stroke={FAINT} strokeWidth="1" />
      <text x={800} y={646} textAnchor="middle" fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        SECTIONS KEEP COMPLEX LOGIC READABLE
      </text>
      <text x={800} y={720} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        Like solving a puzzle — piece by piece, in groups.
      </text>
    </Shell>
  );
}

export function F4Validation() {
  return (
    <Shell fig="04" title="Contextual Validation" id="f4">
      <line x1="800" y1="170" x2="800" y2="762" stroke={FAINT} strokeWidth="1" />
      <text x={400} y={206} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.fg}>
        A — INCOMPLETE FORMULA
      </text>
      <text x={1200} y={206} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.fg}>
        B — INCOMPATIBLE SUFFIXES
      </text>
      {/* A */}
      <Tokens x={196} y={280} compact tokens={[chip("Data point 1"), op("+"), ghost]} />
      <text x={196} y={392} fontFamily={SANS} fontSize="15" letterSpacing="2" fill={C.sec}>
        ONLY ONE READING ADDED
      </text>
      <g>
        <rect x={160} y={440} width={480} height={110} fill="none" stroke={C.acc} strokeWidth="1.4" />
        <rect x={160} y={440} width={8} height={8} fill={C.acc} />
        <text x={196} y={488} fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
          A formula needs at least
        </text>
        <text x={196} y={518} fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
          two readings.
        </text>
      </g>
      {/* B */}
      <Tokens x={896} y={280} compact tokens={[chip("Data point 2 · Suffix 1"), op("+"), chip("Data point 3 · Suffix 2")]} />
      <line x1={1158} y1={266} x2={1190} y2={358} stroke={C.acc} strokeWidth="2" />
      <text x={896} y={392} fontFamily={SANS} fontSize="15" letterSpacing="2" fill={C.sec}>
        MIXED MEASUREMENT SUFFIXES
      </text>
      <g>
        <rect x={860} y={440} width={480} height={110} fill="none" stroke={C.acc} strokeWidth="1.4" />
        <rect x={860} y={440} width={8} height={8} fill={C.acc} />
        <text x={896} y={488} fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
          These suffixes can't be combined —
        </text>
        <text x={896} y={518} fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
          Suffix 1 and Suffix 2 don't match.
        </text>
      </g>
      <text x={800} y={700} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="30" fill={C.fg}>
        Errors surface in context, while the formula is still being written.
      </text>
    </Shell>
  );
}

export function F5Evolution() {
  return (
    <Shell fig="05" title="From Proposal to Product" id="f5">
      <text x={330} y={200} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.fg}>
        01 — THE PROPOSAL
      </text>
      <text x={1170} y={200} textAnchor="middle" fontFamily={SANS} fontSize="17" letterSpacing="4" fill={C.acc}>
        02 — THE SHIPPED FORM (TEAM-REFINED)
      </text>
      {/* A: dropdown idea */}
      <rect x={210} y={260} width={240} height={60} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={330} y={299} textAnchor="middle" fontFamily={SANS} fontSize="19" fontWeight="500" fill={C.fg}>
        + Add Data Point
      </text>
      <rect x={210} y={330} width={240} height={150} fill="none" stroke={RULE} strokeWidth="1" />
      {["Data point 1", "Data point 2", "Data point 3"].map((t, i) => (
        <g key={t}>
          {i > 0 ? <line x1={210} y1={330 + i * 50} x2={450} y2={330 + i * 50} stroke={FAINT} strokeWidth="1" /> : null}
          <text x={232} y={362 + i * 50} fontFamily={SANS} fontSize="18" fill={C.div}>
            {t}
          </text>
        </g>
      ))}
      <text x={330} y={528} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        DROPDOWN REVEALED ON DEMAND
      </text>
      {/* bridge arrow */}
      <line x1="520" y1="385" x2="900" y2="385" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-f5)" />
      <text x={710} y={356} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="3" fill={C.sec}>
        TEAM REFINEMENT
      </text>
      {/* B: checklist → formula tab */}
      <rect x={980} y={240} width={380} height={170} fill="none" stroke={RULE} strokeWidth="1" />
      {["Data point 1", "Data point 2", "Data point 3"].map((t, i) => (
        <g key={t}>
          {i > 0 ? <line x1={980} y1={240 + i * 57} x2={1360} y2={240 + i * 57} stroke={FAINT} strokeWidth="1" /> : null}
          <rect x={1004} y={258 + i * 57} width={18} height={18} fill="none" stroke={C.div} strokeWidth="1.4" />
          <path d={`M1008 ${267 + i * 57} l4 5 l8 -9`} stroke={C.acc} strokeWidth="2" fill="none" />
          <text x={1040} y={274 + i * 57} fontFamily={SANS} fontSize="19" fill={C.fg}>
            {t}
          </text>
        </g>
      ))}
      <text x={980} y={228} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        DATAPOINT CHECKLIST
      </text>
      <line x1="1170" y1="410" x2="1170" y2="452" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-f5)" />
      <rect x={980} y={464} width={380} height={150} fill="none" stroke={RULE} strokeWidth="1" />
      <text x={1004} y={496} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        FORMULA TAB — SELECTED DATAPOINTS
      </text>
      <Tokens x={998} y={524} compact tokens={[chip("Data point 1"), op("+"), chip("Data point 2")]} />
      <text x={800} y={716} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="30" fill={C.fg}>
        The form changed — the progressive idea stayed.
      </text>
    </Shell>
  );
}

/* ================================================================
   CASE STUDY 02 — Unified QA experience
   ================================================================ */

export function Q1Discovery() {
  return (
    <Shell fig="01" title="The Discovery" id="q1">
      <StepLabel x={140} y={284} n="01" />
      <StepLabel x={644} y={284} n="02" />
      <StepLabel x={1148} y={284} n="03" />
      <Box x={140} y={314} w={320} h={156} lines={["Platform", "Documentation"]} sub="The assigned task" />
      <Box x={644} y={314} w={320} h={156} lines={["Design-System", "Inconsistencies"]} sub="The observation" />
      <Box x={1148} y={314} w={320} h={156} lines={["QA", "Opportunity"]} accent sub="The opening" />
      <line x1="472" y1="392" x2="620" y2="392" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q1)" />
      <line x1="976" y1="392" x2="1124" y2="392" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q1)" />
      <text x={800} y={646} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        A documentation task raised a broader product question.
      </text>
      <line x1="630" y1="684" x2="970" y2="684" stroke={C.acc} strokeWidth="1.5" />
    </Shell>
  );
}

export function Q2Unified() {
  return (
    <Shell fig="02" title="The Unified QA Concept" id="q2">
      <circle cx="660" cy="450" r="262" fill="none" stroke={RULE} strokeWidth="1.5" />
      <circle cx="940" cy="450" r="262" fill="none" stroke={RULE} strokeWidth="1.5" />
      <clipPath id="clip-q2">
        <circle cx="940" cy="450" r="260" />
      </clipPath>
      <circle cx="660" cy="450" r="260" fill={C.acc} opacity="0.24" clipPath="url(#clip-q2)" />
      <text x="560" y="442" textAnchor="middle" fontFamily={SANS} fontSize="25" fontWeight="500" fill={C.fg}>
        Accessibility
      </text>
      <text x="560" y="476" textAnchor="middle" fontFamily={SANS} fontSize="25" fontWeight="500" fill={C.fg}>
        Checks
      </text>
      <text x="1040" y="428" textAnchor="middle" fontFamily={SANS} fontSize="25" fontWeight="500" fill={C.fg}>
        Design-System
      </text>
      <text x="1040" y="462" textAnchor="middle" fontFamily={SANS} fontSize="25" fontWeight="500" fill={C.fg}>
        Compliance
      </text>
      <line x1="800" y1="480" x2="800" y2="566" stroke={C.acc} strokeWidth="1.5" />
      <rect x="795" y="475" width="10" height="10" fill={C.acc} />
      <text x="800" y={606} textAnchor="middle" fontFamily={SANS} fontSize="24" fontWeight="600" fill={C.fg}>
        Unified QA Concept
      </text>
      <text x={800} y={726} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="28" fill={C.sec}>
        Two dimensions of quality — one experience.
      </text>
    </Shell>
  );
}

export function Q3Redesign() {
  const bus = [
    { x: 178, label: "Identified Issue" },
    { x: 502, label: "Visual Evidence" },
    { x: 826, label: "Relevant Code" },
    { x: 1150, label: "Detailed Explanation" },
  ];
  return (
    <Shell fig="03" title="Rethinking the Platform" id="q3">
      <StepLabel x={160} y={200} n="01" />
      <StepLabel x={640} y={200} n="02" />
      <StepLabel x={1120} y={200} n="03" />
      <Box x={160} y={226} w={300} h={118} lines={["Dashboard"]} sub="A structured overview" />
      <Box x={640} y={226} w={300} h={118} lines={["Website", "Scanning"]} sub="A clearer journey" />
      <Box x={1120} y={226} w={300} h={118} lines={["Issue", "Investigation"]} sub="Context & evidence" />
      <line x1="472" y1="285" x2="616" y2="285" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q3)" />
      <line x1="952" y1="285" x2="1096" y2="285" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q3)" />
      <path d="M1270 348 V470 H314 V528" fill="none" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q3)" />
      <text x={560} y={464} textAnchor="middle" fontFamily={SANS} fontSize="16" letterSpacing="3" fill={C.sec}>
        THE EXPANDABLE ISSUE VIEW BRINGS TOGETHER
      </text>
      {bus.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={536} width={272} height={94} fill="none" stroke={RULE} strokeWidth="1" />
          <text x={b.x + 136} y={580} textAnchor="middle" fontFamily={SANS} fontSize="19" fontWeight="500" fill={C.fg}>
            {b.label}
          </text>
          <text x={b.x + 136} y={608} textAnchor="middle" fontFamily={SANS} fontSize="13" letterSpacing="2" fill={C.sec}>
            {`LAYER 0${i + 1}`}
          </text>
          {i < 3 ? (
            <line x1={b.x + 280} y1={583} x2={b.x + 316} y2={583} stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q3)" />
          ) : null}
        </g>
      ))}
      <text x={800} y={726} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="30" fill={C.fg}>
        From spotting an issue to understanding it.
      </text>
    </Shell>
  );
}

export function Q4AIProcess() {
  return (
    <Shell fig="04" title="AI-Assisted Design Process" id="q4">
      <Box x={660} y={152} w={280} h={88} lines={["Prompt"]} sub="Design ideas, translated" fontSize={26} />
      <Box x={1130} y={412} w={280} h={88} lines={["Prototype"]} sub="Generated interface" fontSize={26} />
      <Box x={660} y={656} w={280} h={88} lines={["Evaluate"]} sub="Against the design system" fontSize={26} />
      <Box x={190} y={412} w={280} h={88} lines={["Refine"]} sub="Layouts & interactions" fontSize={26} />
      <path d="M946 200 Q1210 240 1222 396" fill="none" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q4)" />
      <path d="M1222 516 Q1210 668 946 696" fill="none" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q4)" />
      <path d="M654 696 Q390 668 378 516" fill="none" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-q4)" />
      <path d="M378 396 Q390 240 654 200" fill="none" stroke={C.acc} strokeWidth="1.5" markerEnd="url(#arr-acc-q4)" />
      <text x={800} y={444} textAnchor="middle" fontFamily={SANS} fontSize="16" letterSpacing="3" fill={C.sec}>
        AN EXPLORATION TOOL —
      </text>
      <text x={800} y={472} textAnchor="middle" fontFamily={SANS} fontSize="16" letterSpacing="3" fill={C.sec}>
        NOT A REPLACEMENT FOR JUDGEMENT
      </text>
      <circle cx="204" cy="300" r="4" fill={C.acc} />
      <text x={224} y={306} fontFamily={SANS} fontSize="13" letterSpacing="1.5" fill={C.acc}>
        ITERATION LOOP
      </text>
    </Shell>
  );
}

export function Q5ComplianceEval() {
  return (
    <Shell fig="05" title="Evaluating the Compliance Output" id="q5">
      <Box x={96} y={370} w={250} h={160} lines={["Asset Management", "Platform"]} sub="The test environment" fontSize={21} />
      <Box x={470} y={282} w={290} h={88} lines={["Accessibility checks"]} fontSize={21} />
      <Box x={470} y={444} w={290} h={88} lines={["Design-system checks"]} fontSize={21} />
      <path d="M346 398 H416 V326 H462" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q5)" />
      <path d="M346 482 H416 V488 H462" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q5)" />
      <Box x={892} y={336} w={240} h={150} lines={["QA", "Results"]} sub="Generated by the existing platform" fontSize={24} />
      <path d="M760 326 H826 V366 H884" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q5)" />
      <path d="M760 488 H826 V441 H884" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q5)" />
      <line x1="1012" y1="498" x2="1012" y2="556" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q5)" />
      {/* evaluation bar */}
      <rect x={782} y={568} width={460} height={100} fill="none" stroke={C.acc} strokeWidth="1.5" />
      <rect x={782} y={568} width={8} height={8} fill={C.acc} />
      <text x={1012} y={610} textAnchor="middle" fontFamily={SANS} fontSize="21" fontWeight="500" fill={C.fg}>
        My review &amp; evaluation
      </text>
      <text x={1012} y={642} textAnchor="middle" fontFamily={SANS} fontSize="15" letterSpacing="2" fill={C.sec}>
        QUALITY · DETAIL · USEFULNESS OF THE OUTPUT
      </text>
      <text x={800} y={748} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="28" fill={C.sec}>
        Evaluating the platform by the quality of what it reports.
      </text>
    </Shell>
  );
}

export function Q6TeamFeedback() {
  return (
    <Shell fig="06" title="Feedback & the Identified Limitation" id="q6">
      <Box x={96} y={330} w={240} h={150} lines={["Compliance", "Results"]} sub="Shared as-is" fontSize={22} />
      <Box x={460} y={250} w={300} h={84} lines={["Asset Management team"]} fontSize={21} />
      <Box x={460} y={396} w={300} h={84} lines={["Design System team"]} fontSize={21} />
      <path d="M336 360 H410 V292 H452" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      <path d="M336 450 H410 V438 H452" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      <Box x={852} y={316} w={280} h={108} lines={["Feedback &", "Discussion"]} fontSize={22} />
      <path d="M760 292 H806 V332 H844" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      <path d="M760 438 H806 V386 H844" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      {/* outcomes */}
      <Box x={1250} y={230} w={254} h={108} lines={["Detailed error", "descriptions"]} fontSize={19} />
      <text x={1377} y={368} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        ALREADY AVAILABLE
      </text>
      <Box x={1250} y={400} w={254} h={108} lines={["Single-URL crawl", "limitation"]} accent fontSize={19} />
      <text x={1377} y={538} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.acc}>
        IDENTIFIED — KEY GAP
      </text>
      <path d="M1132 340 H1196 V286 H1242" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      <path d="M1132 400 H1196 V452 H1242" fill="none" stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-q6)" />
      {/* opportunity banner */}
      <rect x={460} y={620} width={1044} height={88} fill="none" stroke={RULE} strokeWidth="1" />
      <rect x={460} y={620} width={8} height={8} fill={C.acc} />
      <text x={982} y={672} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="28" fill={C.fg}>
        Broader website scanning — the opportunity that surfaced.
      </text>
    </Shell>
  );
}

/* ================================================================
   CASE STUDY 03 — Universal Crawler
   ================================================================ */

export function U1WebsiteDiscovery() {
  const l1 = [
    { cy: 246, label: "Page 01" },
    { cy: 462, label: "Page 02" },
    { cy: 678, label: "Page 03" },
  ];
  const l2 = [
    { cy: 178, label: "Page 01.1" },
    { cy: 300, label: "Page 01.2" },
    { cy: 400, label: "Page 02.1" },
    { cy: 522, label: "Page 02.2" },
    { cy: 622, label: "Page 03.1" },
    { cy: 740, label: "Page 03.2" },
  ];
  return (
    <Shell fig="01" title="Website Discovery" id="u1">
      <Box x={96} y={420} w={162} h={84} lines={["Start", "URL"]} fontSize={21} />
      <rect x={96} y={420} width={8} height={8} fill={C.acc} />
      {l1.map((n) => (
        <g key={n.label}>
          <path d={`M258 462 H318 V${n.cy + 32} H372`} fill="none" stroke={RULE} strokeWidth="1.3" markerEnd="url(#arr-u1)" />
          <rect x={380} y={n.cy} width={172} height={64} fill="none" stroke={RULE} strokeWidth="1" />
          <text x={466} y={n.cy + 40} textAnchor="middle" fontFamily={SANS} fontSize="20" fontWeight="500" fill={C.fg}>
            {n.label}
          </text>
        </g>
      ))}
      {l2.map((n) => {
        const parent = n.label.startsWith("Page 01") ? 246 : n.label.startsWith("Page 02") ? 462 : 678;
        const last = n.label === "Page 03.2";
        return (
          <g key={n.label}>
            <path d={`M552 ${parent + 32} H612 V${n.cy + 26} H652`} fill="none" stroke={RULE} strokeWidth="1.2" markerEnd="url(#arr-u1)" />
            <rect
              x={660}
              y={n.cy}
              width={160}
              height={52}
              fill="none"
              stroke={RULE}
              strokeWidth="1"
              strokeDasharray={last ? "0" : undefined}
            />
            <text x={740} y={n.cy + 34} textAnchor="middle" fontFamily={SANS} fontSize="18" fill={C.div}>
              {n.label}
            </text>
          </g>
        );
      })}
      {/* interactive elements */}
      <path d="M820 326 H886" fill="none" stroke={C.div} strokeWidth="1" strokeDasharray="5 5" />
      <circle cx="916" cy="326" r="11" fill="none" stroke={C.acc} strokeWidth="1.6" />
      <path d="M820 548 H886" fill="none" stroke={C.div} strokeWidth="1" strokeDasharray="5 5" />
      <circle cx="916" cy="548" r="11" fill="none" stroke={C.acc} strokeWidth="1.6" />
      {/* legend */}
      <g fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        <rect x={1030} y={688} width={14} height={14} fill="none" stroke={RULE} strokeWidth="1" />
        <text x={1056} y={700}>DISCOVERED PAGE</text>
        <circle cx={1037} cy={732} r="8" fill="none" stroke={C.acc} strokeWidth="1.6" />
        <text x={1056} y={737}>INTERACTIVE ELEMENT</text>
      </g>
      <text x={96} y={740} fontFamily={SANS} fontSize="15" letterSpacing="2" fill={C.sec}>
        ONE ADDRESS BECOMES A TERRITORY OF PAGES &amp; STATES
      </text>
    </Shell>
  );
}

export function U2AutomationContext() {
  return (
    <Shell fig="02" title="The Existing Automation Context" id="u2">
      <text x={800} y={196} textAnchor="middle" fontFamily={SANS} fontSize="16" letterSpacing="3" fill={C.sec}>
        WHAT THE PLATFORM ALREADY HAD — RETAINED, NOT REBUILT
      </text>
      <Box x={620} y={230} w={360} h={92} lines={["Existing QA", "scanning platform"]} fontSize={24} />
      <line x1="800" y1="326" x2="800" y2="382" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-u2)" />
      <text x={832} y={364} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        RUNS ON
      </text>
      <g>
        <rect x={620} y={392} width={360} height={92} fill="none" stroke={C.acc} strokeWidth="1.6" />
        <rect x={620} y={392} width={8} height={8} fill={C.acc} />
        <text x={800} y={430} textAnchor="middle" fontFamily={SANS} fontSize="24" fontWeight="500" fill={C.fg}>
          Browser automation
        </text>
        <text x={800} y={462} textAnchor="middle" fontFamily={SANS} fontSize="24" fontWeight="500" fill={C.fg}>
          — Playwright
        </text>
        <text x={800} y={512} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.acc}>
          EXISTING TECHNICAL CONTEXT — NOT MY BUILD
        </text>
      </g>
      <line x1="800" y1="524" x2="800" y2="580" stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-u2)" />
      <text x={832} y={562} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        SCANS
      </text>
      <Box x={620} y={590} w={360} h={92} lines={["Website pages", "& interactions"]} fontSize={24} />
      <line x1="1080" y1="230" x2="1080" y2="682" stroke={FAINT} strokeWidth="1" />
      <text x={1120} y={430} fontFamily={SERIF} fontStyle="italic" fontSize="27" fill={C.sec}>
        The engine already existed.
      </text>
      <text x={1120} y={470} fontFamily={SERIF} fontStyle="italic" fontSize="27" fill={C.sec}>
        The question was how far
      </text>
      <text x={1120} y={510} fontFamily={SERIF} fontStyle="italic" fontSize="27" fill={C.sec}>
        it could travel.
      </text>
      <line x1="1120" y1="540" x2="1440" y2="540" stroke={C.acc} strokeWidth="1.2" />
    </Shell>
  );
}

export function U3Workflow() {
  const stages = [
    { x: 150, label: "Discover", sub: "Accessible pages & paths" },
    { x: 510, label: "Explore", sub: "Safe interactions & states" },
    { x: 870, label: "Scan", sub: "Existing QA platform" },
    { x: 1230, label: "Track Coverage", sub: "What was — & wasn't — seen", accent: true },
  ];
  return (
    <Shell fig="03" title="The Proposed Workflow" id="u3">
      <text x={800} y={240} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        From scanning a page to exploring an experience.
      </text>
      {stages.map((s, i) => (
        <g key={s.label}>
          <StepLabel x={s.x} y={360} n={`0${i + 1}`} />
          <Box x={s.x} y={392} w={270} h={118} lines={[s.label]} accent={s.accent} sub={s.sub} fontSize={25} />
          {i < 3 ? (
            <line x1={s.x + 282} y1={451} x2={s.x + 348} y2={451} stroke={C.div} strokeWidth="1.5" markerEnd="url(#arr-u3)" />
          ) : null}
        </g>
      ))}
      <text x={150} y={664} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.acc}>
        PROPOSED CONCEPT — NOT A BUILT PRODUCT
      </text>
      <text x={800} y={716} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="28" fill={C.sec}>
        Coverage becomes visible instead of assumed.
      </text>
    </Shell>
  );
}

export function U4Rulebook() {
  const rules = [
    { n: "01", name: "Sensitive information", sub: "Identify & mask credential inputs" },
    { n: "02", name: "Element identification", sub: "Classify buttons & interactive controls" },
    { n: "03", name: "Safe exploration", sub: "Conditions for opening or interacting" },
    { n: "04", name: "Blocked content", sub: "Pause when input or access is required" },
    { n: "05", name: "Navigation & UI states", sub: "Account for dynamic change" },
    { n: "06", name: "Duplicate exploration", sub: "Recognise what was visited before" },
    { n: "07", name: "Coverage tracking", sub: "Scanned · skipped · blocked · unexplored" },
    { n: "08", name: "User validation & input", sub: "Confirmation before sensitive actions" },
  ];
  const flow = ["Website discovery", "Interaction rules", "Safe exploration", "QA scanning", "Coverage tracking"];
  return (
    <Shell fig="04" title="The Mandatory Interaction Rulebook" id="u4">
      <text x={96} y={196} fontFamily={SERIF} fontSize="42" fill={C.fg}>
        The Interaction Rulebook
      </text>
      <text x={1504} y={196} textAnchor="end" fontFamily={SANS} fontSize="16" letterSpacing="3" fill={C.acc}>
        MANDATORY FOUNDATION — NOT OPTIONAL
      </text>
      <line x1="96" y1="224" x2="1504" y2="224" stroke={RULE} strokeWidth="1" />
      {rules.map((r, i) => {
        const col = i < 4 ? 0 : 1;
        const row = i < 4 ? i : i - 4;
        const x = col === 0 ? 96 : 844;
        const y = 268 + row * 88;
        return (
          <g key={r.n}>
            <text x={x} y={y} fontFamily={SERIF} fontStyle="italic" fontSize="27" fill={C.acc}>
              {r.n}
            </text>
            <text x={x + 66} y={y} fontFamily={SANS} fontSize="23" fontWeight="500" fill={C.fg}>
              {r.name}
            </text>
            <text x={x + 66} y={y + 30} fontFamily={SANS} fontSize="16" letterSpacing="1" fill={C.sec}>
              {r.sub.toUpperCase()}
            </text>
            <line x1={x} y1={y + 52} x2={x + 660} y2={y + 52} stroke={FAINT} strokeWidth="1" />
          </g>
        );
      })}
      <text x={96} y={652} fontFamily={SANS} fontSize="15" letterSpacing="3" fill={C.sec}>
        HOW THE RULES SIT INSIDE THE WORKFLOW
      </text>
      {flow.map((f, i) => {
        const x = 96 + i * 290;
        const accent = i === 1;
        return (
          <g key={f}>
            <rect x={x} y={676} width={252} height={62} fill="none" stroke={accent ? C.acc : RULE} strokeWidth={accent ? 1.6 : 1} />
            {accent ? <rect x={x} y={676} width={7} height={7} fill={C.acc} /> : null}
            <text x={x + 126} y={714} textAnchor="middle" fontFamily={SANS} fontSize="18" fontWeight="500" fill={C.fg}>
              {f}
            </text>
            {i < 4 ? (
              <line x1={x + 260} y1={707} x2={x + 282} y2={707} stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-u4)" />
            ) : null}
          </g>
        );
      })}
    </Shell>
  );
}

export function U5CoverageStates() {
  const tiles = [
    { label: "Scanned", sub: "Finished & recorded" },
    { label: "Skipped", sub: "Intentionally passed over" },
    { label: "Blocked", sub: "Needs access or input", accent: true },
    { label: "Unknown", sub: "Not yet reached" },
  ];
  return (
    <Shell fig="05" title="The Four Coverage States" id="u5">
      {tiles.map((t, i) => {
        const x = 96 + i * 347;
        return (
          <g key={t.label}>
            <rect
              x={x}
              y={292}
              width={320}
              height={240}
              fill="none"
              stroke={t.accent ? C.acc : i === 3 ? FAINT : RULE}
              strokeWidth={t.accent ? 1.6 : 1}
              strokeDasharray={i === 1 ? "8 6" : i === 3 ? "2 7" : undefined}
            />
            <text x={x + 40} y={330} fontFamily={SERIF} fontStyle="italic" fontSize="22" fill={C.sec}>
              {`0${i + 1}`}
            </text>
            {/* glyph */}
            {i === 0 ? (
              <g>
                <circle cx={x + 160} cy={408} r="26" fill="none" stroke={C.fg} strokeWidth="1.6" />
                <path d={`M${x + 148} 408 l8 9 l16 -18`} stroke={C.fg} strokeWidth="2" fill="none" />
              </g>
            ) : i === 1 ? (
              <g>
                <circle cx={x + 140} cy={408} r="5" fill={C.sec} />
                <path d={`M${x + 122} 424 Q${x + 160} 386 ${x + 198} 408`} fill="none" stroke={C.div} strokeWidth="1.6" markerEnd="url(#arr-u5)" />
              </g>
            ) : i === 2 ? (
              <rect x={x + 148} y={396} width={24} height={24} fill={C.acc} />
            ) : (
              <text x={x + 160} y={424} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="40" fill={C.sec}>
                ?
              </text>
            )}
            <text x={x + 160} y={494} textAnchor="middle" fontFamily={SANS} fontSize="23" fontWeight="500" fill={C.fg}>
              {t.label}
            </text>
            <text x={x + 160} y={524} textAnchor="middle" fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
              {t.sub.toUpperCase()}
            </text>
          </g>
        );
      })}
      <text x={800} y={700} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        Coverage is only honest when the gaps are visible.
      </text>
    </Shell>
  );
}

export function U6DeveloperHandoff() {
  const stages = [
    { t: ["Problem", "identification"] },
    { t: ["Technical", "exploration"] },
    { t: ["Feasibility", "discussion"] },
    { t: ["Interaction", "rulebook"], accent: true, meta: "KEY DELIVERABLE" },
    { t: ["Developer", "handoff"] },
    { t: ["Implementation"], fill: true, meta: "IN PROGRESS" },
  ];
  return (
    <Shell fig="06" title="From Exploration to Handoff" id="u6">
      <text x={800} y={240} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="32" fill={C.fg}>
        What I learned became what the team could build.
      </text>
      {stages.map((s, i) => {
        const x = 96 + i * 242;
        return (
          <g key={s.t[0]}>
            <StepLabel x={x} y={352} n={`0${i + 1}`} />
            <Box
              x={x}
              y={382}
              w={200}
              h={110}
              lines={s.t}
              accent={s.accent}
              fill={s.fill}
              fontSize={20}
            />
            {"meta" in s && s.meta ? (
              <text x={x + 100} y={528} textAnchor="middle" fontFamily={SANS} fontSize="13" letterSpacing="2" fill={s.fill ? C.acc : C.acc}>
                {s.meta}
              </text>
            ) : null}
            {i < 5 ? (
              <line x1={x + 208} y1={437} x2={x + 234} y2={437} stroke={C.div} strokeWidth="1.4" markerEnd="url(#arr-u6)" />
            ) : null}
          </g>
        );
      })}
      <text x={96} y={640} fontFamily={SANS} fontSize="14" letterSpacing="2" fill={C.sec}>
        MY ROLE ENDS AT HANDOFF — THE DEVELOPMENT TEAM CARRIES IMPLEMENTATION
      </text>
      <text x={800} y={716} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="28" fill={C.sec}>
        Design defined the behaviour; engineering builds it.
      </text>
    </Shell>
  );
}
