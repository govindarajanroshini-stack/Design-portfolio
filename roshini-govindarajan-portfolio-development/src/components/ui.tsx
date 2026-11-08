import { PropsWithChildren, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";

/* ------------------------------------------------------------------ */
/*  Scroll reveal wrapper                                              */
/* ------------------------------------------------------------------ */

interface RevealProps extends PropsWithChildren {
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "p";
}

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Section header                                                     */
/* ------------------------------------------------------------------ */

interface SectionHeadProps {
  label: string;
  right?: string;
  accent?: boolean;
}

export function SectionHead({ label, right, accent }: SectionHeadProps) {
  return (
    <Reveal>
      <div className="section-head">
        <span className={`meta${accent ? " meta-accent" : ""}`}>
          <span className="accent-sq" style={{ marginRight: 14 }} aria-hidden="true" />
          {label}
        </span>
        {right ? <span className="meta">{right}</span> : null}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Figure caption wrapper for diagrams                                */
/* ------------------------------------------------------------------ */

interface FigProps {
  num: string;
  title: string;
  children: ReactNode;
}

export function Fig({ num, title, children }: FigProps) {
  return (
    <Reveal as="figure" className="fig">
      <div className="fig-frame">{children}</div>
      <figcaption className="fig-caption">
        <span>
          Fig. {num} — {title}
        </span>
        <span>Conceptual diagram</span>
      </figcaption>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Next exploration footer block (case studies)                       */
/* ------------------------------------------------------------------ */

export function NextProject({
  project,
  label = "Next exploration",
}: {
  project: Project;
  label?: string;
}) {
  return (
    <div className="container-ed" style={{ paddingBlock: "clamp(48px, 8vw, 110px)" }}>
      <Reveal>
        <p className="meta meta-accent" style={{ marginBottom: 20 }}>
          <span className="accent-sq" style={{ marginRight: 14 }} aria-hidden="true" />
          {label}
        </p>
        <Link to={project.path ?? "/work"} style={{ display: "block" }} className="next-proj">
          <span className="display-2" style={{ display: "block" }}>
            <span className="index-fig" style={{ marginRight: 24 }}>
              {project.num}
            </span>
            {project.title}
            <ArrowUpRight
              aria-hidden="true"
              style={{ display: "inline", marginLeft: 18, verticalAlign: "baseline" }}
              size={36}
            />
          </span>
        </Link>
        <p className="meta" style={{ marginTop: 20 }}>
          {project.stageNum} — {project.stage} · {project.category}
        </p>
      </Reveal>
    </div>
  );
}

export function BackToWork({
  label = "End of the journey",
  note = "01 Feature thinking · 02 Experience thinking · 03 System thinking",
}: {
  label?: string;
  note?: string;
}) {
  return (
    <div className="container-ed" style={{ paddingBlock: "clamp(48px, 8vw, 110px)" }}>
      <Reveal>
        <p className="meta meta-accent" style={{ marginBottom: 20 }}>
          <span className="accent-sq" style={{ marginRight: 14 }} aria-hidden="true" />
          {label}
        </p>
        <Link to="/work" style={{ display: "block" }} className="next-proj">
          <span className="display-2" style={{ display: "block" }}>
            Back to Work
            <ArrowUpRight
              aria-hidden="true"
              style={{ display: "inline", marginLeft: 18, verticalAlign: "baseline" }}
              size={36}
            />
          </span>
        </Link>
        <p className="meta" style={{ marginTop: 20 }}>
          {note}
        </p>
      </Reveal>
    </div>
  );
}
