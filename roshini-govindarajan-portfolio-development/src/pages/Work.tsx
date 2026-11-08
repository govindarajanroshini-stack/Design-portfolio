import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BEHANCE, PROJECTS, type Project } from "../data/content";
import { Reveal, SectionHead } from "../components/ui";
import { Plate } from "../components/case";

const JOURNEY = [
  { num: "01", title: "Feature Thinking", sub: "Making an individual product interaction easier." },
  { num: "02", title: "Experience Thinking", sub: "Rethinking a larger product experience — and judging its output." },
  { num: "03", title: "System Thinking", sub: "Exploring how an automated system should behave." },
];

/* ---------- project preview row ---------- */

function ProjectPreview({ p, i }: { p: Project; i: number }) {
  const body = (
    <>
      <div className="project-media">
        <span className="media-tag meta">{p.status}</span>
        {p.image ? (
          <img src={p.image} alt={p.imageAlt} loading={i > 1 ? "lazy" : "eager"} width="1536" height="1024" />
        ) : (
          <Plate index={p.num} title={p.title} ratio="3 / 2" kind="Original visuals — write-up in preparation" />
        )}
      </div>
      <div className="project-info">
        <span className="meta meta-accent" style={{ display: "block", marginBottom: 18 }}>
          {p.stageNum} — {p.stage}
        </span>
        <span className="project-num" aria-hidden="true" style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}>
          {p.num}
        </span>
        <h3 className="project-title" style={{ fontSize: "clamp(1.7rem, 2.7vw, 2.6rem)" }}>
          {p.title}
        </h3>
        <p className="project-desc">{p.description}</p>
        <div className="project-meta-grid">
          <div>
            <span className="pm-label">Focus</span>
            <span className="pm-value">{p.category}</span>
          </div>
          <div>
            <span className="pm-label">Role</span>
            <span className="pm-value">{p.role}</span>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <span className="pm-label">Tools &amp; Context</span>
            <span className="pm-value">{p.tools}</span>
          </div>
        </div>
        {p.path ? (
          <span className="tlink">
            Read the Case Study <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        ) : (
          <span className="meta meta-accent">Case study — coming soon</span>
        )}
      </div>
    </>
  );

  return (
    <Reveal delay={40}>
      {p.path ? (
        <Link
          to={p.path}
          className="project-row"
          style={{ display: "grid" }}
          aria-label={`Open case study — ${p.title}`}
        >
          {body}
        </Link>
      ) : (
        <div className="project-row" aria-label={`${p.title} — case study in preparation`}>
          {body}
        </div>
      )}
    </Reveal>
  );
}

export default function Work() {
  return (
    <div className="container-ed">
      {/* Hero */}
      <section className="page-hero" aria-label="Work index" style={{ paddingBottom: 0 }}>
        <p className="meta" style={{ marginBottom: 28 }}>
          Selected Work — One Collection
        </p>
        <h1 className="display-1" style={{ maxWidth: "13ch" }}>
          Six projects. <em className="it accent-text">One</em> designer.
        </h1>
        <p className="prose-serif" style={{ marginTop: "clamp(28px, 4vw, 44px)" }}>
          A single curated collection — three enterprise studies that follow my thinking from a
          feature, to an experience, to a system; and three independent explorations in mobile
          UI/UX and visual design. The context of each project lives inside its own story, not in
          separate shelves.
        </p>
      </section>

      {/* The progression motif */}
      <Reveal>
        <div className="journey-strip" aria-label="The three levels of design thinking">
          {JOURNEY.map((j) => (
            <div key={j.num} className="js-item">
              <span className="js-num">Phase {j.num}</span>
              <span className="js-title">{j.title}</span>
              <span className="js-sub">{j.sub}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Unified project collection */}
      <section aria-label="All projects" style={{ paddingBottom: "var(--section-spacing)" }}>
        <SectionHead label="The Collection" right="01 — 06" accent />
        <div>
          {PROJECTS.map((p, i) => (
            <ProjectPreview key={p.slug} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* Archive note */}
      <section style={{ paddingBottom: "clamp(80px, 10vw, 150px)" }} aria-label="Visual archive">
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "center",
              borderTop: "1px solid var(--rule-strong)",
              paddingTop: 40,
            }}
          >
            <p
              className="meta"
              style={{
                maxWidth: "52ch",
                textTransform: "none",
                letterSpacing: "0.04em",
                fontSize: "0.85rem",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Additional visual work — branding, illustration and communication pieces — lives in
              the visual archive on Behance. Enterprise work is anonymised and shown conceptually
              by design.
            </p>
            <a href={BEHANCE} target="_blank" rel="noopener noreferrer" className="tlink">
              Visual archive on Behance <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
