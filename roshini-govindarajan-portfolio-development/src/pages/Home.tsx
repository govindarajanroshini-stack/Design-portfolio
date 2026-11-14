import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal, SectionHead } from "../components/ui";

export default function Home() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="container-ed" style={{ paddingTop: "clamp(140px, 19vh, 230px)" }} aria-label="Introduction">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--rule)",
            paddingBottom: 18,
            marginBottom: "clamp(36px, 5vw, 72px)",
          }}
        >
          <span className="meta">Portfolio — Vol. 01</span>
          <span className="meta">PRODUCT DESIGNER / ENTERPRISE UX / ACCESSIBILITY</span>
          <span className="meta">Chennai, India</span>
        </div>

        <h1 className="display-1">
            <span className="hero-line">
            <span>Turning complexity into clarity.</span>
          </span>
        </h1>

        <div className="fade-up hero-lower-grid" style={{ animationDelay: "0.5s" }}>
          <div>
            <p className="meta meta-light" style={{ marginBottom: 26, lineHeight: 2.1 }}>
              Open to Product Designer and UX/UI Designer opportunities.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span className="accent-sq" aria-hidden="true" />
              <span className="meta" style={{ color: "var(--foreground)" }}>
                Product design · Enterprise UX · Accessibility
              </span>
            </div>
          </div>
          <div>
            <p className="prose-serif" style={{ margin: 0 }}>
              I'm Roshini, a designer working across enterprise products, interface quality and
              visual communication. I enjoy bringing structure to complex workflows, making
              information easier to navigate and helping teams create more consistent digital
              experiences.
            </p>
            <div
              style={{
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <Link to="/work" className="btn btn-accent">
                Explore selected work <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/resume" className="tlink">
                View my resume <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= DISCIPLINE TRIAD ========================= */}
      <section className="container-ed section" aria-label="Disciplines">
        <SectionHead label="Practice" right="Three disciplines, one lens" />
        <div className="triad" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
          {[
            {
              num: "01",
              title: "UX Research",
              body: "Understanding people before designing experiences — observation, evaluation and structured problem identification.",
            },
            {
              num: "02",
              title: "Product Design",
              body: "Translating insights into considered product experiences — from interaction patterns to systems thinking.",
            },
            {
              num: "03",
              title: "Behavioural Design",
              body: "Designing with human behaviour in mind — decision-making, cognitive patterns and behaviour-informed experiences.",
            },
          ].map((d, i) => (
            <Reveal key={d.num} delay={i * 120} className="triad-item">
              <span className="triad-num">{d.num}</span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================== SELECTED WORK ========================== */}
      <section className="container-ed section" aria-label="Selected work" style={{ paddingTop: 20 }}>
        <SectionHead label="Selected work" right="01 — 03" accent />
        <p
          className="serif-quote"
          style={{ margin: "clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)", maxWidth: "22ch" }}
        >
          A selection of enterprise product work and digital experiences that reflect how I approach problems, evaluate interfaces and turn ideas into clear design solutions.
        </p>

        <div>
          {PROJECTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={40}>
              <Link
                to={p.path ?? "/work"}
                className="project-row"
                style={{ display: "grid" }}
                aria-label={`View case study — ${p.title}`}
              >
                <div className="project-media">
                  <span className="media-tag meta">{p.status ?? p.discipline}</span>
                  <img src={p.image} alt={p.imageAlt} loading={i > 1 ? "lazy" : "eager"} width="1200" height="800" />
                </div>
                <div className="project-info">
                  <span className="meta meta-accent" style={{ display: "block", marginBottom: 16 }}>
                    {p.stageNum} — {p.stage}
                  </span>
                  <span className="project-num" aria-hidden="true">
                    {p.num}
                  </span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-meta-grid">
                    <div>
                      <span className="pm-label">Focus</span>
                      <span className="pm-value">{p.category}</span>
                    </div>
                    <div>
                      <span className="pm-label">Contribution</span>
                      <span className="pm-value">{p.role}</span>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <span className="pm-label">Tools &amp; Context</span>
                      <span className="pm-value">{p.tools}</span>
                    </div>
                  </div>
                  <span className="tlink">
                    Read the Case Study <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================= PHILOSOPHY STRIP ========================= */}
      <section className="container-ed section" aria-label="Design philosophy">
        <hr className="rule-strong" />
        <Reveal>
          <div style={{ paddingBlock: "clamp(56px, 8vw, 110px)", textAlign: "center" }}>
            <p className="meta meta-accent" style={{ marginBottom: 32 }}>
              Design Philosophy
            </p>
            <p className="serif-quote" style={{ maxWidth: "26ch", margin: "0 auto 40px" }}>
              Understanding people before designing experiences.
            </p>
            <Link to="/about" className="tlink">
              More about my approach <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <hr className="rule-strong" />
      </section>

      {/* ============================ CONTACT CTA ============================ */}
      <section className="container-ed section" aria-label="Contact" style={{ paddingBottom: "clamp(80px, 10vw, 150px)" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="meta" style={{ marginBottom: 24 }}>
                Next
              </p>
              <h2 className="display-2">
                Let's make something <em className="it accent-text">meaningful.</em>
              </h2>
            </div>
            <Link to="/contact" className="btn">
              Let's Connect <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
