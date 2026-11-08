import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { NextProject, Reveal } from "../components/ui";
import { CaseHero, ChapterRail, Lead, P, Plate, Split, Story } from "../components/case";

const project = PROJECTS[3];
const next = PROJECTS[5]; // Brand & Beyond
const prev = PROJECTS[4]; // Bikessy

const CHAPTERS = [
  { id: "s1", num: "01", label: "Overview" },
  { id: "s2", num: "02", label: "The Challenge" },
  { id: "s3", num: "03", label: "Objectives" },
  { id: "s4", num: "04", label: "UX Approach" },
  { id: "s5", num: "05", label: "Architecture" },
  { id: "s6", num: "06", label: "User Flow" },
  { id: "s7", num: "07", label: "UI Design" },
  { id: "s8", num: "08", label: "Design Decisions" },
  { id: "s9", num: "09", label: "Final Design" },
  { id: "s10", num: "10", label: "Key Learnings" },
  { id: "s11", num: "11", label: "Project Details" },
];

const IA_AREAS = [
  { idx: "01", name: "Home & discovery" },
  { idx: "02", name: "Comic categories" },
  { idx: "03", name: "Search & exploration" },
  { idx: "04", name: "Comic details" },
  { idx: "05", name: "Rental experience", key: true },
  { idx: "06", name: "Reading experience", key: true },
  { idx: "07", name: "User profile & library" },
];

const FLOW = [
  { num: "01", label: "Open App" },
  { num: "02", label: "Explore Comics" },
  { num: "03", label: "Select a Comic" },
  { num: "04", label: "View Details" },
  { num: "05", label: "Rent", hot: true },
  { num: "06", label: "Access Reading Experience", hot: true },
];

const UI_SCREENS = [
  { idx: "03", title: "Home & comic discovery", hint: "/public/images/inktales/discovery.jpg" },
  { idx: "04", title: "Genre & category browsing", hint: "/public/images/inktales/categories.jpg" },
  { idx: "05", title: "Comic detail screens", hint: "/public/images/inktales/details.jpg" },
  { idx: "06", title: "Rental-related screens", hint: "/public/images/inktales/rental.jpg" },
  { idx: "07", title: "Digital reading interface", hint: "/public/images/inktales/reading.jpg" },
  { idx: "08", title: "User account & library", hint: "/public/images/inktales/library.jpg" },
];

const FINAL = [
  { idx: "09", title: "Home & discovery", hint: "/public/images/inktales/final-home.jpg" },
  { idx: "10", title: "Comic details", hint: "/public/images/inktales/final-details.jpg" },
  { idx: "11", title: "Rental experience", hint: "/public/images/inktales/final-rental.jpg" },
  { idx: "12", title: "Reading interface", hint: "/public/images/inktales/final-reading.jpg" },
];

const DETAILS = [
  { label: "Project", value: "InkTales" },
  { label: "Type", value: "Personal Project" },
  { label: "Role", value: "UI/UX Designer" },
  { label: "Platform", value: "Mobile Application" },
  { label: "Tool", value: "Figma" },
  { label: "Primary Focus", value: "Comic Discovery · Rental Experience · Digital Reading" },
];

export default function CaseInkTales() {
  return (
    <article>
      <CaseHero
        project={project}
        focus="UI/UX Design — comic discovery, rental & digital reading"
        context="Personal project · Mobile application concept"
        contribution="UI/UX Designer — journeys, information architecture and interface design"
        status="Concept designed in Figma — not launched"
        cover={
          <div style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
            <Plate
              index="00"
              title="InkTales — a comic rental app experience"
              ratio="16 / 9"
              hint="/public/images/inktales/cover.jpg"
              kind="Original app screens montage — asset pending"
              caption="The original InkTales interface will sit in this frame — its own colours, typography and comic artwork unchanged."
            />
          </div>
        }
      />

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            <Reveal>
              <p className="serif-quote" style={{ maxWidth: "24ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
                "Making comic discovery and digital reading easier through a thoughtfully designed
                mobile experience."
              </p>
            </Reveal>

            {/* 01 — OVERVIEW */}
            <Story id="s1" num="01" kicker="Project Overview" title="Bringing comic discovery and reading together.">
              <Split
                figure={
                  <Plate
                    index="01"
                    title="The InkTales application"
                    ratio="4 / 3"
                    hint="/public/images/inktales/overview.jpg"
                    kind="Original app visuals — asset pending"
                    caption="Original InkTales screens will be placed here — unchanged, as designed."
                  />
                }
              >
                <Lead>
                  InkTales is a mobile application concept that explores a convenient way for comic
                  enthusiasts to discover, rent, and enjoy their favourite comics digitally.
                </Lead>
                <P>
                  The project focuses on creating a seamless experience that connects comic
                  discovery with easy access and an engaging reading interface.
                </P>
              </Split>
            </Story>

            {/* 02 — THE CHALLENGE */}
            <Story id="s2" num="02" kicker="The Challenge" title="Making comic discovery more accessible.">
              <div className="body-grid">
                <Lead>
                  Discovering and accessing comics should be an enjoyable experience, not a
                  complicated process.
                </Lead>
                <P>
                  InkTales explores how a dedicated mobile platform can simplify the journey of
                  finding comics, exploring different titles, and accessing stories through a
                  rental-based model.
                </P>
                <P>
                  The design challenge was to bring these experiences together in an interface that
                  feels intuitive, visually engaging, and easy to navigate.
                </P>
              </div>
              <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
                <Plate
                  index="02"
                  title="Discovery, rental and reading — one interface"
                  ratio="16 / 9"
                  hint="/public/images/inktales/challenge.jpg"
                  kind="Original app visuals — asset pending"
                  caption="Wide composition of the original application visuals will sit here."
                />
              </div>
            </Story>

            {/* 03 — DESIGN OBJECTIVES */}
            <Story id="s3" num="03" kicker="Design Objectives" title="What the experience needed to support.">
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>Simplify discovery</h4>
                  <p>Create an organised browsing experience that helps users explore comics and discover new titles.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Improve accessibility</h4>
                  <p>Make comic information and rental options easy to understand and access.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Design an engaging reading experience</h4>
                  <p>Develop an interface that keeps the reading experience central to the application.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Create consistent navigation</h4>
                  <p>Establish a clear interface structure that allows users to move between discovery, comic details, rentals, and reading.</p>
                </div>
              </div>
            </Story>

            {/* 04 — UX APPROACH */}
            <Story id="s4" num="04" kicker="UX Approach" title="Understanding the comic reader journey.">
              <div className="body-grid">
                <Lead>
                  The design process explored the core journey of a comic reader, from entering the
                  application to discovering and accessing a comic.
                </Lead>
                <P>Key design considerations included:</P>
                <ul className="outline-list">
                  <li>Content organisation and categorisation.</li>
                  <li>Navigation structure.</li>
                  <li>Comic discovery and browsing.</li>
                  <li>Comic details and rental information.</li>
                  <li>Reading interface and accessibility.</li>
                  <li>Consistency across application screens.</li>
                </ul>
              </div>
            </Story>

            {/* 05 — INFORMATION ARCHITECTURE */}
            <Story id="s5" num="05" kicker="Information Architecture" title="Organising the application experience.">
              <div className="body-grid" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
                <Lead>The application experience was organised around its primary user activities.</Lead>
              </div>
              <Reveal>
                <div className="ia-tree" role="img" aria-label="InkTales information architecture: the application organises into home and discovery, comic categories, search and exploration, comic details, rental experience, reading experience, and user profile and library.">
                  <div className="ia-root">
                    <span className="ia-root-title">InkTales — application</span>
                    <span className="ia-root-sub">Primary activities</span>
                  </div>
                  <div className="ia-children">
                    {IA_AREAS.map((a) => (
                      <div key={a.idx} className={`ia-child${a.key ? " is-key" : ""}`}>
                        <div className="ia-child-inner">
                          <span className="ia-name">{a.name}</span>
                          <span className="ia-idx">{a.idx}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <p className="meta" style={{ marginTop: 20 }}>
                Red-outlined branches mark the two activities the whole concept is built around — rental and reading.
              </p>
            </Story>

            {/* 06 — USER FLOW */}
            <Story id="s6" num="06" kicker="User Flow" title="From discovery to reading.">
              <Reveal>
                <div className="flow-strip" role="img" aria-label="User flow: open app, explore comics, select a comic, view details, rent, access reading experience.">
                  {FLOW.map((f, i) => (
                    <div key={f.num} style={{ display: "contents" }}>
                      <div className={`flow-step${f.hot ? " hot" : ""}`}>
                        <span className="fs-num">{f.num}</span>
                        <span className="fs-label">{f.label}</span>
                      </div>
                      {i < FLOW.length - 1 ? (
                        <ArrowRight className="flow-arrow" size={16} aria-hidden="true" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </Reveal>
              <p className="meta" style={{ marginTop: 20 }}>
                The rental step and the reading experience are the two moments the flow is designed to protect.
              </p>
            </Story>

            {/* 07 — UI DESIGN */}
            <Story
              id="s7"
              num="07"
              kicker="UI Design"
              title={
                <>
                  Translating the concept into a <em className="it accent-text">mobile experience.</em>
                </>
              }
            >
              <div className="body-grid" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
                <Lead>
                  The visual design translates the product concept into a cohesive mobile
                  experience.
                </Lead>
                <P>
                  The interface focuses on content visibility, clear visual hierarchy, accessible
                  navigation, and consistent interaction patterns. Key interface areas include home
                  and comic discovery, genre and category browsing, comic detail screens,
                  rental-related screens, the digital reading interface, and the user account and
                  library.
                </P>
              </div>
              <div className="plate-grid-3">
                {UI_SCREENS.map((s) => (
                  <Reveal key={s.idx}>
                    <Plate
                      index={s.idx}
                      title={s.title}
                      ratio="3 / 4"
                      hint={s.hint}
                      kind="Original app screen — asset pending"
                    />
                  </Reveal>
                ))}
              </div>
            </Story>

            {/* 08 — DESIGN DECISIONS */}
            <Story id="s8" num="08" kicker="Design Decisions" title="Designing around the reading experience.">
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>Content-first layouts</h4>
                  <p>Give comic artwork and titles an important visual role.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Clear information hierarchy</h4>
                  <p>Make essential comic information easier to scan.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Consistent components</h4>
                  <p>Maintain a cohesive experience across different screens.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Focused navigation</h4>
                  <p>Keep primary user activities easy to access.</p>
                </div>
              </div>
            </Story>

            {/* 09 — FINAL DESIGN */}
            <Story id="s9" num="09" kicker="Final Design" title="A connected comic reading journey.">
              <div className="body-grid" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
                <Lead>
                  The final design brings the main application experiences together into a unified
                  mobile interface.
                </Lead>
                <P>
                  From comic discovery to accessing a selected title, InkTales explores how a
                  rental-based comic platform can provide a more connected digital reading journey.
                </P>
              </div>
              <div className="plate-grid-2">
                {FINAL.map((s) => (
                  <Reveal key={s.idx}>
                    <Plate
                      index={s.idx}
                      title={s.title}
                      ratio="3 / 4"
                      hint={s.hint}
                      kind="Original final screen — asset pending"
                    />
                  </Reveal>
                ))}
              </div>
            </Story>

            {/* 10 — KEY LEARNINGS */}
            <Story id="s10" num="10" kicker="Key Learnings" title="What I learned from InkTales.">
              <div className="body-grid">
                <Lead>
                  This project strengthened my understanding of designing content-focused mobile
                  experiences and balancing visual presentation with functional requirements.
                </Lead>
                <P>
                  It also encouraged me to consider the complete user journey rather than treating
                  individual screens as independent design deliverables.
                </P>
              </div>
              <hr className="rule-strong" style={{ margin: "clamp(40px, 5vw, 64px) 0" }} />
              <p className="serif-quote" style={{ maxWidth: "24ch" }}>
                "A good reading experience begins long before the first page is opened."
              </p>
            </Story>

            {/* 11 — PROJECT DETAILS */}
            <Story id="s11" num="11" kicker="Project Details" title="The record, at a glance." last>
              <div className="case-hero-meta" style={{ marginTop: 8 }}>
                {DETAILS.map((d) => (
                  <div key={d.label}>
                    <span className="chm-label">{d.label}</span>
                    <span className="chm-value">{d.value}</span>
                  </div>
                ))}
              </div>
              <p className="meta" style={{ marginTop: 28 }}>
                Original InkTales screens are placed in labelled frames as they are supplied — no
                recreations, no substitutions.
              </p>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <div className="container-ed" style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}>
        <Reveal>
          <Link to={prev.path ?? "/work"} className="tlink">
            <ArrowLeft size={13} aria-hidden="true" /> Previous — Bikessy: Bringing the World of
            Vintage Motorcycles Online
          </Link>
        </Reveal>
      </div>
      <NextProject project={next} label="Next in the collection — Brand & Beyond" />
    </article>
  );
}
