import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { BEHANCE, EMAIL, EXPERIENCE, LINKEDIN } from "../data/content";

/* ------------------------------------------------------------------ */
/*  Scroll progress                                                    */
/* ------------------------------------------------------------------ */

export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={ref} className="progress-bar" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

const NAV = [
  { to: "/work", label: "Work", idx: "01" },
  { to: "/about", label: "About", idx: "02" },
  { to: "/contact", label: "Contact", idx: "03" },
  { to: "/resume", label: "Resume", idx: "04" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Escape key + scroll lock + focus return */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container-ed header-inner">
          <Link to="/" className="brand" aria-label="Roshini Govindarajan — Home">
            <span className="brand-dot" aria-hidden="true" />
            Roshini Govindarajan
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav-link"
                aria-current={location.pathname.startsWith(item.to) ? "page" : undefined}
              >
                <span className="nav-idx" aria-hidden="true">
                  {item.idx}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            ref={menuBtnRef}
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <NavLink to="/" end tabIndex={open ? 0 : -1}>
            <span className="nav-idx">00</span> Home
          </NavLink>
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} tabIndex={open ? 0 : -1}>
              <span className="nav-idx">{item.idx}</span> {item.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span className="meta">Chennai, India</span>
          <span className="meta meta-accent">Open to opportunities</span>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container-ed">
        <div style={{ paddingTop: "clamp(56px, 8vw, 110px)" }}>
          <p className="meta" style={{ marginBottom: 28 }}>
            Chennai, India<span className="dot-sep">·</span>Portfolio
          </p>
          <h2 className="footer-giant">
            Roshini
            <br />
            <span className="accent-word">Govindarajan</span>
          </h2>
        </div>

        <div className="footer-cols">
          <div>
            <p className="meta meta-light" style={{ margin: 0, lineHeight: 2 }}>
              UX Researcher
              <span className="dot-sep">·</span>
              Product Designer
              <br />
              Behavioural Designer
            </p>
            <p
              className="meta"
              style={{ marginTop: 24, maxWidth: "32ch", textTransform: "none", letterSpacing: "0.03em", fontSize: "0.82rem", lineHeight: 1.8 }}
            >
              Exploring the intersection of human behaviour, user research and digital product
              experiences.
            </p>
          </div>
          <div>
            <p className="meta" style={{ marginBottom: 18 }}>Index</p>
            <ul>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </div>
          <div>
            <p className="meta" style={{ marginBottom: 18 }}>Connect</p>
            <ul>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  Email <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={BEHANCE} target="_blank" rel="noopener noreferrer">
                  Behance <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="meta" style={{ marginBottom: 18 }}>Currently</p>
            <ul>
              <li className="meta" style={{ fontSize: "0.82rem", textTransform: "none", letterSpacing: "0.04em", color: "var(--secondary-text)" }}>
                {EXPERIENCE[0].role} — {EXPERIENCE[0].org}
              </li>
              <li>
                <span style={{ color: "var(--divider)", fontSize: "0.82rem" }}>
                  Open to full-time roles &amp; selected freelance
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span className="meta">© {year} Roshini Govindarajan</span>
          <span className="meta">Designed &amp; built with editorial intent</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Back to top                                                        */
/* ------------------------------------------------------------------ */

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <button
      className={`back-top${visible ? " is-visible" : ""}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
