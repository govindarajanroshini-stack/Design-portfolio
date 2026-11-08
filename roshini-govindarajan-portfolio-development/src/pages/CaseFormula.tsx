import { PROJECTS } from "../data/content";
import { Fig, NextProject } from "../components/ui";
import {
  CaseHero,
  ChapterRail,
  DecisionRow,
  Insight,
  Lead,
  P,
  Story,
} from "../components/case";
import {
  F1FormulaChallenge,
  F2Progressive,
  F3Construction,
  F4Validation,
  F5Evolution,
} from "../components/diagrams";

const project = PROJECTS[0];

const CHAPTERS = [
  { id: "s1", num: "01", label: "The Starting Point" },
  { id: "s2", num: "02", label: "The Challenge" },
  { id: "s3", num: "03", label: "My Exploration" },
  { id: "s4", num: "04", label: "Design Decisions" },
  { id: "s5", num: "05", label: "Proposal to Product" },
  { id: "s6", num: "06", label: "What I Learned" },
];

export default function CaseFormula() {
  return (
    <article>
      <CaseHero
        project={project}
        focus="Feature Design · Interaction Design · Enterprise UX"
        context="Enterprise asset management platform — within a documentation assignment"
        contribution="Interaction concept, prototype proposal & validation logic exploration"
        status="Prototype proposal — one idea carried into the product"
      />

      <div className="container-ed section" style={{ paddingTop: 40 }}>
        <div className="chapter-layout">
          <ChapterRail chapters={CHAPTERS} />

          <div>
            {/* 01 — THE STARTING POINT */}
            <Story id="s1" num="01" kicker="The Starting Point" title="From documentation to design.">
              <div className="body-grid">
                <Lead>
                  While documenting an enterprise asset management platform, I started understanding
                  its features, workflows and the different ways users interacted with its
                  functionality.
                </Lead>
                <P>
                  During this documentation work, I was asked to explore how we could improve the
                  custom datapoint formula creation experience.
                </P>
                <P>
                  This became an opportunity to move beyond documenting an existing feature — and
                  think about how the interaction itself could be made better.
                </P>
              </div>
              <Insight>A documentation assignment opened a design problem.</Insight>
            </Story>

            {/* 02 — UNDERSTANDING THE CHALLENGE */}
            <Story id="s2" num="02" kicker="Understanding the Challenge" title="Making formulas feel familiar.">
              <div className="body-grid">
                <P>
                  The platform allowed users to create custom datapoints by combining existing
                  readings and mathematical operators.
                </P>
                <P>
                  I started thinking about how we could make this formula-building process easier to
                  understand without making the interface feel complicated or overwhelming.
                </P>
                <P>I wanted to explore an approach that would make formula creation feel more familiar.</P>
              </div>
            </Story>

            {/* 03 — MY DESIGN EXPLORATION */}
            <Story
              id="s3"
              num="03"
              kicker="My Design Exploration"
              title={
                <>
                  What if building a formula felt like <em className="it accent-text">solving a puzzle?</em>
                </>
              }
            >
              <div className="body-grid">
                <Lead>I explored a spreadsheet-inspired interaction model.</Lead>
                <P>
                  The idea was to let users build formulas step by step by selecting datapoints, adding
                  operators and grouping expressions.
                </P>
                <P>
                  Instead of showing every available option upfront, I wanted the interface to reveal
                  controls as users needed them.
                </P>
              </div>
              <Fig num="01" title="Datapoints combining into an expression">
                <F1FormulaChallenge />
              </Fig>
              <Fig num="02" title="Options revealed only on request">
                <F2Progressive />
              </Fig>
            </Story>

            {/* 04 — KEY DESIGN DECISIONS */}
            <Story id="s4" num="04" kicker="Key Design Decisions" title="Five decisions that shaped the concept.">
              <div style={{ display: "grid", gap: 0 }}>
                <DecisionRow num="A" title="A familiar formula-building experience">
                  <P>
                    I explored a visual formula-building area where datapoints and mathematical
                    operators could be combined to create an expression.
                  </P>
                  <P>
                    The intention was to make formula construction feel more tangible and less
                    technical.
                  </P>
                </DecisionRow>

                <DecisionRow num="B" title="Progressive datapoint selection">
                  <P>
                    Rather than displaying all available datapoints immediately, I proposed revealing
                    the dropdown only when users clicked the Add Data Point action.
                  </P>
                  <P>This helped keep the initial interface focused.</P>
                </DecisionRow>

                <DecisionRow num="C" title="Formula grouping">
                  <P>
                    I explored grouping expressions so users could organise more complex formulas into
                    logical sections.
                  </P>
                </DecisionRow>
              </div>

              <Fig num="03" title="Grouping expressions into sections">
                <F3Construction />
              </Fig>

              <div style={{ display: "grid", gap: 0, marginTop: 24 }}>
                <DecisionRow num="D" title="Incomplete formula validation">
                  <P>
                    A formula required at least two readings. I introduced an error state for
                    situations where users attempted to proceed without adding the required content.
                  </P>
                </DecisionRow>

                <DecisionRow num="E" title="Measurement-unit validation">
                  <P>
                    I also explored validation for incompatible measurement suffixes. When users
                    attempted to combine datapoints with different suffixes, the interface would
                    identify the mismatch.
                  </P>
                  <P>
                    The intention was to help users recognise potential errors while constructing a
                    formula.
                  </P>
                </DecisionRow>
              </div>

              <Fig num="04" title="Errors surfaced in context">
                <F4Validation />
              </Fig>
            </Story>

            {/* 05 — FROM PROPOSAL TO PRODUCT */}
            <Story id="s5" num="05" kicker="From Proposal to Product" title="The idea that carried forward.">
              <div className="body-grid">
                <Lead>The design was an exploration and prototype proposal — not the final production implementation.</Lead>
                <P>After reviewing the concept, the team refined the approach.</P>
                <P>
                  One of the ideas from my exploration was incorporated into the product:{" "}
                  <strong>progressive datapoint selection</strong>.
                </P>
                <P>The final implementation took a different form:</P>
                <ul className="outline-list">
                  <li>Datapoints were presented as a checklist.</li>
                  <li>Users selected the required datapoints using checkboxes.</li>
                  <li>Once selected, the formula tab opened.</li>
                  <li>The selected datapoints appeared in the formula-building area.</li>
                  <li>Users could then choose mathematical operators to construct the formula.</li>
                </ul>
                <P>
                  Although the final interaction differed from my original proposal, the underlying
                  idea of selecting datapoints progressively was carried forward.
                </P>
              </div>
              <Fig num="05" title="From my proposal to the team's refinement">
                <F5Evolution />
              </Fig>
              <p className="meta" style={{ marginTop: 4 }}>
                Fig. 05 is a conceptual explanation of the evolution — not an actual product screenshot.
              </p>
            </Story>

            {/* 06 — WHAT I LEARNED */}
            <Story id="s6" num="06" kicker="What I Learned" title="An idea has value even when it changes shape." last>
              <div className="learning-grid">
                <div className="learning-item">
                  <span className="li-num">01</span>
                  <h4>A proposal doesn't need to ship as designed to create value.</h4>
                  <p>
                    Sometimes the most valuable contribution is an idea that helps the team think
                    about the problem differently.
                  </p>
                </div>
                <div className="learning-item">
                  <span className="li-num">02</span>
                  <h4>Familiarity is a design material.</h4>
                  <p>A spreadsheet-like mental model made a technical task feel approachable.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">03</span>
                  <h4>Progressive disclosure protects focus.</h4>
                  <p>Revealing controls only when needed keeps technical interfaces calm.</p>
                </div>
                <div className="learning-item">
                  <span className="li-num">04</span>
                  <h4>Collaborative refinement is part of design.</h4>
                  <p>The team's checklist form took the idea further than my original proposal.</p>
                </div>
              </div>

              <hr className="rule-strong" style={{ margin: "clamp(48px, 6vw, 80px) 0" }} />

              <p className="serif-quote" style={{ maxWidth: "25ch" }}>
                "What started as a platform documentation assignment became an opportunity to explore
                a product-design problem."
              </p>
              <p className="prose-ed" style={{ marginTop: 32 }}>
                I moved beyond understanding existing workflows to proposing a new interaction model.
                Although the final implementation evolved, one of the core ideas from my exploration
                made its way into the product.
              </p>
            </Story>
          </div>
        </div>
      </div>

      <hr className="rule-strong" />
      <NextProject project={PROJECTS[1]} label="Next exploration — Experience thinking" />
    </article>
  );
}
