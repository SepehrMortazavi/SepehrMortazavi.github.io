"use client";

import Image from "next/image";
import { Fragment, useEffect, useState, type CSSProperties } from "react";
import {
  siteContent,
  type Language,
  type Project,
  type SiteContent,
} from "./content";

function Arrow({ direction = "diagonal" }: { direction?: "diagonal" | "down" | "right" }) {
  const glyph = direction === "down" ? "↓" : direction === "right" ? "→" : "↗";
  return (
    <span className="arrow" aria-hidden="true">
      {glyph}
    </span>
  );
}

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function OrbitStamp({ text }: { text: string }) {
  return (
    <div className="orbit-stamp" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path
            id="orbit-path"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <text>
          <textPath href="#orbit-path">{text}</textPath>
        </text>
      </svg>
      <strong>SM</strong>
    </div>
  );
}

function ProjectScene({
  project,
  index,
  total,
  generic,
}: {
  project: Project;
  index: number;
  total: number;
  generic: SiteContent["generic"];
}) {
  const mediaContents = (
    <>
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>
          {generic.case}_{project.number}
        </small>
      </div>
      <div className="project-image-wrap">
        {project.gallery ? (
          <div
            className={`project-gallery gallery-${project.gallery.length}`}
            aria-label={project.imageAlt}
          >
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1280}
                  height={1600}
                  sizes="(max-width: 800px) 88vw, 28vw"
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1100}
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        ) : null}
      </div>
      <div className="image-corner">
        {project.mediaLabel ?? generic.open}
        {project.mediaHref ? <Arrow /> : null}
      </div>
    </>
  );

  return (
    <article
      className={`project-scene tone-${project.tone}`}
      data-motion
      style={{ "--stack-index": index } as CSSProperties}
    >
      <div className="project-ghost" aria-hidden="true">
        {project.number}
      </div>

      <div className="project-copy">
        <div className="project-meta">
          <span>
            {project.number} / {String(total).padStart(2, "0")}
          </span>
          <span>{project.label}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-result">
          <span>{generic.provenResult}</span>
          <strong>{project.result}</strong>
        </div>
        {project.disclosure ? (
          <p className="project-disclosure">{project.disclosure}</p>
        ) : null}
        <ul aria-label={`${project.title}: ${generic.technologies}`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.actions.map((action) => (
            <a
              className={`project-link link-${action.emphasis ?? "primary"}`}
              href={action.href}
              key={action.href}
              target={isExternalLink(action.href) ? "_blank" : undefined}
              rel={isExternalLink(action.href) ? "noreferrer" : undefined}
            >
              {action.label} <Arrow />
            </a>
          ))}
        </div>
      </div>

      {project.mediaHref ? (
        <a
          className="project-media"
          href={project.mediaHref}
          target={isExternalLink(project.mediaHref) ? "_blank" : undefined}
          rel={isExternalLink(project.mediaHref) ? "noreferrer" : undefined}
          aria-label={`${project.mediaLabel ?? generic.open}: ${project.title}`}
        >
          {mediaContents}
        </a>
      ) : (
        <div className="project-media">{mediaContents}</div>
      )}
    </article>
  );
}

export default function Home() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [language, setLanguage] = useState<Language>("en");
  const content = siteContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "de"
        ? "Seyed Sepehr Mortazavi — KI- & MLOps-Engineer"
        : "Seyed Sepehr Mortazavi — AI & MLOps Engineer";
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-full", motionEnabled);
    return () => document.documentElement.classList.remove("motion-full");
  }, [motionEnabled]);

  useEffect(() => {
    const root = document.documentElement;
    const motionElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion]"),
    );
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.classList.add("js");

    let frame = 0;
    let pointerFrame = 0;
    let previousY = window.scrollY;
    let motionMetrics: Array<{
      element: HTMLElement;
      height: number;
      top: number;
    }> = [];

    const measureMotion = () => {
      motionMetrics = motionElements.map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element,
          height: Math.max(1, rect.height),
          top: rect.top + window.scrollY,
        };
      });
    };

    const updateMotion = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const pageMax = root.scrollHeight - viewport;
      const pageProgress = pageMax > 0 ? window.scrollY / pageMax : 0;

      root.style.setProperty("--page-progress", pageProgress.toFixed(4));
      root.classList.toggle("is-scrolled", window.scrollY > 24);
      root.dataset.direction = window.scrollY >= previousY ? "down" : "up";
      previousY = window.scrollY;

      motionMetrics.forEach(({ element, height, top }) => {
        const raw = element.classList.contains("hero")
          ? (window.scrollY - top) / height
          : (window.scrollY + viewport - top) / (viewport + height);
        const progress = Math.min(1, Math.max(0, raw));
        element.style.setProperty("--p", progress.toFixed(4));
      });
    };

    const requestMotionUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateMotion);
    };

    const handleResize = () => {
      measureMotion();
      requestMotionUpdate();
    };

    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" },
    );

    const navigationObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;

        document.querySelectorAll("[data-nav]").forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${current.target.id}`,
          );
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.35] },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    document
      .querySelectorAll("section[id]")
      .forEach((section) => navigationObserver.observe(section));

    measureMotion();
    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("pointermove", updatePointer);
      revealObserver.disconnect();
      navigationObserver.disconnect();
      root.classList.remove("js", "is-scrolled");
      delete root.dataset.direction;
    };
  }, [language]);

  return (
    <main id="top">
      <a className="skip-link" href="#work">
        {content.skip}
      </a>

      <div className="page-progress" aria-hidden="true">
        <span />
      </div>
      <div className="cursor-wash" aria-hidden="true" />

      <header className="site-header">
        <a className="logo" href="#top" aria-label={content.footer.top}>
          SM<span>.</span>
        </a>

        <nav
          aria-label={
            language === "de" ? "Hauptnavigation" : "Primary navigation"
          }
        >
          <a href="#experience" data-nav>
            {content.navigation.experience}
          </a>
          <a href="#work" data-nav>
            {content.navigation.work}
          </a>
          <a href="#skills" data-nav>
            {content.navigation.skills}
          </a>
        </nav>

        <div className="header-actions">
          <div
            className="language-switcher"
            role="group"
            aria-label={content.controls.language}
          >
            {(["en", "de"] as const).map((option) => (
              <button
                type="button"
                key={option}
                aria-pressed={language === option}
                aria-label={
                  option === "en"
                    ? "English"
                    : language === "de"
                      ? "Deutsch"
                      : "German"
                }
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="motion-toggle"
            type="button"
            aria-pressed={motionEnabled}
            onClick={() => setMotionEnabled((enabled) => !enabled)}
          >
            <span aria-hidden="true" />
            {content.controls.motion}{" "}
            {motionEnabled ? content.controls.on : content.controls.off}
          </button>
          <a className="header-cta" href="#contact">
            {content.controls.talk} <Arrow />
          </a>
        </div>
      </header>

      <section
        className="hero"
        id="intro"
        data-motion
        aria-labelledby="hero-title"
      >
        <div className="hero-rules" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-topline">
          <span>{content.hero.role}</span>
          <span>{content.hero.location}</span>
          <span>{content.hero.availability}</span>
        </div>

        <h1 id="hero-title">
          <span className="name-row name-row-one">
            <i>SEPEHR</i>
            <small>{content.hero.engineering}</small>
          </span>
          <span className="name-row name-row-two">
            <small>{content.hero.intelligence}</small>
            <i>MORTAZAVI</i>
          </span>
        </h1>

        <div className="hero-bottom">
          <p>
            {content.hero.leadStart}
            <strong>{content.hero.models}</strong>
            {content.hero.betweenModelsAndSoftware}
            <strong>{content.hero.software}</strong>
            {content.hero.betweenSoftwareAndOperations}
            <strong>{content.hero.operations}</strong>
            {content.hero.leadEnd}
          </p>
          <div className="hero-actions">
            <a
              className="resume-download"
              href="/Sepehr-Mortazavi-CV.pdf"
              download
            >
              <span>
                <strong>{content.hero.download}</strong>
                <small>{content.hero.downloadMeta}</small>
              </span>
              <Arrow direction="down" />
            </a>
            <a className="hero-scroll-link" href="#experience">
              {content.hero.scroll} <Arrow direction="down" />
            </a>
          </div>
        </div>

        <OrbitStamp text={content.hero.orbit} />

        <div className="hero-scroll-line" aria-hidden="true">
          <span />
          <small>SCROLL</small>
        </div>
      </section>

      <section
        className="agenda section-shell"
        data-motion
        aria-label={content.agenda.label}
      >
        <div className="agenda-heading">
          <span>{content.agenda.label}</span>
          <h2>{content.agenda.title}</h2>
        </div>
        <nav aria-label={content.agenda.label}>
          {content.agenda.items.map((item) => (
            <a href={item.href} key={item.number} data-reveal>
              <span>{item.number}</span>
              <strong>{item.label}</strong>
              <small>{item.detail}</small>
              <i aria-hidden="true">↘</i>
            </a>
          ))}
        </nav>
      </section>

      <section
        className="statement"
        data-motion
        aria-label={content.statement.aria}
      >
        <div className="statement-index">{content.statement.index}</div>
        <h2>
          <span>{content.statement.line1}</span>
          <span>
            {content.statement.line2Start}{" "}
            <em>{content.statement.line2Emphasis}</em>
          </span>
          <span>
            {content.statement.line3Start}{" "}
            <em>{content.statement.line3Emphasis}</em>
          </span>
        </h2>
        <div className="statement-notes">
          <p>{content.statement.note}</p>
          <span aria-hidden="true">↘</span>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-head" data-reveal>
          <span>01</span>
          <p>{content.experienceSection.eyebrow}</p>
          <h2>{content.experienceSection.title}</h2>
        </div>

        <div className="experience-list">
          {content.experiences.map((item) => (
            <article key={item.number} data-motion data-reveal>
              <div className="experience-number">{item.number}</div>
              <div className="experience-date">
                <strong>{item.years}</strong>
                <span>{item.company}</span>
              </div>
              <div className="experience-copy">
                <p>{item.role}</p>
                <h3>{item.headline}</h3>
                <div>
                  <p>{item.summary}</p>
                  <ul
                    aria-label={`${item.role}: ${content.generic.technologies}`}
                  >
                    {item.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="experience-arrow" aria-hidden="true">
                ↘
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="kinetic-band" data-motion aria-hidden="true">
        <div className="kinetic-track track-forward">
          {content.band.forward.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <span>{word}</span>
              {index < content.band.forward.length - 1 ? <i>→</i> : null}
            </Fragment>
          ))}
        </div>
        <div className="kinetic-track track-reverse">
          {content.band.reverse.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <span>{word}</span>
              {index < content.band.reverse.length - 1 ? <i>•</i> : null}
            </Fragment>
          ))}
        </div>
      </div>

      <section className="work" id="work">
        <div className="work-intro section-shell" data-motion>
          <div className="section-head">
            <span>02</span>
            <p>{content.workSection.eyebrow}</p>
            <h2>{content.workSection.title}</h2>
          </div>
          <p>{content.workSection.intro}</p>
        </div>

        <div className="project-stack">
          {content.projects.map((project, index) => (
            <ProjectScene
              project={project}
              index={index}
              total={content.projects.length}
              generic={content.generic}
              key={`${language}-${project.number}`}
            />
          ))}
        </div>
      </section>

      <section
        className="numbers"
        data-motion
        aria-label={content.evidence.aria}
      >
        <div className="numbers-title">
          <span>{content.evidence.index}</span>
          <h2>{content.evidence.title}</h2>
        </div>
        <div className="number-grid">
          {content.evidence.items.map((item) => (
            <div key={item.number}>
              <span>{item.number}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills section-shell" id="skills" data-motion>
        <div className="section-head" data-reveal>
          <span>04</span>
          <p>{content.skillsSection.eyebrow}</p>
          <h2>{content.skillsSection.title}</h2>
        </div>

        <div className="skills-intro">
          <p data-reveal>{content.skillsSection.intro}</p>
          <div className="skill-legend" data-reveal>
            <span>
              <i className="level-core" />
              {content.skillsSection.coreLabel}
            </span>
            <span>
              <i className="level-working" />
              {content.skillsSection.workingLabel}
            </span>
          </div>
        </div>

        <div className="skills-stage">
          <div className="skills-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">
              <span>SM / 04</span>
              <strong>{content.skillsSection.center}</strong>
            </div>
            {content.skillsSection.domains.map((domain, index) => (
              <span
                className={`orbit-node orbit-node-${index + 1}`}
                key={domain.number}
              >
                {domain.number}
              </span>
            ))}
          </div>

          <div className="skill-grid">
            {content.skillsSection.domains.map((domain) => (
              <article
                className={`skill-card skill-${domain.level}`}
                key={domain.number}
                data-reveal
              >
                <div className="skill-card-top">
                  <span>{domain.number}</span>
                  <small>
                    <i />
                    {domain.level === "core"
                      ? content.skillsSection.coreLabel
                      : content.skillsSection.workingLabel}
                  </small>
                </div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <ul aria-label={`${domain.title}: ${content.generic.technologies}`}>
                  {domain.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="learning-lane" data-reveal>
          <span>{content.skillsSection.learningLabel}</span>
          <ul>
            {content.skillsSection.learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <i aria-hidden="true">↗</i>
        </div>

        <div className="skill-ribbon" aria-hidden="true">
          {content.skillsSection.ribbon.map((word, index) => (
            <Fragment key={word}>
              <span>{word}</span>
              {index < content.skillsSection.ribbon.length - 1 ? (
                <i>×</i>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" data-motion>
        <div className="contact-word" aria-hidden="true">
          {language === "de" ? "HALLO" : "HELLO"}
        </div>
        <div className="contact-inner section-shell">
          <div className="contact-copy">
            <span>{content.contact.index}</span>
            <h2>
              {content.contact.title}
              <em>{content.contact.emphasis}</em>
            </h2>
            <p>{content.contact.body}</p>
          </div>

          <div className="contact-actions">
            <a className="email-link" href="mailto:msepehr812@gmail.com">
              <span>{content.contact.email}</span>
              <strong>msepehr812@gmail.com</strong>
              <Arrow />
            </a>
            <div>
              <a
                href="https://github.com/SepehrMortazavi"
                target="_blank"
                rel="noreferrer"
              >
                {content.contact.github} <Arrow />
              </a>
              <a
                href="https://linkedin.com/in/sepehr-mortazavi/"
                target="_blank"
                rel="noreferrer"
              >
                {content.contact.linkedin} <Arrow />
              </a>
              <a
                href="/Sepehr-Mortazavi-CV.pdf"
                download
              >
                {content.contact.resume} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2026 SEYED SEPEHR MORTAZAVI</span>
        <span>{content.footer.designed}</span>
        <a href="#top">{content.footer.top} ↑</a>
      </footer>
    </main>
  );
}
