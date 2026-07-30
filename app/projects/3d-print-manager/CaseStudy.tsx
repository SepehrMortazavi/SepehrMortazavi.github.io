"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./case-study.module.css";

type Language = "en" | "de";

const copy = {
  en: {
    back: "Back to portfolio",
    switchLabel: "Choose language",
    eyebrow: "University group project · Public-safe case study",
    titleStart: "FROM MODEL",
    titleEmphasis: "TO MACHINE.",
    intro:
      "A shared 3D-print workflow that connects model intake, approval, slicing, printer queues, and operational monitoring in one Django-based system.",
    metrics: [
      ["06", "printers in the intended shared setup"],
      ["≈40%", "less manual preparation reported by the project"],
      ["PRIVATE", "source mirror while permissions remain unresolved"],
    ],
    screenLabel: "REAL PROJECT VIEW / LANDING PAGE",
    overviewIndex: "01 / BRIEF",
    overviewTitle: "ONE WORKFLOW. MANY HANDOFFS.",
    overviewBody:
      "Shared printing becomes difficult when requests, files, slicing settings, machine availability, and job status live in separate places. The group project was designed to make those handoffs visible and manageable.",
    overviewNote:
      "This case study describes the system and presents a sanitized portfolio mirror. It does not claim sole authorship.",
    capabilities: [
      ["INTAKE", "User accounts and model uploads create a traceable starting point."],
      ["CONTROL", "Approval, printer management, scheduling, orders, and queues share one administrative view."],
      ["AUTOMATION", "PrusaSlicer, Celery, and Redis move work from model processing toward execution."],
      ["OPERATIONS", "OctoPrint integration connects the application layer to printer status and job monitoring."],
    ],
    flowIndex: "02 / WORKFLOW",
    flowTitle: "THE ROUTE FROM FILE TO PRINT.",
    flow: ["Upload", "Review", "Slice", "Queue", "Print", "Monitor"],
    architectureIndex: "03 / SYSTEM",
    architectureTitle: "A CONNECTED OPERATIONAL STACK.",
    architectureBody:
      "The application coordinates user-facing flows, background processing, persistent state, slicing, and physical printer control. The boundaries below show the project architecture without exposing private source.",
    architecture: [
      ["INTERFACE", "Django views + templates"],
      ["APPLICATION", "Django services + REST"],
      ["STATE & QUEUES", "PostgreSQL · Redis · Celery"],
      ["FABRICATION", "PrusaSlicer · OctoPrint"],
      ["OUTPUT", "Shared printer fleet"],
    ],
    galleryIndex: "04 / INTERFACE",
    galleryTitle: "THE APP, SHOWN CLEARLY.",
    galleryIntro:
      "Real screens from the sanitized repository gallery—presented at readable scale instead of as decorative thumbnails.",
    galleryLanding: "Public landing experience",
    galleryAdmin: "Operational administration",
    galleryStatus: "System status & activity",
    galleryControl: "Queue and printer control",
    stackLabel: "TECHNICAL STACK",
    stack: [
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "PrusaSlicer",
      "OctoPrint",
      "Docker",
      "Helm",
    ],
    boundaryIndex: "05 / PUBLICATION",
    boundaryTitle: "CLEAR ABOUT THE BOUNDARY.",
    boundaryBody:
      "The repository is a private portfolio mirror of a university group project. Collaborator, university, licensing, third-party asset, and privacy questions must be resolved before any source publication. For that reason this page documents the project without linking to private code.",
    request: "Request repository access",
    resume: "Download résumé",
    footer: "Seyed Sepehr Mortazavi · AI & MLOps Engineer",
  },
  de: {
    back: "Zurück zum Portfolio",
    switchLabel: "Sprache wählen",
    eyebrow: "Hochschul-Gruppenprojekt · Öffentlich sichere Fallstudie",
    titleStart: "VOM MODELL",
    titleEmphasis: "ZUR MASCHINE.",
    intro:
      "Ein gemeinsamer 3D-Druck-Workflow, der Modellannahme, Freigabe, Slicing, Druckerwarteschlangen und Betriebsmonitoring in einem Django-basierten System verbindet.",
    metrics: [
      ["06", "Drucker im vorgesehenen gemeinsamen Setup"],
      ["≈40 %", "weniger manuelle Vorbereitung laut Projekt"],
      ["PRIVAT", "Quellcode-Spiegel bis offene Zustimmungen geklärt sind"],
    ],
    screenLabel: "ECHTE PROJEKTANSICHT / LANDINGPAGE",
    overviewIndex: "01 / AUFGABE",
    overviewTitle: "EIN WORKFLOW. VIELE ÜBERGABEN.",
    overviewBody:
      "Gemeinsam genutzter 3D-Druck wird schwierig, wenn Anfragen, Dateien, Slicing-Einstellungen, Maschinenverfügbarkeit und Jobstatus getrennt verwaltet werden. Das Gruppenprojekt sollte diese Übergaben sichtbar und steuerbar machen.",
    overviewNote:
      "Diese Fallstudie beschreibt das System und zeigt einen bereinigten Portfolio-Spiegel. Sie beansprucht keine alleinige Urheberschaft.",
    capabilities: [
      ["ANNAHME", "Benutzerkonten und Modell-Uploads schaffen einen nachvollziehbaren Startpunkt."],
      ["STEUERUNG", "Freigabe, Druckerverwaltung, Planung, Aufträge und Queues teilen eine Adminansicht."],
      ["AUTOMATISIERUNG", "PrusaSlicer, Celery und Redis führen Arbeit von der Verarbeitung zur Ausführung."],
      ["BETRIEB", "Die OctoPrint-Integration verbindet Anwendung, Druckerstatus und Jobmonitoring."],
    ],
    flowIndex: "02 / WORKFLOW",
    flowTitle: "DER WEG VON DER DATEI ZUM DRUCK.",
    flow: ["Upload", "Prüfen", "Slicen", "Queue", "Drucken", "Überwachen"],
    architectureIndex: "03 / SYSTEM",
    architectureTitle: "EIN VERBUNDENER BETRIEBS-STACK.",
    architectureBody:
      "Die Anwendung koordiniert Benutzerabläufe, Hintergrundverarbeitung, persistenten Zustand, Slicing und physische Druckersteuerung. Die folgenden Grenzen zeigen die Architektur, ohne privaten Quellcode offenzulegen.",
    architecture: [
      ["OBERFLÄCHE", "Django Views + Templates"],
      ["ANWENDUNG", "Django Services + REST"],
      ["DATEN & QUEUES", "PostgreSQL · Redis · Celery"],
      ["FERTIGUNG", "PrusaSlicer · OctoPrint"],
      ["AUSGABE", "Gemeinsam genutzte Druckerflotte"],
    ],
    galleryIndex: "04 / OBERFLÄCHE",
    galleryTitle: "DIE APP—KLAR GEZEIGT.",
    galleryIntro:
      "Echte Ansichten aus der bereinigten Repository-Galerie—lesbar präsentiert statt als dekorative Miniaturen.",
    galleryLanding: "Öffentlicher Einstieg",
    galleryAdmin: "Operative Administration",
    galleryStatus: "Systemstatus & Aktivität",
    galleryControl: "Queue- und Druckersteuerung",
    stackLabel: "TECHNISCHER STACK",
    stack: [
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "PrusaSlicer",
      "OctoPrint",
      "Docker",
      "Helm",
    ],
    boundaryIndex: "05 / VERÖFFENTLICHUNG",
    boundaryTitle: "DIE GRENZE IST KLAR.",
    boundaryBody:
      "Das Repository ist ein privater Portfolio-Spiegel eines Hochschul-Gruppenprojekts. Fragen zu Mitwirkenden, Hochschule, Lizenzen, Drittanbieter-Assets und Datenschutz müssen vor einer Quellcode-Veröffentlichung geklärt sein. Deshalb dokumentiert diese Seite das Projekt ohne Link zu privatem Code.",
    request: "Repository-Zugang anfragen",
    resume: "Lebenslauf herunterladen",
    footer: "Seyed Sepehr Mortazavi · KI- & MLOps-Engineer",
  },
} as const;

export default function CaseStudy() {
  const [language, setLanguage] = useState<Language>("en");
  const content = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <Link href="/#work" className={styles.back}>
          <span aria-hidden="true">←</span> {content.back}
        </Link>
        <span className={styles.mark}>SM<span>.</span></span>
        <div
          className={styles.language}
          role="group"
          aria-label={content.switchLabel}
        >
          {(["en", "de"] as const).map((option) => (
            <button
              type="button"
              key={option}
              aria-pressed={language === option}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1>
          <span>{content.titleStart}</span>
          <em>{content.titleEmphasis}</em>
        </h1>
        <p className={styles.intro}>{content.intro}</p>
        <div className={styles.metrics}>
          {content.metrics.map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <figure className={styles.heroScreen}>
          <figcaption>{content.screenLabel}</figcaption>
          <Image
            src="/projects/print-manager/landing-page.jpg"
            alt={content.galleryLanding}
            width={1280}
            height={2036}
            priority
          />
        </figure>
      </section>

      <section className={styles.overview}>
        <div className={styles.sectionIntro}>
          <span>{content.overviewIndex}</span>
          <h2>{content.overviewTitle}</h2>
          <div>
            <p>{content.overviewBody}</p>
            <small>{content.overviewNote}</small>
          </div>
        </div>
        <div className={styles.capabilityGrid}>
          {content.capabilities.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.flow}>
        <div className={styles.flowHeading}>
          <span>{content.flowIndex}</span>
          <h2>{content.flowTitle}</h2>
        </div>
        <ol>
          {content.flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < content.flow.length - 1 ? <i>→</i> : null}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.architecture}>
        <div className={styles.sectionIntro}>
          <span>{content.architectureIndex}</span>
          <h2>{content.architectureTitle}</h2>
          <p>{content.architectureBody}</p>
        </div>
        <div className={styles.architectureMap}>
          {content.architecture.map(([label, value], index) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              {index < content.architecture.length - 1 ? (
                <i aria-hidden="true">↓</i>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.sectionIntro}>
          <span>{content.galleryIndex}</span>
          <h2>{content.galleryTitle}</h2>
          <p>{content.galleryIntro}</p>
        </div>

        <figure className={styles.fullScreen}>
          <figcaption>01 / {content.galleryLanding}</figcaption>
          <Image
            src="/projects/print-manager/landing-page.jpg"
            alt={content.galleryLanding}
            width={1280}
            height={2036}
          />
        </figure>

        <figure className={`${styles.fullScreen} ${styles.adminScreen}`}>
          <figcaption>02 / {content.galleryAdmin}</figcaption>
          <Image
            src="/projects/print-manager/admin-dashboard.jpg"
            alt={content.galleryAdmin}
            width={1280}
            height={2024}
          />
        </figure>

        <div className={styles.detailGrid}>
          <figure>
            <figcaption>{content.galleryStatus}</figcaption>
            <div className={styles.cropTop}>
              <Image
                src="/projects/print-manager/admin-dashboard.jpg"
                alt={content.galleryStatus}
                width={1280}
                height={2024}
              />
            </div>
          </figure>
          <figure>
            <figcaption>{content.galleryControl}</figcaption>
            <div className={styles.cropBottom}>
              <Image
                src="/projects/print-manager/admin-dashboard.jpg"
                alt={content.galleryControl}
                width={1280}
                height={2024}
              />
            </div>
          </figure>
        </div>
      </section>

      <section className={styles.stack}>
        <span>{content.stackLabel}</span>
        <div>
          {[...content.stack, ...content.stack].map((item, index) => (
            <strong key={`${item}-${index}`}>
              {item}
              <i>×</i>
            </strong>
          ))}
        </div>
      </section>

      <section className={styles.boundary}>
        <span>{content.boundaryIndex}</span>
        <h2>{content.boundaryTitle}</h2>
        <p>{content.boundaryBody}</p>
        <div className={styles.actions}>
          <a href="mailto:msepehr812@gmail.com?subject=Request%20access%20to%203D%20Print%20Management%20portfolio">
            {content.request} <span aria-hidden="true">↗</span>
          </a>
          <a href="/Sepehr-Mortazavi-CV.pdf" download>
            {content.resume} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026</span>
        <strong>{content.footer}</strong>
        <a href="#top">↑</a>
      </footer>
    </main>
  );
}
