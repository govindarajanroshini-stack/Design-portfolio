import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { BEHANCE, EMAIL, LINKEDIN, MAILTO_FREELANCE, MAILTO_FULLTIME } from "../data/content";
import { Reveal } from "../components/ui";

export default function Contact() {
  return (
    <div className="container-ed">
      {/* ============================== HERO ============================== */}
      <section className="page-hero" aria-label="Contact introduction">
        <p className="meta" style={{ marginBottom: 28 }}>
          Contact — Correspondence
        </p>
        <h1 className="display-1" style={{ maxWidth: "13ch" }}>
          Let's make something <em className="it accent-text">meaningful.</em>
        </h1>
        <p className="prose-serif" style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
          I'm open to full-time opportunities across UX Research, Product Design and Behavioural
          Design, as well as selected freelance projects and collaborations. If you're building a
          digital product, improving an existing experience, or looking for a designer to join your
          team — I'd love to hear from you.
        </p>
      </section>

      {/* ========================== PATHWAYS ========================== */}
      <section className="pathway-grid" aria-label="Ways to work together" style={{ marginBottom: "var(--section-spacing)" }}>
        <Reveal className="pathway">
          <span className="pw-num">01 — Pathway</span>
          <p className="meta" style={{ margin: 0 }}>Full-time Opportunities</p>
          <h3>Looking to hire?</h3>
          <p>
            I'm interested in opportunities where I can contribute to thoughtful digital products
            and collaborate with multidisciplinary teams.
          </p>
          <a href={MAILTO_FULLTIME} className="btn btn-accent" style={{ alignSelf: "flex-start" }}>
            Discuss a Full-time Role <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="pathway" delay={120}>
          <span className="pw-num">02 — Pathway</span>
          <p className="meta" style={{ margin: 0 }}>Freelance &amp; Collaborations</p>
          <h3>Have a project in mind?</h3>
          <p>
            Available for selected projects involving UX/UI design, digital product interfaces,
            visual design and design support.
          </p>
          <a href={MAILTO_FREELANCE} className="btn" style={{ alignSelf: "flex-start" }}>
            Discuss a Freelance Project <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      {/* ========================== DETAILS ========================== */}
      <section style={{ paddingBottom: "clamp(80px, 10vw, 150px)" }} aria-label="Contact details">
        <Reveal>
          <div className="contact-rows">
            <a className="contact-row" href={`mailto:${EMAIL}`}>
              <span className="cr-label">Email</span>
              <span className="cr-value">{EMAIL}</span>
              <Mail size={18} aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
            </a>
            <a className="contact-row" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <span className="cr-label">LinkedIn</span>
              <span className="cr-value">Roshini Govindarajan</span>
              <ArrowUpRight size={18} aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
            </a>
            <a className="contact-row" href={BEHANCE} target="_blank" rel="noopener noreferrer">
              <span className="cr-label">Behance</span>
              <span className="cr-value">roshinigovinda</span>
              <ArrowUpRight size={18} aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
            </a>
            <div className="contact-row">
              <span className="cr-label">Location</span>
              <span className="cr-value">Chennai, India</span>
              <MapPin size={18} aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p
            className="meta"
            style={{
              marginTop: 40,
              textTransform: "none",
              letterSpacing: "0.04em",
              fontSize: "0.82rem",
              lineHeight: 1.9,
            }}
          >
            Correspondence is answered personally. Expect a reply within a few working days.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
