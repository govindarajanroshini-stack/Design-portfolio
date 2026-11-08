import { BackToWork } from "../components/ui";
import { PROJECTS } from "../data/content";
import { Fig } from "../components/ui";
import { CaseHero, ChapterRail, Insight, Lead, P, Story } from "../components/case";
import { Reveal } from "../components/ui";
import {
  U1WebsiteDiscovery,
  U2AutomationContext,
  U3Workflow,
  U4Rulebook,
  U5CoverageStates,
  U6DeveloperHandoff,
} from "../components/diagrams";

const project = PROJECTS[2];

const CHAPTERS = [
  { id: "s1", num: "01", label: "The Observation" },
  { id: "s2", num: "02", label: "The Possibility" },
  { id: "s3", num: "03", label: "The Workflow" },
  { id: "s4", num: "04", label: "The Rulebook" },
  { id: "s5", num: "05", label: "Developer Handoff" },
  { id: "s6", num: "06", label: "What I Learned" },
];

export default function CaseCrawler() {
  return (
    <article>
      <CaseHero
        project={project}
        focus="UX Research · Product Thinking · Interaction Design · Technical Exploration"
        context="Extending the internal QA platform's scanning reach — organisation anonymised"
        contribution="Research, system-behaviour definition, mandatory interaction rulebook & developer handoff"
        status="Proposed concept — the development team is currently implementing"
      />

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            {/* 01 — THE OBSERVATION */}
            <Story id="s1" num="01" kicker="The Observation" title="A single URL only tells you about a single page.">
              <div className="body-grid">
                <Lead>
                  During QA testing, I noticed that scanning a single URL did not automatically
                  navigate to other pages.
                </Lead>
                <P>
                  The platform was already capable of providing detailed descriptions of identified
                  errors. The challenge was not simply improving the information presented in the
                  results.
                </P>
                <P>
                  The bigger limitation was website coverage. A scan could provide detailed findings
                  for the page being checked, but it did not automatically explore the wider website.
                </P>
                <P>
                  This made me question: how might we help the QA platform navigate beyond a single
                  URL and explore more of a website?
                </P>
              </div>
              <Insight>The problem was not what the platform found — it was how far it could go.</Insight>
            </Story>

            {/* 02 — EXPLORING THE POSSIBILITY */}
            <Story id="s2" num="02" kicker="Exploring the Possibility" title="Researching how exploration could work.">
              <div className="body-grid">
                <P>I started researching how a broader website exploration approach could work.</P>
                <P>
                  I used Copilot and other technical resources to investigate possible approaches, and
                  I discussed feasibility with developers to understand the existing platform and how
                  its scanning process could be improved.
                </P>
                <P>
                  The platform uses Playwright as part of its browser automation and scanning
                  approach. I considered this existing capability while exploring how website
                  discovery and navigation could be improved.
                </P>
                <P>
                  My role was not to develop Playwright or write automation scripts. My focus was on
                  understanding the user and system behaviour required to make the scanning experience
                  more comprehensive.
                </P>
                <P>
                  This led me to explore the concept of a Universal Crawler: a guided navigation layer
                  that could explore a website, identify relevant pages and interactive elements, and
                  work with the existing QA platform to scan them.
                </P>
                <p className="meta meta-accent">
                  This was a proposed concept — not a crawler that I personally developed.
                </p>
              </div>
              <Fig num="01" title="A starting URL branches into a website">
                <U1WebsiteDiscovery />
              </Fig>
              <Fig num="02" title="The platform's existing automation context">
                <U2AutomationContext />
              </Fig>
            </Story>

            {/* 03 — THE PROPOSED WORKFLOW */}
            <Story id="s3" num="03" kicker="The Proposed Workflow" title="Four stages of exploration.">
              <div className="body-grid">
                <Lead>I explored a workflow built around four stages.</Lead>
              </div>
              <div className="role-triad" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 32 }}>
                <Reveal className="rt-item">
                  <h4>
                    <span>01</span> Discover
                  </h4>
                  <p>Start from a supplied URL and identify accessible pages and navigation paths.</p>
                </Reveal>
                <Reveal className="rt-item" delay={60}>
                  <h4>
                    <span>02</span> Explore
                  </h4>
                  <p>Navigate through relevant pages and safely explore interactive elements.</p>
                </Reveal>
                <Reveal className="rt-item" delay={120}>
                  <h4>
                    <span>03</span> Scan
                  </h4>
                  <p>
                    Use the existing QA platform and its scanning capabilities — including its
                    Playwright-based browser automation — to evaluate discovered pages.
                  </p>
                </Reveal>
                <Reveal className="rt-item" delay={180}>
                  <h4>
                    <span>04</span> Track Coverage
                  </h4>
                  <p>
                    Record which pages and states were scanned, skipped, blocked or left unexplored.
                  </p>
                </Reveal>
              </div>
              <p className="prose-ed" style={{ marginTop: 32, fontSize: "0.95rem" }}>
                The intention was to make scan coverage more transparent and help teams understand
                how much of a website had actually been evaluated.
              </p>
              <Fig num="03" title="Discover, explore, scan, track coverage">
                <U3Workflow />
              </Fig>
            </Story>

            {/* 04 — THE RULEBOOK (prominent) */}
            <Story
              id="s4"
              num="04"
              kicker="A Mandatory Foundation"
              title={
                <>
                  The interaction rulebook — <em className="it accent-text">not an optional extra.</em>
                </>
              }
            >
              <div className="body-grid">
                <Lead>
                  As I explored the Universal Crawler concept, I realised that defining what the
                  crawler should do was only one part of the problem.
                </Lead>
                <P>
                  We also needed to establish clear rules for how it should behave while navigating a
                  website.
                </P>
                <P>
                  Since the crawler was expected to discover pages, interact with website elements and
                  trigger scans, an interaction rulebook was essential. Without clearly defined
                  behaviour, the crawler could perform unintended actions, repeatedly explore the
                  same elements or interact with content that required user input.
                </P>
                <P>
                  I therefore worked on defining a mandatory interaction rulebook that could guide the
                  crawler's behaviour and provide the development team with a clear reference for
                  implementation.
                </P>
              </div>
            </Story>
          </div>
        </div>

        {/* Prominent full-width rulebook figure */}
        <Fig num="04" title="The mandatory interaction rulebook — the behavioural foundation">
          <U4Rulebook />
        </Fig>

        <div className="chapter-layout" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <div aria-hidden="true" />
          <div>
            <div className="body-grid">
              <P>
                <strong>What the rulebook needed to define:</strong>
              </P>
              <ul className="outline-list">
                <li>
                  <strong>Sensitive information</strong> — how inputs such as email and password
                  fields should be identified and masked.
                </li>
                <li>
                  <strong>Interactive element identification</strong> — how buttons and other
                  interactive controls should be identified and classified.
                </li>
                <li>
                  <strong>Safe exploration</strong> — the conditions under which the crawler could
                  safely open or interact with website elements.
                </li>
                <li>
                  <strong>Blocked and user-dependent content</strong> — when the crawler should pause
                  or skip content that requires user input, authentication or access.
                </li>
                <li>
                  <strong>Navigation and UI states</strong> — accounting for navigation changes,
                  dynamically changing interfaces and different UI states during exploration.
                </li>
                <li>
                  <strong>Duplicate exploration</strong> — recognising previously explored pages and
                  interactions to avoid unnecessary repetition.
                </li>
                <li>
                  <strong>Coverage tracking</strong> — recording and distinguishing between scanned,
                  skipped, blocked and unknown or unexplored states.
                </li>
                <li>
                  <strong>User validation &amp; input</strong> — requiring user confirmation or input
                  before sensitive actions or data interactions.
                </li>
              </ul>
            </div>

            <Fig num="05" title="Recording coverage honestly">
              <U5CoverageStates />
            </Fig>

            <Reveal>
              <div className="insight-block">
                <span className="ib-label">Why this mattered</span>
                <p>
                  The rulebook was not an optional addition to the concept. It was a necessary
                  foundation for defining the crawler's interaction behaviour — and it translated a
                  broad automation idea into explicit behavioural rules that developers could
                  understand, evaluate and implement.
                </p>
              </div>
            </Reveal>
            <p className="prose-ed" style={{ marginTop: 24 }}>
              It also helped make the proposed exploration process more predictable, controlled and
              transparent.
            </p>

            {/* 05 — DEVELOPER HANDOFF */}
            <Story id="s5" num="05" kicker="From Exploration to Handoff" title="Turning exploration into a buildable brief." >
              <div className="body-grid">
                <Lead>
                  I discussed the concept's feasibility with developers and translated the exploration
                  into the interaction rulebook.
                </Lead>
                <P>My work focused on:</P>
                <ul className="outline-list">
                  <li>Understanding the single-URL scanning limitation.</li>
                  <li>Researching possible technical approaches.</li>
                  <li>Understanding the existing Playwright-based automation context.</li>
                  <li>Exploring how website navigation could work.</li>
                  <li>Defining safe interaction behaviour.</li>
                  <li>Considering how coverage should be tracked.</li>
                  <li>Preparing the interaction rulebook for developer handoff.</li>
                </ul>
                <P>
                  The rulebook became an important part of the developer handoff because it documented
                  the expected interaction behaviour and the conditions the crawler needed to handle.
                </P>
                <P>
                  The development team is currently working on implementation. I did not personally
                  build or implement the crawler, and I did not develop Playwright automation.
                </P>
              </div>
              <Fig num="06" title="From observation to implementation">
                <U6DeveloperHandoff />
              </Fig>
              <span className="status-banner">
                <span className="accent-sq" aria-hidden="true" />
                Universal Crawler — implementation in progress by the development team
              </span>
            </Story>

            {/* 06 — WHAT I LEARNED */}
            <Story id="s6" num="06" kicker="What I Learned" title="Designing how a system should behave." last>
              <div className="body-grid">
                <Lead>
                  This exploration helped me think beyond what an interface looks like — and consider
                  how an automated system should behave.
                </Lead>
                <P>
                  I realised that improving automated QA coverage requires more than identifying what
                  can be clicked. It also requires defining:
                </P>
                <ul className="outline-list">
                  <li>What should be explored.</li>
                  <li>What should be avoided.</li>
                  <li>How uncertainty should be handled.</li>
                  <li>How repeated actions should be prevented.</li>
                  <li>How sensitive information should be protected.</li>
                  <li>How coverage should be communicated.</li>
                </ul>
                <P>
                  It also helped me understand the importance of working with developers when
                  translating interaction ideas into technically feasible behaviour.
                </P>
              </div>

              <hr className="rule-strong" style={{ margin: "clamp(48px, 6vw, 80px) 0" }} />

              <p className="serif-quote" style={{ maxWidth: "26ch" }}>
                "The Universal Crawler exploration moved my work from redesigning an interface to
                defining the behaviour of a proposed system."
              </p>
              <p className="prose-ed" style={{ marginTop: 32 }}>
                What started as a single-URL scanning limitation became an opportunity to explore how
                the platform could discover, navigate and evaluate more of a website. It helped me
                understand how UX thinking can contribute to technical product exploration —
                especially when working closely with developers.
              </p>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <BackToWork />
    </article>
  );
}
