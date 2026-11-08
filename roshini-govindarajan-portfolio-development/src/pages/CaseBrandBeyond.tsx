import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../data/content";
import { BackToWork, Reveal } from "../components/ui";
import { ChapterRail, DecisionRow, Lead, P, Story } from "../components/case";

const prev = PROJECTS[3]; // InkTales

const CHAPTERS = [
  { id: "s1", num: "01", label: "Overview" },
  { id: "s2", num: "02", label: "Brand Communication" },
  { id: "s3", num: "03", label: "Areas of Work" },
  { id: "s4", num: "04", label: "Creative Approach" },
  { id: "s5", num: "05", label: "Formats" },
  { id: "s6", num: "06", label: "Reflection" },
  { id: "s7", num: "07", label: "Project Details" },
];

const DETAILS = [
  { label: "Project", value: "Brand & Beyond" },
  { label: "Role", value: "Visual Designer & Creative Content Contributor" },
  { label: "Disciplines", value: "Visual Design · Marketing Design · Video Editing" },
  { label: "Additional Work", value: "Product Photography & Social Media Management" },
  { label: "Formats", value: "Social Media · Event Posters · Reels · Photography" },
  { label: "Industries", value: "Products · Restaurants · Hotels · Recreational Spaces" },
];

const TOOLS = ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro"];

export default function CaseBrandBeyond() {
  return (
    <article>
      {/* ========================== EDITORIAL COVER ========================== */}
      <header className="container-ed page-hero" style={{ paddingBottom: 0 }}>
        <p className="meta" style={{ marginBottom: 28 }}>
          <Link to="/work" style={{ display: "inline-flex", alignItems: "center", gap: 8 }} className="meta meta-accent">
            <ArrowLeft size={13} aria-hidden="true" /> All Work
          </Link>
        </p>

        <Reveal>
          <figure className="cover-hero" role="img"
            aria-label="Editorial cover: Brand & Beyond — a collage of five fragments representing product photography, restaurant promotion, hospitality, an event poster and a film timeline">
            <div className="cover-hero-copy">
              <span className="meta meta-accent">06 — Selected Creative Work</span>
              <h1 className="cover-title">
                Brand <span className="amp">&amp;</span>
                <br />
                Beyond
              </h1>
              <p className="meta meta-light" style={{ lineHeight: 2 }}>
                Visual Design<span className="dot-sep">·</span>Brand Communication
                <br />
                Multimedia
              </p>
              <p className="cover-concept">
                A creative practice across different industries and formats.
              </p>
            </div>
            <div className="cover-hero-img">
              <img
                src="/images/cover-brand-beyond.jpg"
                alt="Editorial collage of five fragments — a premium product photograph, a restaurant dish, a hotel interior, a geometric event poster and a film-strip timeline"
                width="1600"
                height="900"
              />
            </div>
          </figure>
          <p className="meta" style={{ marginTop: 14, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span>Editorial cover — fictional visual fragments, no client material.</span>
            <span>16 : 9</span>
          </p>
        </Reveal>

        {/* Title, subtitle & metadata */}
        <div style={{ paddingTop: "clamp(48px, 6vw, 88px)" }}>
          <Reveal>
            <p className="meta" style={{ marginBottom: 24 }}>
              Case Study
            </p>
            <h2 className="display-2" style={{ maxWidth: "18ch" }}>
              Exploring brand communication through{" "}
              <em className="it accent-text">design, photography &amp; video</em>
            </h2>
            <p className="prose-serif" style={{ marginTop: 32 }}>
              A collection of creative work exploring how brands communicate through visual design,
              marketing content, photography and video.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="case-hero-meta" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
              <div>
                <span className="chm-label">Role</span>
                <span className="chm-value">Visual Designer &amp; Creative Content Contributor</span>
              </div>
              <div>
                <span className="chm-label">Project Type</span>
                <span className="chm-value">Selected Creative Work</span>
              </div>
              <div>
                <span className="chm-label">Medium</span>
                <span className="chm-value">Digital &amp; Social Media</span>
              </div>
              <div>
                <span className="chm-label">Industries</span>
                <span className="chm-value">Products · Restaurants · Hotels · Recreational Spaces</span>
              </div>
            </div>
            <p className="meta meta-light" style={{ marginTop: 24, lineHeight: 2 }}>
              Visual Design<span className="dot-sep">·</span>Brand Communication
              <span className="dot-sep">·</span>Content Creation<span className="dot-sep">·</span>Multimedia
            </p>
          </Reveal>
        </div>
      </header>

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            {/* 01 — PROJECT OVERVIEW */}
            <Story id="s1" num="01" kicker="Project Overview" title="Beyond individual graphics.">
              <div className="body-grid">
                <Lead>
                  Brand &amp; Beyond brings together my creative work across different business
                  categories — including product-based businesses, restaurants, hotels and
                  recreational spaces.
                </Lead>
                <P>
                  My involvement extended beyond creating individual graphics. I worked with existing
                  brand guidelines, designed social media creatives and event posters, edited videos
                  and social media reels, participated in product photography shoots and contributed
                  to social media management.
                </P>
                <P>
                  These experiences allowed me to explore different aspects of brand communication and
                  understand how design, photography and video work together to shape a brand's
                  digital presence.
                </P>
                <P>
                  Each creative requirement presented a different communication objective. I
                  approached the work by considering the brand, its audience and the message that
                  needed to be communicated.
                </P>
              </div>
            </Story>

            {/* 02 — UNDERSTANDING BRAND COMMUNICATION */}
            <Story
              id="s2"
              num="02"
              kicker="Understanding Brand Communication"
              title={
                <>
                  Every brand has a <em className="it accent-text">different story</em> to tell.
                </>
              }
            >
              <div className="body-grid">
                <Lead>
                  Working across different business categories introduced me to different visual
                  communication needs.
                </Lead>
                <P>
                  A product-focused creative needs to bring attention to the product. Restaurant
                  promotions need to present food and offerings in an appealing way. Hotels and
                  recreational businesses need to communicate the experiences and services they
                  provide.
                </P>
                <P>I learned that visual communication cannot follow the same approach for every business.</P>
                <P>
                  My focus was on understanding the message first and exploring how visual elements
                  could communicate it effectively.
                </P>
                <P>Some of the considerations included:</P>
                <ul className="outline-list">
                  <li>Understanding the brand's identity and existing visual guidelines.</li>
                  <li>Identifying the purpose of each creative.</li>
                  <li>Organising information based on its importance.</li>
                  <li>Selecting appropriate imagery and visual treatments.</li>
                  <li>Adapting content to different digital formats.</li>
                </ul>
              </div>
            </Story>

            {/* 03 — AREAS OF CREATIVE WORK */}
            <Story id="s3" num="03" kicker="Areas of Creative Work" title="Six disciplines, one communication goal.">
              <div style={{ display: "grid", gap: 0 }}>
                <DecisionRow num="01" title="Working within brand guidelines">
                  <P>
                    I worked with existing brand guidelines while creating visual content for
                    different businesses. These guidelines helped me understand the established
                    visual identity of each brand, including its colours, typography and overall
                    visual direction.
                  </P>
                  <P>
                    I applied these guidelines across social media creatives, promotional designs and
                    other marketing materials to maintain consistency in how each brand communicated
                    visually.
                  </P>
                  <P>
                    This experience helped me understand the importance of adapting creative ideas
                    while staying aligned with an established brand identity.
                  </P>
                </DecisionRow>

                <DecisionRow num="02" title="Social media & marketing design">
                  <P>
                    I created social media and marketing creatives across product-based businesses,
                    restaurants, hotels and recreational spaces.
                  </P>
                  <P>
                    Each category presented a different communication context. I explored different
                    layouts, visual compositions, typography and imagery based on the content being
                    promoted.
                  </P>
                  <P>
                    My focus was on making the primary message clear while keeping the visual
                    presentation engaging and relevant to the business.
                  </P>
                </DecisionRow>

                <DecisionRow num="03" title="Event posters & promotions">
                  <P>
                    I also worked on event-related promotional designs. These creatives required
                    organising important information into a clear visual hierarchy.
                  </P>
                  <P>
                    I explored how typography, imagery and composition could work together to
                    communicate event information and create visual interest.
                  </P>
                </DecisionRow>

                <DecisionRow num="04" title="Video editing & social media reels">
                  <P>
                    My creative work also extended into video editing, particularly short-form
                    content and social media reels.
                  </P>
                  <P>
                    I worked with video content to create visual sequences suitable for social media
                    platforms.
                  </P>
                  <P>
                    This experience helped me explore a different form of visual storytelling, where
                    pacing, sequencing and the relationship between visuals and messaging play an
                    important role.
                  </P>
                </DecisionRow>

                <DecisionRow num="05" title="Product photography & shoots">
                  <P>
                    I participated in product photography shoots, gaining exposure to the process of
                    capturing visual content for marketing and promotional purposes.
                  </P>
                  <P>
                    This gave me an opportunity to understand how product presentation, framing and
                    imagery contribute to the overall communication of a brand.
                  </P>
                  <P>It also helped me connect the photography process with the design work that follows.</P>
                </DecisionRow>

                <DecisionRow num="06" title="Social media management">
                  <P>
                    Alongside creative production, I contributed to social media management. This
                    gave me a broader perspective on how individual designs and videos fit into a
                    brand's ongoing digital communication.
                  </P>
                  <P>
                    Rather than looking at each creative as an isolated deliverable, I began
                    considering how different content formats contribute to a consistent brand
                    presence.
                  </P>
                </DecisionRow>
              </div>
            </Story>

            {/* 04 — MY CREATIVE APPROACH */}
            <Story id="s4" num="04" kicker="My Creative Approach" title="Connecting design with communication.">
              <div className="body-grid" style={{ marginBottom: 36 }}>
                <Lead>Across these different activities, I focused on four recurring principles.</Lead>
              </div>
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>Brand consistency</h4>
                  <p>
                    Following established brand guidelines and maintaining consistency across
                    different creative formats.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Clear visual hierarchy</h4>
                  <p>
                    Organising information so that the primary message is easy to identify and
                    supporting content remains accessible.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Audience relevance</h4>
                  <p>
                    Considering the business category, intended audience and purpose of the
                    communication before exploring the visual direction.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Multimedia storytelling</h4>
                  <p>
                    Understanding how graphics, photography and video can work together to
                    communicate ideas and create a connected brand experience.
                  </p>
                </div>
              </div>
            </Story>

            {/* 05 — WORKING ACROSS DIFFERENT FORMATS */}
            <Story id="s5" num="05" kicker="Working Across Different Formats" title="Different formats. One presence.">
              <div className="body-grid">
                <Lead>
                  One of the most valuable aspects of this experience was working beyond a single
                  design format.
                </Lead>
                <P>
                  A social media post, an event poster, a product photograph and a short-form video
                  each serve a different purpose. Each requires different creative decisions while
                  contributing to the same brand presence.
                </P>
                <div className="tag-row" style={{ marginBlock: 8 }}>
                  {["Social media post", "Event poster", "Product photograph", "Short-form video"].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <P>
                  Working across these formats helped me understand the relationship between visual
                  identity, content creation and digital communication.
                </P>
                <P>
                  It also encouraged me to think about the complete creative process rather than
                  focusing only on the final design output.
                </P>
              </div>
            </Story>

            {/* 06 — REFLECTION & KEY LEARNINGS */}
            <Story id="s6" num="06" kicker="Reflection & Key Learnings" title="Part of a larger brand communication experience.">
              <div className="body-grid">
                <Lead>
                  Brand &amp; Beyond represents an important part of my development as a visual
                  designer.
                </Lead>
                <P>
                  Through these experiences, I developed a broader understanding of how businesses
                  communicate visually across different platforms and formats.
                </P>
                <P>
                  I learned to consider brand consistency, communication objectives, audience
                  relevance and visual storytelling together.
                </P>
                <P>
                  Working with graphics, photography and video also helped me appreciate how
                  different creative disciplines complement one another.
                </P>
              </div>
              <hr className="rule-strong" style={{ margin: "clamp(40px, 5vw, 64px) 0" }} />
              <p className="serif-quote" style={{ maxWidth: "26ch" }}>
                "Visual design is not just the creation of individual assets — it is part of a
                larger brand communication experience."
              </p>
            </Story>

            {/* 07 — PROJECT DETAILS */}
            <Story id="s7" num="07" kicker="Project Details" title="The record, at a glance." last>
              <div className="case-hero-meta" style={{ marginTop: 8 }}>
                {DETAILS.map((d) => (
                  <div key={d.label}>
                    <span className="chm-label">{d.label}</span>
                    <span className="chm-value">{d.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
                <p className="meta" style={{ marginBottom: 18 }}>
                  Tools
                </p>
                <div className="tag-row">
                  {TOOLS.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Reveal>
                <div className="insight-block" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
                  <span className="ib-label">Portfolio Note</span>
                  <p>
                    Selected client creatives and original campaign assets are not displayed publicly.
                    They may be shared privately where client permissions and confidentiality
                    requirements allow.
                  </p>
                </div>
              </Reveal>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <div className="container-ed" style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}>
        <Reveal>
          <Link to={prev.path ?? "/work"} className="tlink">
            <ArrowLeft size={13} aria-hidden="true" /> Previous — InkTales: A Comic Rental App
            Experience
          </Link>
        </Reveal>
      </div>
      <BackToWork label="End of the collection" note="01–06 — the complete selected work" />
    </article>
  );
}
