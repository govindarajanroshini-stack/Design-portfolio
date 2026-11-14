import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import { CAPABILITIES, EXPERIENCE, RESUME_PDF, SUPPORTING } from "../data/content";
import { Reveal, SectionHead } from "../components/ui";

export default function About() {
  return (
    <div className="container-ed">
      {/* ============================ INTRO ============================ */}
      <section className="page-hero" aria-label="Introduction">
        <p className="meta" style={{ marginBottom: 28 }}>
          About — The Person Behind the Work
        </p>
        <div
          className="about-hero-grid"
        >
          <div>
            <h1 className="display-2">A designer with an engineering foundation and an eye for clarity.</h1>
            <div style={{ marginTop: "clamp(32px, 4vw, 52px)", display: "grid", gap: 26 }}>
              <p className="prose-serif" style={{ margin: 0 }}>
                I'm Roshini Govindarajan, a designer based in Chennai, India. My experience spans
                enterprise technology, product interfaces and visual communication. I enjoy
                understanding how digital products work, finding opportunities to make experiences
                clearer and collaborating with teams to improve the quality and consistency of
                interfaces.
              </p>
              <p className="prose-ed" style={{ margin: 0 }}>
                I began my professional journey in an engineering environment, where I developed an
                appreciation for structured problem-solving and working with technical teams. Over
                time, I moved closer to design through visual communication, interface work and
                product-focused projects.
              </p>
              <p className="prose-ed" style={{ margin: 0 }}>
                Today, my work includes contributing to enterprise product initiatives, evaluating
                interface functionality, documenting UI patterns and exploring ways to make
                accessibility and design-system checks more understandable.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                marginTop: 44,
                alignItems: "center",
              }}
            >
              <Link to="/work" className="btn">
                See Selected Work <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="tlink">
                Get in Touch <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <Reveal delay={150}>
            <figure style={{ margin: 0 }}>
              <div className="img-frame">
                <img
                  src="/images/Potrait for website.png"
                  alt="Editorial ink illustration portrait representing Roshini Govindarajan"
                  width="800"
                  height="1000"
                  style={{ aspectRatio: "4/5", objectFit: "cover" }}
                />
              </div>
              <figcaption
                className="meta"
                style={{
                  marginTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span>Roshini Govindarajan</span>
                <span>Est. Chennai</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="What I bring to a team">
        <SectionHead label="What I bring to a team" />
        <div className="learning-grid" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
          {[
            "A structured approach to understanding complex interfaces.",
            "An appreciation for accessibility and consistent design systems.",
            "The ability to communicate visually and document design decisions.",
            "Experience collaborating with product and engineering stakeholders.",
            "A willingness to learn, test assumptions and improve through feedback.",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="learning-item">
                <span className="li-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" aria-label="Design interests">
        <SectionHead label="Design interests" />
        <ul className="outline-list" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
          {[
            "Enterprise product experiences",
            "Accessibility and inclusive design",
            "Design systems and interface quality",
            "Behavioral thinking and decision-making",
            "Information hierarchy and interaction clarity",
          ].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section" aria-label="Outside the interface">
        <SectionHead label="Outside the interface" />
        <p className="prose-serif" style={{ marginTop: "clamp(40px, 5vw, 72px)", maxWidth: "34ch" }}>
          I'm interested in how people interpret information, make decisions and build confidence
          when using digital products. These interests continue to shape the questions I bring into
          my design work.
        </p>
      </section>

      {/* ========================= PHILOSOPHY ========================= */}
      <section className="section" aria-label="Design philosophy" style={{ paddingBottom: 0 }}>
        <hr className="rule-strong" />
        <Reveal>
          <div style={{ paddingBlock: "clamp(56px, 8vw, 110px)", maxWidth: 900 }}>
            <p className="meta meta-accent" style={{ marginBottom: 32 }}>
              Design Philosophy
            </p>
            <p className="serif-quote" style={{ margin: 0 }}>
              Understanding people before designing experiences.
            </p>
            <p className="prose-ed" style={{ marginTop: 36 }}>
              I believe thoughtful design begins with understanding the people behind every
              interaction. By combining observation, structured thinking and visual communication,
              I aim to create digital experiences that feel intuitive, useful and accessible.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ========================= EXPERIENCE ========================= */}
      <section className="section" aria-label="Professional experience" style={{ paddingTop: 40 }}>
        <SectionHead label="Experience" right="2021 — Present" />
        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.org} delay={i * 40}>
              <div className="timeline-row">
                <div className="timeline-date">
                  {e.date}
                  <span className="meta" style={{ display: "block", marginTop: 10, letterSpacing: "0.2em", fontSize: "0.62rem" }}>
                    {String(i + 1).padStart(2, "0")} / {String(EXPERIENCE.length).padStart(2, "0")}
                  </span>
                </div>
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
        </div>
      </section>

      {/* ========================= EDUCATION ========================= */}
      <section aria-label="Education" style={{ paddingBottom: "var(--section-spacing)" }}>
        <SectionHead label="Education" />
        <Reveal>
          <div className="timeline-row" style={{ borderBottom: "1px solid var(--rule)" }}>
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

      {/* ========================= CAPABILITIES ========================= */}
      <section aria-label="Capabilities" style={{ paddingBottom: "var(--section-spacing)" }}>
        <SectionHead label="Capabilities" right="Demonstrated & explored" />
        <div className="triad" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.num} delay={i * 100} className="triad-item">
              <span className="triad-num">{cap.num}</span>
              <h3 style={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "clamp(1.25rem, 1.9vw, 1.7rem)" }}>
                {cap.title}
              </h3>
              <ul className="cap-list" style={{ marginTop: 20 }}>
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

        <Reveal delay={120}>
          <div style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
            <p className="meta" style={{ marginBottom: 22 }}>
              Supporting Capabilities &amp; Tools
            </p>
            <div className="tag-row">
              {SUPPORTING.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <p className="meta" style={{ marginTop: 26, textTransform: "none", letterSpacing: "0.04em", fontSize: "0.8rem", lineHeight: 1.9, maxWidth: "64ch" }}>
              The primary groups reflect work demonstrated across consultancy, agency, internship and
              collaborative settings; supporting capabilities range from professional practice to
              active areas of exploration.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ========================= RESUME ========================= */}
      <section style={{ paddingBottom: "clamp(80px, 10vw, 150px)" }} aria-label="Resume">
        <Reveal>
          <div
            style={{
              border: "1px solid var(--rule-strong)",
              padding: "clamp(28px, 4vw, 56px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="meta meta-accent" style={{ marginBottom: 14 }}>
                Resume
              </p>
              <h3 className="display-4" style={{ maxWidth: "26ch" }}>
                The full picture, on one page.
              </h3>
              <p className="meta" style={{ marginTop: 16, textTransform: "none", letterSpacing: "0.04em", fontSize: "0.82rem", lineHeight: 1.8 }}>
                Browse the on-screen version, or download the one-page PDF.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/resume" className="btn">
                View Resume <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <a href={RESUME_PDF} download="Roshini-Govindarajan-Resume.pdf" type="application/pdf" className="btn btn-accent">
                Download Resume <Download size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
