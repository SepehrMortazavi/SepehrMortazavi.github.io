"use client";

import { useEffect, useState, type CSSProperties } from "react";

const characterScenes = [
  {
    role: "UNIVERSITY RESEARCH WORK",
    years: "2025 — NOW",
    place: "OSTFALIA UNIVERSITY",
    speech:
      "At Ostfalia, my responsibilities include AI component development, deployment, Linux infrastructure, technical documentation and supervision of student project groups.",
    visualScene: 3,
  },
  {
    role: "CELLCORE PROJECT",
    years: "2025",
    place: "TUNICORN · 1ST PLACE",
    speech:
      "CellCore received first place at TUniCorn 2025. The project combined cell segmentation, backend services, on-premise GPU inference and Kubernetes deployment.",
    visualScene: 4,
  },
  {
    role: "M.SC. DIGITAL TECHNOLOGIES",
    years: "2023 — 2026",
    place: "TU CLAUSTHAL",
    speech:
      "The M.Sc. Digital Technologies programme extended my mechanical background into software engineering, computer vision, robotics, backend systems and MLOps.",
    visualScene: 2,
  },
  {
    role: "ACADEMIC PREPARATION",
    years: "2021 — 2023",
    place: "IRAN → GERMANY",
    speech:
      "I completed language and academic preparation in Germany while working in hotel operations. This period developed German C1, English B2 and service coordination experience.",
    visualScene: 1,
  },
  {
    role: "MECHANICAL MANUFACTURING",
    years: "2018 — 2021",
    place: "ISFAHAN, IRAN",
    speech:
      "I worked in CNC manufacturing, injection-mould tooling, assembly-line coordination and quality assurance. These roles established my process and tolerance awareness.",
    visualScene: 0,
  },
];

const projects = [
  {
    number: "01",
    title: "CellCore",
    eyebrow: "Master thesis · TUniCorn 1st place",
    description:
      "GDPR-compliant microscopy analysis using Cellpose, FastAPI, on-premise GPU inference, Kubernetes and Helm.",
    image: "/projects/cell-segmentation.png",
    imageAlt:
      "CellCore interface showing microscopy cell segmentation and analysis",
    outcome: "On-premise GPU inference deployed with Kubernetes and Helm",
    tags: ["Cellpose", "FastAPI", "Kubernetes", "Helm"],
    href: "https://github.com/SepehrMortazavi/cell_segmentation_platfoarm",
    linkLabel: "View repository",
  },
  {
    number: "02",
    title: "Robot-Arm Reinforcement Learning",
    eyebrow: "Reinforcement learning · Ostfalia",
    description:
      "Simulation-based robot-arm training and control using ROS2, Gazebo, MuJoCo and reinforcement learning.",
    image: "/projects/robotics-dashboard.png",
    imageAlt: "Robotics control interface for connecting and operating a robot arm",
    outcome: "≈85% target-approach success across >1,000 training episodes",
    tags: ["ROS2", "Gazebo", "MuJoCo", "RL"],
    href: "https://github.com/SepehrMortazavi/robotics_app",
    linkLabel: "View repository",
  },
  {
    number: "03",
    title: "Church OS",
    eyebrow: "Full-stack · Live in production",
    description:
      "Event, registration and administration platform using Next.js, PostgreSQL, Docker and Nginx.",
    image: "/projects/church-os.png",
    imageAlt: "FeG Kreuzheber website showing the illustrated church at night",
    outcome: "Production deployment at feg-kreuzheber.de",
    tags: ["Next.js", "PostgreSQL", "Docker", "Nginx"],
    href: "https://feg-kreuzheber.de",
    linkLabel: "Open deployment",
  },
  {
    number: "04",
    title: "Satellite Change Detection",
    eyebrow: "Remote sensing · Computer vision",
    description:
      "Multi-source satellite change analysis using NDVI, SAR log-ratio methods, OpenCV and GDAL.",
    image: "/projects/change-detection.png",
    imageAlt: "Satellite change detection map and result visualization",
    outcome: "NDVI and SAR log-ratio analysis in an interactive interface",
    tags: ["OpenCV", "GDAL", "React", "Docker"],
    href: "https://github.com/SepehrMortazavi/iran-damage-assessment",
    linkLabel: "View repository",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function CharacterFigure({ scene }: { scene: number }) {
  return (
    <div className={`character-figure character-${scene}`} aria-hidden="true">
      <div className="character-shadow" />
      <div className="character-head">
        <span className="character-hair" />
        <span className="character-brow brow-left" />
        <span className="character-brow brow-right" />
        <span className="character-eye eye-left" />
        <span className="character-eye eye-right" />
        <span className="character-nose" />
        <span className="character-smile" />
        <span className="character-ear ear-left" />
        <span className="character-ear ear-right" />
      </div>
      <div className="character-neck" />
      <div className="character-body">
        <span className="character-collar collar-left" />
        <span className="character-collar collar-right" />
        <span className="character-badge">SM</span>
        <span className="character-seam" />
      </div>
      <div className="character-arm arm-left">
        <span className="character-hand" />
      </div>
      <div className="character-arm arm-right">
        <span className="character-hand" />
      </div>
      <div className="character-leg leg-left">
        <span className="character-shoe" />
      </div>
      <div className="character-leg leg-right">
        <span className="character-shoe" />
      </div>
    </div>
  );
}

function SceneProps({ scene }: { scene: number }) {
  return (
    <div className={`scene-props props-${scene}`} aria-hidden="true">
      <div className="factory-gear gear-a" />
      <div className="factory-gear gear-b" />
      <div className="factory-gauge">± 0.01</div>

      <div className="travel-route">
        <span />
        <i />
      </div>
      <div className="travel-sign">IRAN&nbsp;&nbsp;→&nbsp;&nbsp;GERMANY</div>
      <div className="travel-case">
        <span />
      </div>

      <div className="learning-orbit orbit-python">PY</div>
      <div className="learning-orbit orbit-vision">CV</div>
      <div className="learning-orbit orbit-api">API</div>
      <div className="learning-orbit orbit-ops">OPS</div>

      <div className="robot-arm">
        <span className="robot-base" />
        <span className="robot-joint joint-a" />
        <span className="robot-bone bone-a" />
        <span className="robot-joint joint-b" />
        <span className="robot-bone bone-b" />
        <span className="robot-claw" />
      </div>
      <div className="server-stack">
        <span />
        <span />
        <span />
      </div>

      <div className="character-trophy">
        <strong>1</strong>
        <span>ST</span>
      </div>
      <div className="celebration-ray ray-a" />
      <div className="celebration-ray ray-b" />
      <div className="celebration-ray ray-c" />
    </div>
  );
}

function CharacterTheatre({
  active,
  hero = false,
}: {
  active: number;
  hero?: boolean;
}) {
  const scene = characterScenes[active];
  const visualScene = scene.visualScene;

  return (
    <div
      className={`character-theatre theatre-${visualScene} ${hero ? "hero-theatre" : ""}`}
      style={{ "--scene": active } as CSSProperties}
    >
      <div className="theatre-grid" aria-hidden="true" />
      <div className="theatre-number" aria-hidden="true">
        0{active + 1}
      </div>
      <div className="theatre-role">
        <span>{scene.years}</span>
        <strong>{scene.role}</strong>
      </div>
      <SceneProps scene={visualScene} />
      <CharacterFigure scene={visualScene} />
      <div className="character-voice" key={active}>
        <span>SEPEHR MORTAZAVI · {scene.place}</span>
        <p>{scene.speech}</p>
      </div>
      {!hero && (
        <div className="theatre-progress" aria-label={`Stage ${active + 1} of 5`}>
          {characterScenes.map((item, index) => (
            <span className={index === active ? "active" : ""} key={item.role} />
          ))}
        </div>
      )}
    </div>
  );
}

function EngineeringDossier({
  active,
  hero = false,
}: {
  active: number;
  hero?: boolean;
}) {
  const scene = characterScenes[active];

  return (
    <div className={`engineering-dossier ${hero ? "dossier-hero" : ""}`}>
      <div className="dossier-header">
        <span>PROFESSIONAL RECORD</span>
        <span>0{active + 1} / 05</span>
      </div>
      <div className="dossier-index" aria-hidden="true">
        0{active + 1}
      </div>
      <div className="dossier-content" key={scene.role}>
        <p>{scene.years}</p>
        <h2>{scene.role}</h2>
        <span>{scene.place}</span>
        <div className="dossier-rule" />
        <p className="dossier-summary">{scene.speech}</p>
      </div>
      <div className="dossier-capabilities" aria-label="Core engineering capabilities">
        <span>AI SYSTEMS</span>
        <span>MLOPS</span>
        <span>COMPUTER VISION</span>
        <span>ROBOTICS</span>
      </div>
      <div className="dossier-progress" aria-label={`Record ${active + 1} of 5`}>
        {characterScenes.map((item, index) => (
          <i className={index === active ? "active" : ""} key={item.role} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const setProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.chapter);
          setActiveChapter(index);
        }
      },
      { rootMargin: "-30% 0px -38% 0px", threshold: [0.1, 0.35, 0.7] },
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((item) => revealObserver.observe(item));
    document
      .querySelectorAll("[data-chapter]")
      .forEach((item) => chapterObserver.observe(item));

    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("resize", setProgress);

    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setProgress);
      revealObserver.disconnect();
      chapterObserver.disconnect();
    };
  }, []);

  return (
    <main id="top">
      <a className="skip-link" href="#story">
        Skip to professional development
      </a>

      <div className="scroll-meter" aria-hidden="true">
        <span />
      </div>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to the beginning">
          SM<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Development</a>
          <a href="#work">Projects</a>
          <a href="#principles">Methods</a>
        </nav>
        <a className="header-contact" href="#contact">
          Contact <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-copy">
          <div className="hero-kicker reveal-now">
            <span className="availability-dot" />
            AI &amp; MLOps Engineer · Germany
          </div>
          <h1 id="hero-title" className="reveal-now reveal-delay-1">
            AI &amp; MLOps engineer
            <span>building dependable systems.</span>
          </h1>
          <p className="hero-lede reveal-now reveal-delay-2">
            Computer vision, robotics and production infrastructure — supported
            by practical research, deployment and manufacturing experience.
          </p>
          <div className="hero-actions reveal-now reveal-delay-3">
            <a className="button button-primary" href="#story">
              Review from latest to earliest <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="/Sepehr-Mortazavi-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View the résumé <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-character-wrap reveal-now reveal-delay-2">
          <EngineeringDossier active={0} hero />
        </div>

        <div className="hero-foot reveal-now reveal-delay-3">
          <span>Scroll from latest to earliest</span>
          <span className="scroll-line" aria-hidden="true" />
          <span>NOW — 2018</span>
        </div>
      </section>

      <section className="story-intro section-shell" id="story">
        <div className="section-label" data-reveal>
          <span>00</span> PROFESSIONAL DEVELOPMENT
        </div>
        <div className="intro-statement" data-reveal>
          <p>PRESENT — 2018</p>
          <h2>Current position and preceding technical development.</h2>
        </div>
      </section>

      <section className="story character-story section-shell" aria-label="Reverse chronological professional and academic development">
        <div className="chapter-feed">
          <article
            className="story-chapter"
            id="responsibility"
            data-chapter="0"
            data-reveal
          >
            <div className="chapter-meta">
              <span>2025 — NOW</span>
              <span>OSTFALIA UNIVERSITY</span>
            </div>
            <p className="chapter-overline">STAGE ONE · UNIVERSITY RESEARCH WORK</p>
            <h3>Research work includes deployment and supervision duties.</h3>
            <p className="chapter-lede">
              At Ostfalia, I develop and deploy AI components, maintain
              GDPR-compliant Linux infrastructure and guide student teams
              through robotics and AI projects.
            </p>
            <div className="responsibility-grid">
              <div>
                <span>01</span>
                <strong>Build</strong>
                <p>Software and AI components</p>
              </div>
              <div>
                <span>02</span>
                <strong>Operate</strong>
                <p>Linux and lab infrastructure</p>
              </div>
              <div>
                <span>03</span>
                <strong>Guide</strong>
                <p>Student engineering teams</p>
              </div>
            </div>
            <p className="chapter-body">
              The role requires reproducible project structures, technical
              testing, documentation and infrastructure maintenance in addition
              to software implementation.
            </p>
          </article>

          <article
            className="story-chapter signal-chapter"
            id="signal"
            data-chapter="1"
            data-reveal
          >
            <div className="chapter-meta">
              <span>2025</span>
              <span>TUNICORN INNOVATION COMPETITION</span>
            </div>
            <p className="chapter-overline">STAGE TWO · CELLCORE</p>
            <h3>CellCore integrated computer vision and deployment.</h3>
            <p className="chapter-lede">
              CellCore received first place at the TUniCorn 2025 innovation
              competition. The project is a GDPR-compliant platform for
              microscopy cell segmentation and analysis.
            </p>
            <p className="chapter-body">
              The implementation combines Cellpose, FastAPI, on-premise GPU
              inference, Docker, Kubernetes, Helm and CI/CD.
            </p>
          </article>

          <article
            className="story-chapter"
            id="shift"
            data-chapter="2"
            data-reveal
          >
            <div className="chapter-meta">
              <span>2023 — 2026</span>
              <span>TU CLAUSTHAL</span>
            </div>
            <p className="chapter-overline">STAGE THREE · GRADUATE STUDY</p>
            <h3>Graduate study shifted my work toward AI systems.</h3>
            <p className="chapter-lede">
              The M.Sc. Digital Technologies programme at TU Clausthal covers AI
              engineering, MLOps, cyber-physical systems and production-grade
              machine-learning applications.
            </p>
            <div className="system-stack" aria-label="A progression of engineering capabilities">
              <span>MECHANICS</span>
              <i aria-hidden="true">→</i>
              <span>SOFTWARE</span>
              <i aria-hidden="true">→</i>
              <span>AI</span>
              <i aria-hidden="true">→</i>
              <span>OPERATIONS</span>
            </div>
            <p className="chapter-body">
              Project work includes computer vision, backend APIs, model
              deployment, robotics simulation and reinforcement learning.
            </p>
          </article>

          <article
            className="story-chapter"
            id="crossing"
            data-chapter="3"
            data-reveal
          >
            <div className="chapter-meta">
              <span>2021 — 2023</span>
              <span>IRAN → GERMANY</span>
            </div>
            <p className="chapter-overline">STAGE FOUR · ACADEMIC PREPARATION</p>
            <h3>Language and study preparation in Germany.</h3>
            <p className="chapter-lede">
              Between 2021 and 2023, I completed German language courses,
              university applications and academic preparation for the M.Sc.
              programme.
            </p>
            <div className="language-card">
              <div>
                <strong>C1</strong>
                <span>German</span>
              </div>
              <div>
                <strong>B2</strong>
                <span>English</span>
              </div>
              <p>
                Part-time hotel reception work included guest service,
                check-in/check-out and operational coordination in German and
                English.
              </p>
            </div>
            <p className="chapter-body">
              This period produced documented German C1 and English B2 language
              proficiency and practical experience in service coordination.
            </p>
          </article>

          <article
            className="story-chapter"
            id="origin"
            data-chapter="4"
            data-reveal
          >
            <div className="chapter-meta">
              <span>2018 — 2021</span>
              <span>ISFAHAN, IRAN</span>
            </div>
            <p className="chapter-overline">STAGE FIVE · MANUFACTURING</p>
            <h3>Manufacturing established my systems perspective.</h3>
            <p className="chapter-lede">
              From 2018 to 2021, I worked in CNC machining, injection-mould
              tooling, assembly-line coordination and quality assurance at
              Behsazanbazou Industrial Group.
            </p>
            <div className="chapter-evidence">
              <span>RESPONSIBILITIES</span>
              <strong>CNC · TOOLING · ASSEMBLY · QUALITY ASSURANCE</strong>
            </div>
            <p className="chapter-body">
              This experience introduced process tracing, tolerance management,
              production coordination and verification at the system level.
            </p>
          </article>
        </div>
        <aside className="character-stage-wrap" aria-label="Stage-specific professional record">
          <EngineeringDossier active={activeChapter} />
        </aside>
      </section>

      <section className="work section-shell" id="work">
        <div className="work-heading" data-reveal>
          <div className="section-label">
            <span>06</span> SELECTED IMPLEMENTATIONS
          </div>
          <h2>Selected technical implementations.</h2>
          <p>
            The projects below cover computer vision, robotics, full-stack
            systems and remote-sensing analysis.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index === 0 ? "project-featured" : ""}`}
              key={project.title}
              data-reveal
            >
              <a
                className="project-image"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.linkLabel}: ${project.title}`}
              >
                <img src={project.image} alt={project.imageAlt} />
                <div className="project-image-overlay" aria-hidden="true">
                  <span>{project.number}</span>
                  <span>OPEN PROJECT ↗</span>
                </div>
              </a>
              <div className="project-copy">
                <div className="project-topline">
                  <span>{project.eyebrow}</span>
                  <span>{project.number} / 04</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-outcome">
                  <span>EVIDENCE</span>
                  <strong>{project.outcome}</strong>
                </div>
                <div className="project-bottom">
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers" aria-label="Selected results">
        <div className="numbers-track">
          <div>
            <strong>85%</strong>
            <span>robot target success</span>
          </div>
          <div>
            <strong>40%</strong>
            <span>less manual print preparation</span>
          </div>
          <div>
            <strong>1st</strong>
            <span>TUniCorn 2025</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Persian · German C1 · English B2</span>
          </div>
        </div>
      </section>

      <section className="principles section-shell" id="principles">
        <div className="principles-heading" data-reveal>
          <div className="section-label">
            <span>07</span> METHODS
          </div>
          <h2>Engineering methods.</h2>
        </div>
        <div className="principle-list">
          <article data-reveal>
            <span>01</span>
            <h3>System-level analysis</h3>
            <p>
              Requirements, model behaviour, APIs, deployment constraints and
              infrastructure are evaluated as interacting system components.
            </p>
          </article>
          <article data-reveal>
            <span>02</span>
            <h3>Verification and observability</h3>
            <p>
              Testing, monitoring and documentation provide evidence for system
              behaviour and deployment status.
            </p>
          </article>
          <article data-reveal>
            <span>03</span>
            <h3>Technical communication</h3>
            <p>
              Decisions, interfaces and operating procedures are documented for
              project teams, supervisors and future maintainers.
            </p>
          </article>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="contact-copy" data-reveal>
          <p>CONTACT</p>
          <h2>
            Open to engineering roles and research collaboration.
            <span>AI/ML engineering · MLOps · robotics.</span>
          </h2>
        </div>
        <div className="contact-actions" data-reveal>
          <a className="contact-email" href="mailto:msepehr812@gmail.com">
            <span>EMAIL</span>
            <strong>msepehr812@gmail.com</strong>
            <Arrow />
          </a>
          <div className="contact-links">
            <a
              href="https://github.com/SepehrMortazavi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a
              href="https://linkedin.com/in/sepehr-mortazavi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2026 Seyed Sepehr Mortazavi</span>
        <span>CLAUSTHAL-ZELLERFELD · GERMANY</span>
        <a href="#top">Return to the beginning ↑</a>
      </footer>
    </main>
  );
}
