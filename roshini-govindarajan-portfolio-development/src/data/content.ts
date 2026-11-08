export interface Project {
  slug: string;
  num: string;
  title: string;
  stage: string;
  stageNum: string;
  category: string;
  discipline: string;
  role: string;
  tools: string;
  description: string;
  image: string;
  imageAlt: string;
  status?: string;
  /** Internal route. Undefined = case study in preparation (not linked). */
  path?: string;
}

/*
 * One unified Work collection of six projects.
 * 01–03 form the enterprise journey (feature → experience → system);
 * 04–06 are independent personal explorations.
 */
export const PROJECTS: Project[] = [
  {
    slug: "formula-builder",
    num: "01",
    title: "Making Custom Formula Creation More Intuitive",
    stage: "Feature Thinking",
    stageNum: "01",
    category: "Feature Design · Interaction Design · Enterprise UX",
    discipline: "Interaction Design",
    role: "Interaction concept & prototype proposal",
    tools: "Concept exploration · Prototyping",
    description:
      "Explored how custom datapoint formula creation in an enterprise platform could feel more familiar — a spreadsheet-inspired building model with progressive disclosure, grouping and contextual validation.",
    image: "/images/work-formula.jpg",
    imageAlt:
      "Abstract monochrome artwork of empty blocks joined by mathematical operator glyphs, one block highlighted in muted red",
    status: "Prototype proposal — one idea carried into the product",
    path: "/case-studies/formula-builder",
  },
  {
    slug: "unified-qa",
    num: "02",
    title: "Bringing Accessibility and Design System QA Together",
    stage: "Experience Thinking",
    stageNum: "02",
    category: "Product Design · UX/UI Redesign · AI-assisted Prototyping · QA",
    discipline: "Product Design",
    role: "Redesign exploration · Compliance QA evaluation · Findings presentation",
    tools: "Figma Make · Copilot · Chrome DevTools Recorder",
    description:
      "Redesigned the QA platform experience through an interactive prototype, evaluated the quality of its accessibility and design-system compliance results, and presented the findings to the teams connected to them.",
    image: "/images/work-accessibility.jpg",
    imageAlt:
      "Abstract monochrome wireframe artwork of a quality-assurance checklist beside a magnifier, with a single muted red accent bar",
    status: "Prototype & evaluation — findings shared with teams",
    path: "/case-studies/unified-qa",
  },
  {
    slug: "universal-crawler",
    num: "03",
    title: "Beyond a Single URL: Exploring a Universal Crawler",
    stage: "System Thinking",
    stageNum: "03",
    category: "UX Research · Product Thinking · Interaction Design",
    discipline: "Technical Exploration",
    role: "Research · Concept · Mandatory interaction rulebook · Developer handoff",
    tools: "Copilot research · Existing Playwright-based automation context",
    description:
      "Explored how the platform could move beyond single-URL scanning — a proposed Universal Crawler grounded in a mandatory interaction rulebook for safe, predictable website exploration.",
    image: "/images/work-crawler.jpg",
    imageAlt:
      "Abstract branching node network diagram with one node highlighted in muted red on a black background",
    status: "Proposed concept — implementation in progress",
    path: "/case-studies/universal-crawler",
  },
  {
    slug: "inktales",
    num: "04",
    title: "InkTales — A Comic Rental App Experience",
    stage: "Personal Project",
    stageNum: "04",
    category: "Mobile Application · UI/UX Design",
    discipline: "UI/UX Design",
    role: "UI/UX Designer — flows, information architecture & interface design",
    tools: "Figma",
    description:
      "A mobile app concept exploring comic discovery, rental and digital reading — organised journeys, clear hierarchy and a reading-first interface.",
    image: "/images/work-inktales.jpg",
    imageAlt:
      "Editorial artwork of ink-drawn comic characters in a loose grid — representative, not an app screen",
    status: "Personal concept — designed, not launched",
    path: "/work/inktales",
  },
  {
    slug: "bikessy",
    num: "05",
    title: "Bikessy — Bringing the World of Vintage Motorcycles Online",
    stage: "Personal Project",
    stageNum: "05",
    category: "Website Design · Visual Design · UX/UI",
    discipline: "Visual Design",
    role: "Visual Designer & UX/UI Designer — concept, art direction & page design",
    tools: "Figma · Adobe Photoshop",
    description:
      "An independent website concept for a vintage motorcycle business — image-led storytelling, characterful typography and a cohesive four-page experience.",
    image: "/images/work-bikessy.jpg",
    imageAlt:
      "Editorial artwork of a line-drawn motorcycle-style bicycle above blank marketplace cards — representative, not a website screen",
    status: "Independent concept website",
    path: "/work/bikessy",
  },
  {
    slug: "brand-and-beyond",
    num: "06",
    title: "Brand & Beyond",
    stage: "Selected Creative Work",
    stageNum: "06",
    category: "Visual Design · Brand Communication · Multimedia",
    discipline: "Visual Design",
    role: "Visual Designer & Creative Content Contributor",
    tools: "Adobe Illustrator · Adobe Photoshop · Adobe Premiere Pro",
    description:
      "A collection exploring how brands communicate — social media creatives, event posters, product photography shoots, video reels and social media management across products, restaurants, hotels and recreational spaces.",
    image: "/images/cover-brand-beyond.jpg",
    imageAlt:
      "Editorial cover collage of five fragments — a product photograph, a restaurant dish, a hotel interior, a geometric event poster and a film-strip timeline — on near-black paper with one muted red accent",
    status: "Original client creatives shared privately",
    path: "/work/brand-and-beyond",
  },
];

export interface Experience {
  role: string;
  org: string;
  date: string;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "UX/UI Design Consultant",
    org: "Grundfos",
    date: "Nov 2025 — Present",
    points: [
      "Documents existing Asset Monitoring Platform screens.",
      "Contributes to redesigning and testing an existing Accessibility QA platform.",
      "Identifies potential issues affecting user experience and product quality.",
      "Proposes Design System compliance checks.",
      "Develops a proposed single-URL crawler strategy.",
      "Defines interaction rules for a Playwright-based crawler approach.",
      "Incorporates scan coverage reporting into the proposed approach.",
      "Collaborates with product and engineering stakeholders.",
    ],
  },
  {
    role: "Senior Graphic Designer",
    org: "Sociall.in",
    date: "Feb 2025 — Oct 2025",
    points: [
      "Designed digital advertising creatives and visual campaigns.",
      "Developed brand identity systems.",
      "Created reusable design templates and asset libraries.",
      "Collaborated with content strategists and marketing teams.",
    ],
  },
  {
    role: "Product Designer Intern",
    org: "Grafixui",
    date: "Mar 2024 — May 2024",
    points: [
      "Designed digital interfaces and internal tool layouts.",
      "Created icon sets and vector illustrations.",
      "Developed presentation decks and communication visuals.",
    ],
  },
  {
    role: "Assistant System Engineer",
    org: "Tata Consultancy Services",
    date: "Jan 2022 — Feb 2024",
    points: [
      "Designed internal emailers and presentation templates.",
      "Created infographics and UI mockups.",
      "Collaborated with communications and design teams.",
    ],
  },
  {
    role: "Campus Ambassador — UX and Product Focus",
    org: "WolfersTech",
    date: "Oct 2021 — Dec 2021",
    points: [
      "Designed event posters and digital marketing assets.",
      "Supported visual branding for campus events and social media campaigns.",
    ],
  },
];

export const CAPABILITIES = [
  {
    num: "01",
    title: "UX Research",
    items: [
      "User Understanding",
      "Research Planning",
      "Observation",
      "Usability Evaluation",
      "Problem Identification",
      "Insight Synthesis",
    ],
  },
  {
    num: "02",
    title: "Product Design",
    items: [
      "Product Experience Design",
      "User-Centred Design",
      "Interaction Design",
      "Wireframing",
      "High-Fidelity UI",
      "Design Systems",
      "Product Iteration",
    ],
  },
  {
    num: "03",
    title: "Behavioural Design",
    items: [
      "Human Behaviour",
      "Behavioural Patterns",
      "Decision-Making",
      "Cognitive Considerations",
      "Behaviour-Informed Experiences",
    ],
  },
];

export const SUPPORTING = [
  "Visual Communication",
  "Typography",
  "Graphic Design",
  "Accessibility",
  "Inclusive Design",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Premiere Pro",
  "Canva",
];

export const EMAIL = "itsfordesign101@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/roshini-govindarajan-029563221";
export const BEHANCE = "https://www.behance.net/roshinigovinda";
export const MAILTO_FULLTIME =
  "mailto:itsfordesign101@gmail.com?subject=Full-time%20Design%20Opportunity";
export const MAILTO_FREELANCE =
  "mailto:itsfordesign101@gmail.com?subject=Freelance%20Design%20Enquiry";
/**
 * Resume PDF — place the file at public/documents/roshini-govindarajan-resume.pdf
 * and every "Download Resume" button across the site works.
 */
export const RESUME_PDF = "/documents/roshini-govindarajan-resume.pdf";
