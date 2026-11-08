/*
 * Shared scaffolding for the three case-study pages.
 * Same typography, spacing, colour, dividers — varied compositions per story.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./ui";
import type { Project } from "../data/content";

/* ------------------------- scroll-spy hook ------------------------- */

export function useChapterSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const ref = useRef(true);

  useEffect(() => {
    ref.current = true;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && ref.current) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      ref.current = false;
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return { active, jump };
}

/* --------------------------- case hero ---------------------------- */

interface CaseHeroProps {
  project: Project;
  focus: string;
  context: string;
  contribution: string;
  status: string;
  note?: string;
  /** Optional custom cover (e.g. a labelled placeholder plate). */
  cover?: ReactNode;
}

export function CaseHero({ project, focus, context, contribution, status, note, cover }: CaseHeroProps) {
  return (
    <header className="container-ed page-hero">
      <p className="meta" style={{ marginBottom: 28 }}>
        <Link to="/work" style={{ display: "inline-flex", alignItems: "center", gap: 8 }} className="meta meta-accent">
          <ArrowLeft size={13} aria-hidden="true" /> All Work
        </Link>
      </p>
      <p className="meta" style={{ marginBottom: 26 }}>
        Exploration {project.num}
        <span className="dot-sep">·</span>
        <span className="meta-accent">{project.stage}</span>
      </p>
      <h1 className="display-2" style={{ maxWidth: "17ch" }}>
        {project.title}
      </h1>

      <div className="case-hero-meta" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
        <div>
          <span className="chm-label">Focus</span>
          <span className="chm-value">{focus}</span>
        </div>
        <div>
          <span className="chm-label">Context</span>
          <span className="chm-value">{context}</span>
        </div>
        <div>
          <span className="chm-label">My Contribution</span>
          <span className="chm-value">{contribution}</span>
        </div>
        <div>
          <span className="chm-label">Status</span>
          <span className="chm-value">{status}</span>
        </div>
      </div>

      <Reveal>
        {cover ?? (
          <>
            <div className="img-frame" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1536"
                height="1024"
                style={{ aspectRatio: "16/10", objectFit: "cover", width: "100%" }}
              />
            </div>
            <p className="meta" style={{ marginTop: 14, display: "flex", justifyContent: "space-between", gap: 12 }}>
              <span>Editorial artwork — not a product screenshot.</span>
              {note ? <span>{note}</span> : <span>Conceptual</span>}
            </p>
          </>
        )}
      </Reveal>
    </header>
  );
}

/* -------- Clearly-labelled placeholder plate (original asset pending) -------- */

interface PlateProps {
  index: string;
  title: string;
  kind?: string;
  ratio?: string;
  hint?: string;
  caption?: string;
}

export function Plate({
  index,
  title,
  kind = "Original visual — asset pending",
  ratio = "16 / 10",
  hint,
  caption,
}: PlateProps) {
  return (
    <figure className="fig" style={{ marginBlock: 0 }}>
      <div className="shot-plate" style={{ aspectRatio: ratio }} role="img" aria-label={`${title} — ${kind}`}>
        <div className="sp-strip sp-top">
          <span>Plate {index}</span>
          <span>{ratio.replace(" ", "")}</span>
        </div>
        <div className="sp-center">
          <span className="sp-title">{title}</span>
        </div>
        <div className="sp-strip sp-bottom">
          <span>{kind.toUpperCase()}</span>
          {hint ? <span>{hint}</span> : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="fig-caption">
          <span>{caption}</span>
          <span>Labelled placeholder</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------- contents rail -------------------------- */

export interface Chapter {
  id: string;
  num: string;
  label: string;
}

export function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const { active, jump } = useChapterSpy(chapters.map((c) => c.id));
  return (
    <nav className="chapter-nav" aria-label="Case study sections">
      <p className="meta" style={{ marginBottom: 14 }}>
        Contents
      </p>
      <ol>
        {chapters.map((c) => (
          <li key={c.id}>
            <button
              className={active === c.id ? "is-active" : ""}
              onClick={() => jump(c.id)}
              aria-current={active === c.id ? "true" : undefined}
            >
              <span className="cn-num">{c.num}</span>
              {c.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------- story sections ------------------------- */

interface StoryProps {
  id: string;
  num: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  last?: boolean;
}

export function Story({ id, num, kicker, title, children, last }: StoryProps) {
  return (
    <section className="chapter" id={id} style={last ? { borderBottom: "none" } : undefined} aria-label={`${num} — ${kicker}`}>
      <Reveal>
        <div className="chapter-kicker">
          <span className="ck-num">{num}</span>
          <span className="meta meta-accent">{kicker}</span>
        </div>
        <h3>{title}</h3>
      </Reveal>
      {children}
    </section>
  );
}

export function Paras({ children, serif }: { children: ReactNode; serif?: boolean }) {
  return (
    <Reveal>
      <div className="body-grid">
        {serif ? <p className="lead-serif">{children}</p> : <p>{children}</p>}
      </div>
    </Reveal>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="lead-serif">{children}</p>;
}

export function Insight({ children }: { children: ReactNode }) {
  return (
    <div className="insight-block">
      <span className="ib-label">Insight</span>
      <p>{children}</p>
    </div>
  );
}

/* Split layout: text column beside a figure — varies the rhythm per story */
export function Split({ children, figure, flip }: { children: ReactNode; figure: ReactNode; flip?: boolean }) {
  return (
    <div className="story-split" style={flip ? { direction: "rtl" } : undefined}>
      <Reveal>
        <div className="body-grid" style={{ direction: "ltr" }}>
          {children}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div style={{ direction: "ltr" }}>{figure}</div>
      </Reveal>
    </div>
  );
}

/* Numbered decision / definition rows */
export function DecisionRow({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="decision-row">
        <div>
          <span className="dr-num">{num}</span>
          <h4 className="dr-title">{title}</h4>
        </div>
        <div className="body-grid">{children}</div>
      </div>
    </Reveal>
  );
}
