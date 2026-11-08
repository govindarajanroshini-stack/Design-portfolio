import { ArrowUpRight, Download, Mail } from "lucide-react";
import {
  CAPABILITIES,
  EMAIL,
  EXPERIENCE,
  RESUME_PDF,
  SUPPORTING,
} from "../data/content";
import { Reveal, SectionHead } from "../components/ui";

/*
 * On-screen resume built from verified professional history.
 * "Download Resume" buttons point to /documents/roshini-govindarajan-resume.pdf —
 * drop the PDF into public/documents/ and they work immediately.
 */
export default function Resume() {
  return (
    <div className="container-ed">
      <section className="page-hero" aria-label="Resume">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <div>
            <p className="meta" style={{ marginBottom: 28 }}>
              Resume — Curriculum Vitae
            </p>
            <h1 className="display-2">
              Roshini <em className="it">Govindarajan</em>
            </h1>
            <p className="meta meta-light" style={{ marginTop: 22, lineHeight: 2 }}>
              UX Researcher · Product Designer · Behavioural Designer
            </p>
          </div>
          <a href={RESUME_PDF} download="Roshini-Govindarajan-Resume.pdf" type="application/pdf" className="btn btn-accent">
            Download Resume <Download size={14} aria-hidden="true" />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            borderTop: "1px solid var(--rule-strong)",
            borderBottom: "1px solid var(--rule-strong)",
            paddingBlock: 26,
            marginTop: "clamp(32px, 4vw, 56px)",
          }}
        >
          <div>
            <span className="meta" style={{ display: "block", marginBottom: 8 }}>Base</span>
            <span style={{ color: "var(--divider)", fontSize: "0.92rem" }}>Chennai, India</span>
          </div>
          <div>
            <span className="meta" style={{ display: "block", marginBottom: 8 }}>Focus</span>
            <span style={{ color: "var(--divider)", fontSize: "0.92rem" }}>
              Research-driven product experiences
            </span>
          </div>
          <div>
            <span className="meta" style={{ display: "block", marginBottom: 8 }}>Contact</span>
            <a href={`mailto:${EMAIL}`} className="tlink" style={{ fontSize: "0.68rem" }}>
              {EMAIL} <Mail size={12} aria-hidden="true" />
            </a>
          </div>
          <div>
            <span className="meta" style={{ display: "block", marginBottom: 8 }}>Status</span>
            <span className="meta meta-accent">Open to opportunities</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section aria-label="Experience" style={{ paddingBottom: "var(--section-spacing)" }}>
        <SectionHead label="Professional Experience" right="2021 — Present" />
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.org} delay={i * 30}>
            <div className="timeline-row">
              <div className="timeline-date">{e.date}</div>
              <div>
                <h3 className="timeline-role">{e.role}</h3>
                <span className="timeline-org">{e.org}</span>
                <ul className="timeline-list">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Education */}
      <section aria-label="Education" style={{ paddingBottom: "var(--section-spacing)" }}>
        <SectionHead label="Education" />
        <Reveal>
          <div className="timeline-row">
            <div className="timeline-date">2017 — 2021</div>
            <div>
              <h3 className="timeline-role">Bachelor of Engineering</h3>
              <span className="timeline-org">Electronics &amp; Communication Engineering</span>
              <p className="prose-ed" style={{ margin: 0, fontSize: "0.95rem" }}>
                St. Joseph's College of Engineering
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Capabilities summary */}
      <section aria-label="Capabilities summary" style={{ paddingBottom: "clamp(80px, 10vw, 150px)" }}>
        <SectionHead label="Capabilities" />
        <div className="triad" style={{ marginTop: "clamp(36px, 5vw, 64px)" }}>
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.num} delay={i * 80} className="triad-item">
              <span className="triad-num">{cap.num}</span>
              <h3 style={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "1.15rem" }}>
                {cap.title}
              </h3>
              <ul className="cap-list" style={{ marginTop: 16 }}>
                {cap.items.map((item) => (
                  <li key={item}>
                    <span className="cap-tick" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div style={{ marginTop: 48 }}>
            <p className="meta" style={{ marginBottom: 18 }}>
              Tools &amp; Supporting Skills
            </p>
            <div className="tag-row">
              {SUPPORTING.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <p
              className="meta"
              style={{
                marginTop: 32,
                textTransform: "none",
                letterSpacing: "0.04em",
                fontSize: "0.8rem",
                lineHeight: 1.9,
                maxWidth: "66ch",
              }}
            >
              Prefer the formatted version?{" "}
              <a
                href={RESUME_PDF}
                download="Roshini-Govindarajan-Resume.pdf"
                type="application/pdf"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 4 }}
              >
                Download the one-page PDF
              </a>
              .
            </p>
          </div>
        </Reveal>
      </section>

      <div style={{ paddingBottom: "clamp(48px, 6vw, 90px)" }}>
        <Reveal>
          <a
            href={`mailto:${EMAIL}?subject=Full-time%20Design%20Opportunity`}
            className="tlink"
            aria-label="Discuss a role with Roshini"
          >
            Discuss a role <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </div>
  );
}
