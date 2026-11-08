import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../data/content";
import { NextProject, Reveal } from "../components/ui";
import { CaseHero, ChapterRail, Lead, P, Plate, Split, Story } from "../components/case";

const project = PROJECTS[4];
const next = PROJECTS[3]; // InkTales

const CHAPTERS = [
  { id: "s1", num: "01", label: "Project Overview" },
  { id: "s2", num: "02", label: "Design Direction" },
  { id: "s3", num: "03", label: "Website Design" },
  { id: "s4", num: "04", label: "Design Decisions" },
  { id: "s5", num: "05", label: "Reflection" },
  { id: "s6", num: "06", label: "Project Details" },
];

const DETAILS = [
  { label: "Project", value: "Bikessy" },
  { label: "Type", value: "Independent Personal Concept" },
  { label: "Role", value: "Visual Designer & UX/UI Designer" },
  { label: "Medium", value: "Website" },
  { label: "Pages", value: "Home · About · Services · Contact" },
  { label: "Primary Focus", value: "Visual Storytelling & Website Design" },
];

function PageBlock({
  num,
  kicker,
  title,
  plateIndex,
  plateTitle,
  hint,
  flip,
  children,
}: {
  num: string;
  kicker: string;
  title: string;
  plateIndex: string;
  plateTitle: string;
  hint: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ paddingBlock: "clamp(28px, 4vw, 48px)", borderTop: "1px solid var(--rule)" }}>
      <Reveal>
        <div className="chapter-kicker">
          <span className="ck-num">{num}</span>
          <span className="meta">{kicker}</span>
        </div>
        <h4 className="display-4" style={{ marginBottom: 28 }}>
          {title}
        </h4>
      </Reveal>
      <Split
        flip={flip}
        figure={
          <Plate
            index={plateIndex}
            title={plateTitle}
            ratio="16 / 10"
            hint={hint}
            kind="Original page screenshot — asset pending"
            caption={`${title} — the original ${kicker.toLowerCase()} page screenshot will sit in this frame.`}
          />
        }
      >
        {children}
      </Split>
    </div>
  );
}

export default function CaseBikessy() {
  return (
    <article>
      <CaseHero
        project={project}
        focus="Visual Design · UX/UI Design — vintage motorcycle website concept"
        context="Independent personal concept · Medium: Website"
        contribution="Visual Designer & UX/UI Designer — concept, art direction and page design"
        status="Concept website — Home · About · Services · Contact"
        cover={
          <div style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
            <Plate
              index="00"
              title="Bikessy — the vintage motorcycle website"
              ratio="16 / 9"
              hint="/public/images/bikessy/cover.jpg"
              kind="Original imagery montage — asset pending"
              caption="The original Bikessy hero imagery will occupy this frame — its brown palette, vintage typography and motorcycle photography remain unchanged inside the original visuals."
            />
          </div>
        }
      />

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            {/* 01 — PROJECT OVERVIEW */}
            <Story id="s1" num="01" kicker="Project Overview" title="The idea behind Bikessy.">
              <Split
                figure={
                  <Plate
                    index="01"
                    title="Featured vintage motorcycles"
                    ratio="4 / 3"
                    hint="/public/images/bikessy/hero.jpg"
                    kind="Original website imagery — asset pending"
                    caption="Original Bikessy imagery will be placed here — unchanged, as designed."
                  />
                }
              >
                <Lead>
                  Bikessy started as an independent concept for a business focused on buying and
                  selling second-hand vintage motorcycles.
                </Lead>
                <P>
                  The idea was to create a dedicated platform for two audiences: people looking for
                  affordable pre-owned motorcycles and enthusiasts who appreciate the character,
                  craftsmanship and history of classic two-wheelers.
                </P>
                <P>
                  Unlike a peer-to-peer marketplace, Bikessy follows a business-led model where
                  motorcycles are purchased directly from owners based on the business's acceptance
                  criteria and subsequently offered for resale. The concept also explores servicing
                  and related support for purchased motorcycles.
                </P>
                <P>
                  I wanted to explore how this business could establish its identity and communicate
                  its offerings through a dedicated digital presence.
                </P>
              </Split>
            </Story>

            {/* 02 — THE DESIGN DIRECTION */}
            <Story
              id="s2"
              num="02"
              kicker="The Design Direction"
              title={
                <>
                  Designing around <em className="it accent-text">vintage motorcycle culture.</em>
                </>
              }
            >
              <div className="body-grid">
                <Lead>
                  I wanted Bikessy to feel like an extension of vintage motorcycle culture rather
                  than a conventional vehicle marketplace.
                </Lead>
                <P>
                  I explored a visual direction inspired by classic motorcycles, vintage workshops
                  and the nostalgia associated with older two-wheelers.
                </P>
                <P>
                  Photography became a central part of the design. I used muted, slightly
                  desaturated motorcycle imagery to create an aged, nostalgic atmosphere and
                  establish the character of the brand.
                </P>
                <P>
                  The intention was to create a visually distinctive website that communicates the
                  personality of the business while keeping its content easy to explore.
                </P>
              </div>
              <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
                <Plate
                  index="02"
                  title="Muted, desaturated motorcycle photography"
                  ratio="16 / 9"
                  hint="/public/images/bikessy/direction.jpg"
                  kind="Original photography direction — asset pending"
                  caption="The original muted motorcycle photography will be placed here, in the portfolio's own framing."
                />
              </div>
            </Story>

            {/* 03 — WEBSITE DESIGN */}
            <Story id="s3" num="03" kicker="Website Design" title="Four pages, one visual direction.">
              <div className="body-grid" style={{ marginBottom: "clamp(16px, 2vw, 28px)" }}>
                <Lead>
                  I explored the website through four key pages, maintaining a consistent visual
                  language across the experience.
                </Lead>
              </div>

              <PageBlock
                num="01"
                kicker="Home"
                title="Introducing the Bikessy experience"
                plateIndex="03"
                plateTitle="Bikessy — Home page"
                hint="/public/images/bikessy/home.jpg"
              >
                <P>
                  The homepage introduces the Bikessy concept through featured vintage motorcycle
                  imagery and brand messaging.
                </P>
                <P>
                  I used a large photographic hero section, bold typography and prominent calls to
                  action to establish the visual identity immediately.
                </P>
                <P>
                  The layout was designed to introduce the business concept and guide visitors
                  towards exploring its offerings.
                </P>
              </PageBlock>

              <PageBlock
                num="02"
                kicker="About"
                title="Communicating the brand and its offering"
                plateIndex="04"
                plateTitle="Bikessy — About page"
                hint="/public/images/bikessy/about.jpg"
                flip
              >
                <P>
                  The About page communicates the business concept and its vintage motorcycle
                  offering.
                </P>
                <P>
                  The content highlights the curated selection of classic motorcycles,
                  customization-related information and spare parts.
                </P>
                <P>
                  I combined editorial text with photographic elements to maintain the vintage
                  atmosphere while presenting the business information in a structured layout.
                </P>
              </PageBlock>

              <PageBlock
                num="03"
                kicker="Services"
                title="Presenting the service experience"
                plateIndex="05"
                plateTitle="Bikessy — Services page"
                hint="/public/images/bikessy/services.jpg"
              >
                <P>
                  The Services page presents servicing-related offerings through large photographic
                  sections.
                </P>
                <P>I explored two key service concepts:</P>
                <ul className="outline-list">
                  <li>
                    <strong>Book a Service</strong> — a concept for helping customers request and
                    schedule motorcycle servicing.
                  </li>
                  <li>
                    <strong>Service History</strong> — a concept for accessing previous service
                    records.
                  </li>
                </ul>
                <P>
                  The page uses visual sections to distinguish these offerings while maintaining the
                  overall website design language.
                </P>
              </PageBlock>

              <PageBlock
                num="04"
                kicker="Contact"
                title="Bringing communication together"
                plateIndex="06"
                plateTitle="Bikessy — Contact page"
                hint="/public/images/bikessy/contact.jpg"
                flip
              >
                <P>The Contact page organises communication into three visual sections:</P>
                <ul className="outline-list">
                  <li>
                    <strong>Contact Us</strong> — customer support and roadside assistance
                    information.
                  </li>
                  <li>
                    <strong>Write to Us</strong> — email communication and customer enquiries.
                  </li>
                  <li>
                    <strong>FAQs</strong> — access to commonly asked questions.
                  </li>
                </ul>
                <P>
                  The layout brings essential communication channels together in a clear and
                  accessible format.
                </P>
              </PageBlock>
            </Story>

            {/* 04 — DESIGN DECISIONS */}
            <Story id="s4" num="04" kicker="Design Decisions" title="Creating a consistent vintage experience.">
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>Image-led storytelling</h4>
                  <p>
                    I made motorcycle photography a central part of the website instead of treating
                    it as a supporting visual element. This helped establish the brand's identity
                    and create an emotional connection with vintage motorcycle culture.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Typography with character</h4>
                  <p>
                    I combined Black Ops One and Bree Serif to create a distinctive typographic
                    hierarchy that reflected the vintage direction while maintaining readability
                    across different sections.
                  </p>
                  <p style={{ marginTop: 10 }}>
                    These typefaces belong to the original Bikessy design — this case-study page
                    keeps the portfolio's own typography.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Restrained colour palette</h4>
                  <p>
                    The dark brown background, warm beige highlights and white text created a
                    consistent visual atmosphere without introducing unnecessary colours.
                  </p>
                  <p style={{ marginTop: 10 }}>
                    Those colours describe the original website design only — the page you're
                    reading keeps the global portfolio palette.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Consistent page composition</h4>
                  <p>
                    I maintained a shared visual language across all four pages through typography,
                    photography, colour and content placement. This helped the website feel like one
                    connected brand experience rather than four independent pages.
                  </p>
                </div>
              </div>
            </Story>

            {/* 05 — REFLECTION */}
            <Story id="s5" num="05" kicker="Reflection" title="What I took away from Bikessy.">
              <div className="body-grid">
                <Lead>
                  Bikessy gave me an opportunity to explore how visual storytelling can shape the
                  identity of a niche business through its digital presence.
                </Lead>
                <P>
                  Working on this independent concept allowed me to experiment with typography,
                  photography, colour and page composition beyond conventional modern website
                  aesthetics.
                </P>
                <P>
                  It also helped me understand how a consistent visual direction can bring a
                  business idea to life through a cohesive website experience.
                </P>
              </div>
              <hr className="rule-strong" style={{ margin: "clamp(40px, 5vw, 64px) 0" }} />
              <p className="serif-quote" style={{ maxWidth: "26ch" }}>
                "The project reinforced my interest in creating digital experiences where visual
                identity and functional design work together."
              </p>
            </Story>

            {/* 06 — PROJECT DETAILS */}
            <Story id="s6" num="06" kicker="Project Details" title="The record, at a glance." last>
              <div className="case-hero-meta" style={{ marginTop: 8 }}>
                {DETAILS.map((d) => (
                  <div key={d.label}>
                    <span className="chm-label">{d.label}</span>
                    <span className="chm-value">{d.value}</span>
                  </div>
                ))}
              </div>
              <p className="meta" style={{ marginTop: 28 }}>
                Original screenshots are placed in labelled frames as they are supplied — no
                recreations, no substitutions.
              </p>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <div className="container-ed" style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}>
        <Reveal>
          <Link to="/case-studies/universal-crawler" className="tlink">
            <ArrowLeft size={13} aria-hidden="true" /> Previous — Beyond a Single URL: Exploring a
            Universal Crawler
          </Link>
        </Reveal>
      </div>
      <NextProject project={next} label="Next in the collection — InkTales" />
    </article>
  );
}
