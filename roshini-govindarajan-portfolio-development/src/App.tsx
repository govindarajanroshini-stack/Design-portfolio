import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BackToTop, Footer, Header, ProgressBar } from "./components/layout";
import { PROJECTS } from "./data/content";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import CaseFormula from "./pages/CaseFormula";
import CaseUnifiedQA from "./pages/CaseUnifiedQA";
import CaseCrawler from "./pages/CaseCrawler";
import CaseBikessy from "./pages/CaseBikessy";
import CaseInkTales from "./pages/CaseInkTales";
import CaseBrandBeyond from "./pages/CaseBrandBeyond";

const TITLES: Record<string, string> = {
  "/": "Roshini Govindarajan — UX Researcher · Product Designer · Behavioural Designer",
  "/work": "Selected Work — Roshini Govindarajan",
  "/about": "About — Roshini Govindarajan",
  "/contact": "Contact — Roshini Govindarajan",
  "/resume": "Resume — Roshini Govindarajan",
  "/case-studies/formula-builder": "Making Custom Formula Creation More Intuitive — Case Study — Roshini Govindarajan",
  "/case-studies/unified-qa": "Bringing Accessibility and Design System QA Together — Case Study — Roshini Govindarajan",
  "/case-studies/universal-crawler": "Beyond a Single URL: Exploring a Universal Crawler — Case Study — Roshini Govindarajan",
  "/work/bikessy": "Bikessy — Bringing the World of Vintage Motorcycles Online — Roshini Govindarajan",
  "/work/inktales": "InkTales — A Comic Rental App Experience — Roshini Govindarajan",
  "/work/brand-and-beyond": "Brand & Beyond — Brand Communication Through Design, Photography & Video — Roshini Govindarajan",
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    let title = TITLES[pathname];
    if (!title) {
      const match = pathname.match(/^\/case-studies\/(.+)$/);
      const project = match ? PROJECTS.find((p) => p.slug === match[1]) : undefined;
      title = project ? `${project.title} — Roshini Govindarajan` : TITLES["/"];
    }
    document.title = title;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <ProgressBar />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-studies/formula-builder" element={<CaseFormula />} />
          <Route path="/case-studies/unified-qa" element={<CaseUnifiedQA />} />
          <Route path="/case-studies/universal-crawler" element={<CaseCrawler />} />
          <Route path="/work/bikessy" element={<CaseBikessy />} />
          <Route path="/work/inktales" element={<CaseInkTales />} />
          <Route path="/work/brand-and-beyond" element={<CaseBrandBeyond />} />
          {/* Legacy slugs from the previous work structure */}
          <Route path="/case-studies/accessibility-qa" element={<Navigate to="/case-studies/unified-qa" replace />} />
          <Route path="/case-studies/asset-monitoring" element={<Navigate to="/case-studies/formula-builder" replace />} />
          <Route path="/case-studies/*" element={<Navigate to="/work" replace />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </HashRouter>
  );
}
