import { PROJECTS } from "../data/content";
import { Fig, NextProject, Reveal } from "../components/ui";
import { CaseHero, ChapterRail, Insight, Lead, P, Story } from "../components/case";
import {
  Q1Discovery,
  Q2Unified,
  Q3Redesign,
  Q4AIProcess,
  Q5ComplianceEval,
  Q6TeamFeedback,
} from "../components/diagrams";

const project = PROJECTS[1];

const CHAPTERS = [
  { id: "s1", num: "01", label: "The Discovery" },
  { id: "s2", num: "02", label: "The Opportunity" },
  { id: "s3", num: "03", label: "Rethinking the Platform" },
  { id: "s4", num: "04", label: "AI-Assisted Design" },
  { id: "s5", num: "05", label: "Testing the Platform" },
  { id: "s6", num: "06", label: "Feedback" },
  { id: "s7", num: "07", label: "Testing the Experience" },
  { id: "s8", num: "08", label: "What I Learned" },
];

export default function CaseUnifiedQA() {
  return (
    <article>
      <CaseHero
        project={project}
        focus="Product Design · UX/UI Redesign · AI-assisted Prototyping · Quality Assurance"
        context="An internal accessibility QA platform — organisation anonymised"
        contribution="Experience redesign via interactive prototype, compliance-result QA & findings presentation"
        status="Prototype & evaluation complete — findings shared with both teams"
      />

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            {/* 01 — THE DISCOVERY */}
            <Story id="s1" num="01" kicker="The Discovery" title="An inconsistency that asked a question.">
              <div className="body-grid">
                <Lead>
                  While documenting an enterprise platform, I noticed inconsistencies between its
                  interface and the organisation's established design system.
                </Lead>
                <P>
                  This made me think about a broader question: how could design-system compliance be
                  evaluated more consistently across digital products?
                </P>
                <P>I initially explored the idea of a centralised design-system QA platform.</P>
                <P>
                  When I discussed this with my team, I learned that an internal accessibility QA
                  platform already existed — and that there was an opportunity to extend it with
                  design-system compliance.
                </P>
                <P>
                  This changed the direction of my exploration. Instead of creating an entirely new
                  platform, I started thinking about how the existing QA experience could be improved.
                </P>
              </div>
              <Fig num="01" title="Documentation to opportunity">
                <Q1Discovery />
              </Fig>
            </Story>

            {/* 02 — UNDERSTANDING THE OPPORTUNITY */}
            <Story id="s2" num="02" kicker="Understanding the Opportunity" title="Two dimensions of quality, one experience.">
              <div className="body-grid">
                <P>
                  I wanted to explore how accessibility checks and design-system compliance could come
                  together in a more unified QA experience.
                </P>
                <P>The opportunity was not just about adding more checks.</P>
                <P>
                  It was also about making the platform easier to understand, navigate and
                  investigate.
                </P>
              </div>
              <Fig num="02" title="Unifying two kinds of checks">
                <Q2Unified />
              </Fig>
            </Story>

            {/* 03 — RETHINKING THE PLATFORM */}
            <Story id="s3" num="03" kicker="Rethinking the Platform" title="Three areas, one clearer journey.">
              <div className="body-grid">
                <Lead>I explored redesigning three important areas.</Lead>
              </div>
              <div className="role-triad" style={{ marginTop: 32 }}>
                <Reveal className="rt-item">
                  <h4>
                    <span>01</span> Dashboard
                  </h4>
                  <p>
                    I explored a more structured overview of the QA platform and its scanning
                    experience.
                  </p>
                </Reveal>
                <Reveal className="rt-item" delay={80}>
                  <h4>
                    <span>02</span> Website Scanning Flow
                  </h4>
                  <p>
                    I worked on making the website scanning journey clearer and easier to follow.
                  </p>
                </Reveal>
                <Reveal className="rt-item" delay={160}>
                  <h4>
                    <span>03</span> Detailed Issue Presentation
                  </h4>
                  <p>
                    I explored an expandable issue view bringing together the identified issue,
                    visual evidence, relevant code information and a detailed explanation of the
                    error.
                  </p>
                </Reveal>
              </div>
              <p className="prose-ed" style={{ marginTop: 32, fontSize: "0.95rem" }}>
                The intention was to make technical QA findings easier to investigate.
              </p>
              <Fig num="03" title="The rethought platform experience">
                <Q3Redesign />
              </Fig>
            </Story>

            {/* 04 — AI-ASSISTED DESIGN */}
            <Story
              id="s4"
              num="04"
              kicker="Exploring AI-Assisted Design"
              title={
                <>
                  How far could AI carry an <em className="it accent-text">established design language?</em>
                </>
              }
            >
              <div className="body-grid">
                <P>
                  Figma Make had recently been introduced, and I wanted to explore how effectively it
                  could translate design ideas into a clickable website prototype.
                </P>
                <P>I used prompts and iterative direction to explore the redesigned experience.</P>
                <P>My process involved:</P>
                <ul className="outline-list">
                  <li>Translating design ideas into prompts.</li>
                  <li>Generating the initial interface.</li>
                  <li>Reviewing the generated experience.</li>
                  <li>Refining layouts and interactions.</li>
                  <li>Evaluating how well the prototype reflected the established design system.</li>
                </ul>
                <P>
                  I treated Figma Make as an exploration tool rather than a replacement for design
                  judgement.
                </P>
              </div>
              <Fig num="04" title="The AI-assisted design loop">
                <Q4AIProcess />
              </Fig>
            </Story>

            {/* 05 — TESTING THE QA PLATFORM */}
            <Story id="s5" num="05" kicker="Testing the QA Platform" title="Judging the platform by its output.">
              <div className="body-grid">
                <Lead>
                  Beyond exploring the interface, I wanted to understand how well the actual QA
                  platform could identify and report accessibility and design-system compliance
                  issues.
                </Lead>
                <P>I used the Asset Management platform as the environment for this evaluation.</P>
                <P>
                  I ran compliance checks through the QA platform and examined the results it
                  generated for both accessibility and design-system compliance. I wanted to
                  understand:
                </P>
                <ul className="outline-list">
                  <li>What kinds of issues could the platform identify?</li>
                  <li>How detailed were the generated results?</li>
                  <li>How clearly were the issues explained?</li>
                  <li>What visual evidence and technical information were provided?</li>
                  <li>How useful were the results for investigating the identified issues?</li>
                  <li>How far could the platform evaluate compliance across the tested platform?</li>
                </ul>
                <P>
                  I carried out QA on the generated results, reviewing how effectively the platform
                  reported the identified accessibility and design-system issues.
                </P>
                <P>
                  This helped me evaluate the platform beyond its visual interface — I was also
                  examining the quality and usefulness of the actual output.
                </P>
              </div>
              <Fig num="05" title="Evaluating the compliance output">
                <Q5ComplianceEval />
              </Fig>
            </Story>

            {/* 06 — SHARING RESULTS & FEEDBACK */}
            <Story id="s6" num="06" kicker="Sharing the Results" title="Two teams, one conversation.">
              <div className="body-grid">
                <P>After evaluating the compliance results, I presented the findings to two teams:</P>
                <ul className="outline-list">
                  <li>The Asset Management team.</li>
                  <li>The Design System team.</li>
                </ul>
                <P>
                  I shared the accessibility and design-system compliance results generated from
                  checking the Asset Management platform.
                </P>
                <P>
                  The purpose was to demonstrate what the QA platform could identify, understand how
                  useful the results were, and gather feedback from the teams.
                </P>
                <P>
                  The discussions helped clarify what was already working well — and what needed
                  further improvement.
                </P>
              </div>
              <Fig num="06" title="Feedback and the identified limitation">
                <Q6TeamFeedback />
              </Fig>

              <Reveal>
                <div className="insight-block" style={{ marginTop: 8 }}>
                  <span className="ib-label">What the feedback clarified</span>
                  <p>
                    The existing platform already provided detailed error descriptions, helping users
                    understand the issues identified by the checks. However, one important limitation
                    emerged: the scanning process was limited to a single URL and did not
                    automatically navigate through the rest of the website.
                  </p>
                </div>
              </Reveal>

              <div className="body-grid" style={{ marginTop: 32 }}>
                <P>
                  This meant the platform could provide detailed information about the scanned page —
                  but broader website coverage remained a challenge.
                </P>
                <P>
                  The Asset Management team also shared that they had a similar tool, but it had a
                  single-page crawl limitation and provided less detailed information and output.
                </P>
                <P>The Design System team highlighted further opportunities:</P>
                <ul className="outline-list">
                  <li>Extending accessibility checks to mobile applications.</li>
                  <li>Checking whether the correct design-system components were being used.</li>
                </ul>
                <p className="meta meta-accent">
                  These were future opportunities — not features delivered through my redesign.
                </p>
              </div>
            </Story>

            {/* 07 — TESTING THE EXPERIENCE */}
            <Story id="s7" num="07" kicker="Testing the Experience" title="The gap wasn't the detail. It was the coverage.">
              <div className="body-grid">
                <Lead>
                  I used Chrome DevTools Recorder to record and replay browser interactions during
                  testing.
                </Lead>
                <P>I also incorporated feedback from the QA/platform team.</P>
                <P>
                  Through this testing and evaluation, I understood that the key limitation was not
                  the level of detail in the error descriptions — the platform already provided
                  detailed issue information.
                </P>
                <P>
                  The bigger opportunity was to improve how the platform discovered and scanned pages
                  beyond the initial URL.
                </P>
              </div>
              <Insight>This became the starting point for my next exploration.</Insight>
            </Story>

            {/* 08 — WHAT I LEARNED */}
            <Story id="s8" num="08" kicker="What I Learned" title="Product design goes beyond individual screens." last>
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>Redesigning screens isn't the whole job.</h4>
                  <p>
                    Improving a QA platform also means understanding the quality of its output and
                    where its behaviour falls short.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Evaluate the product, not just the pixels.</h4>
                  <p>QA-ing the generated results taught me more than reviewing the interface alone.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Feedback sharpens the real problem.</h4>
                  <p>Team discussions confirmed what worked — and exposed the single-URL gap.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Everything connects.</h4>
                  <p>
                    Interface design, quality assurance, technical limitations and team feedback
                    turned out to be one problem.
                  </p>
                </div>
              </div>

              <hr className="rule-strong" style={{ margin: "clamp(48px, 6vw, 80px) 0" }} />

              <p className="serif-quote" style={{ maxWidth: "25ch" }}>
                "What began as an exploration of design-system inconsistencies evolved into a broader
                platform redesign and QA evaluation."
              </p>
              <p className="prose-ed" style={{ marginTop: 32 }}>
                The feedback and testing helped me identify an important gap: the platform could
                provide detailed issue descriptions, but its scanning was limited to a single URL.
                Rather than treating this as just another interface problem, I started exploring how
                the platform could navigate and discover more of a website. That became the
                foundation for my next exploration.
              </p>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <NextProject project={PROJECTS[2]} label="Next exploration — System thinking" />
    </article>
  );
}
