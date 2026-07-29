export type Language = "en" | "de";

export type ProjectAction = {
  label: string;
  href: string;
  emphasis?: "primary" | "secondary";
};

export type Project = {
  number: string;
  title: string;
  label: string;
  description: string;
  result: string;
  disclosure?: string;
  image?: string;
  imageAlt: string;
  mediaHref?: string;
  mediaLabel?: string;
  gallery?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  actions: ProjectAction[];
  tags: string[];
  tone: "lime" | "blue" | "peach" | "pink";
};

export type Experience = {
  number: string;
  years: string;
  company: string;
  role: string;
  headline: string;
  summary: string;
  capabilities: string[];
};

export type SiteContent = {
  skip: string;
  navigation: {
    experience: string;
    work: string;
    methods: string;
  };
  controls: {
    language: string;
    motion: string;
    on: string;
    off: string;
    talk: string;
  };
  hero: {
    role: string;
    location: string;
    availability: string;
    engineering: string;
    intelligence: string;
    leadStart: string;
    models: string;
    betweenModelsAndSoftware: string;
    software: string;
    betweenSoftwareAndOperations: string;
    operations: string;
    leadEnd: string;
    scroll: string;
    orbit: string;
  };
  statement: {
    aria: string;
    index: string;
    line1: string;
    line2Start: string;
    line2Emphasis: string;
    line3Start: string;
    line3Emphasis: string;
    note: string;
  };
  experienceSection: {
    eyebrow: string;
    title: string;
  };
  experiences: Experience[];
  band: {
    forward: string[];
    reverse: string[];
  };
  workSection: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  projects: Project[];
  evidence: {
    aria: string;
    index: string;
    title: string;
    items: Array<{
      number: string;
      value: string;
      label: string;
    }>;
  };
  methodsSection: {
    eyebrow: string;
    title: string;
    items: Array<[string, string, string]>;
    ribbon: string[];
  };
  contact: {
    index: string;
    title: string;
    emphasis: string;
    body: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
  };
  footer: {
    designed: string;
    top: string;
  };
  generic: {
    provenResult: string;
    technologies: string;
    open: string;
    case: string;
  };
};

const awardUrl =
  "https://www.tu-clausthal.de/pressemitteilungen/pressemitteilungendetail/tunicorn-2025-vier-innovative-projektideen-ausgezeichnet";
const cellCoreSoftwareUrl =
  "https://github.com/SepehrMortazavi/cell_segmentation_platfoarm";
const sustainablePrintingUrl =
  "https://github.com/SepehrMortazavi/sustainable-3d-printing-portfolio";
const sustainablePrintingGalleryUrl =
  "https://sepehrmortazavi.github.io/sustainable-3d-printing-portfolio/";
const printManagementAccessUrl =
  "mailto:msepehr812@gmail.com?subject=Request%20access%20to%203D%20Print%20Management%20portfolio";

export const siteContent: Record<Language, SiteContent> = {
  en: {
    skip: "Skip to selected work",
    navigation: {
      experience: "Experience",
      work: "Work",
      methods: "Methods",
    },
    controls: {
      language: "Choose language",
      motion: "Motion",
      on: "On",
      off: "Off",
      talk: "Let's talk",
    },
    hero: {
      role: "AI & MLOps Engineer",
      location: "Clausthal-Zellerfeld · Germany",
      availability: "Available for collaboration",
      engineering: "Engineering",
      intelligence: "Intelligence",
      leadStart: "I connect ",
      models: "models",
      betweenModelsAndSoftware: ", ",
      software: "software",
      betweenSoftwareAndOperations: ", and ",
      operations: "operations",
      leadEnd:
        " to build intelligent systems that work beyond the prototype.",
      scroll: "Scroll through my résumé",
      orbit: "AI ENGINEERING • MLOPS • ROBOTICS • DEPLOYMENT •",
    },
    statement: {
      aria: "Engineering focus",
      index: "00 / ABOUT",
      line1: "I MOVE IDEAS",
      line2Start: "FROM",
      line2Emphasis: "MODEL",
      line3Start: "TO",
      line3Emphasis: "REALITY.",
      note:
        "Computer vision, robotics, backend systems, infrastructure, and technical leadership.",
    },
    experienceSection: {
      eyebrow: "PROFESSIONAL DEVELOPMENT",
      title: "THE PATH TO PRODUCTION AI.",
    },
    experiences: [
      {
        number: "01",
        years: "2025 — PRESENT",
        company: "Ostfalia University of Applied Sciences",
        role: "University Research Work",
        headline: "AI components that survive outside the notebook.",
        summary:
          "Developing and deploying AI components, maintaining GDPR-conscious Linux infrastructure, producing technical documentation, and guiding bachelor project teams in robotics, reinforcement learning, and vision-language models.",
        capabilities: [
          "AI development",
          "Linux infrastructure",
          "Deployment",
          "Supervision",
        ],
      },
      {
        number: "02",
        years: "2025 — PRESENT",
        company: "TUniCorn · TU Clausthal",
        role: "CellCore · First-Place Innovation Venture",
        headline: "One venture. A complete automated cell environment.",
        summary:
          "Co-developed CellCore as a complete environment for living-cell research: real-time pH and oxygen monitoring, AI-assisted control, cell surveillance, analysis, and the surrounding automated setup. The team won first place and €1,000 at TUniCorn 2025, and submitted an EXIST application.",
        capabilities: [
          "Innovation concept",
          "Real-time monitoring",
          "AI control",
          "EXIST application",
        ],
      },
      {
        number: "03",
        years: "2025 — PRESENT",
        company: "Master's Thesis Project",
        role: "Cell Segmentation Platform",
        headline: "Private microscopy data. On-premises AI.",
        summary:
          "Building a separate browser-based platform for Cellpose segmentation in which microscopy images remain inside the lab network, with FastAPI services, PostgreSQL history, Docker development, and Kubernetes/GPU deployment.",
        capabilities: [
          "Cellpose",
          "FastAPI",
          "Kubernetes",
          "GDPR-conscious design",
        ],
      },
      {
        number: "04",
        years: "2023 — 2026",
        company: "Clausthal University of Technology",
        role: "M.Sc. Digital Technologies",
        headline: "From mechanical systems to production AI.",
        summary:
          "Extended a mechanical-engineering foundation into MLOps, cyber-physical systems, computer vision, robotics simulation, backend APIs, and production-grade machine learning.",
        capabilities: [
          "MLOps",
          "Computer vision",
          "Robotics",
          "Backend systems",
        ],
      },
      {
        number: "05",
        years: "2021 — 2023",
        company: "Iran → Germany",
        role: "Academic Preparation",
        headline: "A new language, country, and technical direction.",
        summary:
          "Completed language and academic preparation in Germany while working in hotel operations, building German C1, English B2, and practical service-coordination experience.",
        capabilities: [
          "German C1",
          "English B2",
          "Operations",
          "Adaptability",
        ],
      },
      {
        number: "06",
        years: "2018 — 2021",
        company: "Behsazanbazou Industrial Group",
        role: "Mechanical Manufacturing",
        headline: "Where systems thinking became physical.",
        summary:
          "Worked across CNC machining, injection-mould tooling, assembly-line coordination, and quality assurance—learning how tolerances, process tracing, and verification shape real systems.",
        capabilities: [
          "CNC",
          "Tooling",
          "Quality assurance",
          "Manufacturing",
        ],
      },
    ],
    band: {
      forward: [
        "BUILD",
        "DEPLOY",
        "OBSERVE",
        "IMPROVE",
        "BUILD",
        "DEPLOY",
      ],
      reverse: ["VISION", "ROBOTICS", "LINUX", "MLOPS", "VISION"],
    },
    workSection: {
      eyebrow: "SELECTED IMPLEMENTATIONS",
      title: "WORK THAT MOVES FROM IDEA TO IMPACT.",
      intro:
        "Seven systems across research, university work, and production. CellCore and my master's thesis are presented as the two separate projects they are.",
    },
    projects: [
      {
        number: "01",
        title: "CellCore",
        label: "INNOVATION VENTURE / TUNICORN WINNER",
        description:
          "CellCore is a standalone innovation venture for an end-to-end automated environment for living-cell research: real-time pH and oxygen monitoring, AI-assisted control, cell surveillance, analysis, and the complete surrounding setup.",
        result: "1st place · €1,000 prize · EXIST application submitted",
        disclosure:
          "CellCore is separate from the GitHub-based master's thesis project shown next.",
        image: "/projects/cellcore/tunicorn-award.jpg",
        imageAlt: "TUniCorn 2025 award ceremony at TU Clausthal",
        mediaLabel: "READ OFFICIAL AWARD ARTICLE",
        mediaHref: awardUrl,
        actions: [
          {
            label: "READ AWARD ANNOUNCEMENT",
            href: awardUrl,
            emphasis: "primary",
          },
        ],
        tags: [
          "Automated cell environment",
          "Real-time monitoring",
          "AI control",
          "Cell surveillance",
        ],
        tone: "lime",
      },
      {
        number: "02",
        title: "Cell Segmentation Platform",
        label: "MASTER'S THESIS / ON-PREMISES AI",
        description:
          "A separate master's thesis project: a browser-based Cellpose platform for uploading microscopy images, tuning segmentation parameters, and retaining masks and job history without sending sensitive image data outside the laboratory network.",
        result: "31 unit tests · Kubernetes/GPU deployment · data stays on premises",
        disclosure:
          "This GitHub repository is the master's thesis software project. It is not the CellCore venture.",
        imageAlt: "Real interface screens from the master's thesis repository",
        mediaHref: cellCoreSoftwareUrl,
        mediaLabel: "VIEW THESIS REPOSITORY",
        gallery: [
          {
            src: "/projects/thesis/landing-page.png",
            alt: "Landing page of the Cell Segmentation Platform",
            label: "LANDING PAGE",
          },
          {
            src: "/projects/thesis/segmentation-result.png",
            alt: "Cellpose segmentation result in the master's thesis platform",
            label: "SEGMENTATION RESULT",
          },
          {
            src: "/projects/thesis/history-tab.png",
            alt: "Segmentation history tab in the master's thesis platform",
            label: "JOB HISTORY",
          },
        ],
        actions: [
          {
            label: "VIEW MASTER'S THESIS REPOSITORY",
            href: cellCoreSoftwareUrl,
            emphasis: "primary",
          },
        ],
        tags: ["Cellpose", "FastAPI", "PostgreSQL", "Kubernetes"],
        tone: "blue",
      },
      {
        number: "03",
        title: "Sustainable 3D",
        label: "ACADEMIC PROJECT / SUSTAINABILITY",
        description:
          "Academic research at TU Clausthal on resource-aware FDM decisions across 15 print configurations, combining energy and material indicators with G-code toolpath reconstruction and interactive 3D analysis.",
        result: "Up to 20% energy · ≈15% material-waste potential",
        disclosure:
          "Public-safe portfolio reconstruction only. The original academic submission and data are withheld, and no reuse license is granted.",
        imageAlt: "Sustainable 3D-printing research gallery",
        mediaHref: sustainablePrintingGalleryUrl,
        mediaLabel: "OPEN LIVE GALLERY",
        gallery: [
          {
            src: "/projects/sustainable-3d/slicer-setup.jpg",
            alt: "Slicer setup from the sustainable 3D-printing study",
            label: "SLICER SETUP",
          },
          {
            src: "/projects/sustainable-3d/toolpath-analysis.jpg",
            alt: "G-code toolpath analysis from the public project portfolio",
            label: "TOOLPATH ANALYSIS",
          },
          {
            src: "/projects/sustainable-3d/orientation-result.jpg",
            alt: "Part-orientation comparison from the sustainability study",
            label: "ORIENTATION STUDY",
          },
        ],
        actions: [
          {
            label: "OPEN LIVE GALLERY",
            href: sustainablePrintingGalleryUrl,
            emphasis: "primary",
          },
          {
            label: "VIEW PUBLIC REPOSITORY",
            href: sustainablePrintingUrl,
            emphasis: "secondary",
          },
        ],
        tags: ["Cura", "G-code", "Python", "3D visualisation"],
        tone: "peach",
      },
      {
        number: "04",
        title: "3D Print Manager",
        label: "UNIVERSITY GROUP PROJECT / FULL STACK",
        description:
          "A Django workflow for shared university 3D printing: model uploads, approvals, PrusaSlicer automation, printer queues, Celery workers, and OctoPrint monitoring across a connected operational stack.",
        result:
          "In university use · up to 6 printers · ≈40% less manual preparation",
        disclosure:
          "Private portfolio mirror of a group project; no sole-authorship claim. The source remains private while collaborator, university, and licensing permissions are unresolved.",
        imageAlt: "Real interface screens from the 3D Print Manager project",
        mediaLabel: "REAL PROJECT SCREENS",
        gallery: [
          {
            src: "/projects/print-manager/landing-page.jpg",
            alt: "Print AI landing page from the university project",
            label: "LANDING PAGE",
          },
          {
            src: "/projects/print-manager/admin-dashboard.jpg",
            alt: "Administration dashboard from the 3D Print Manager project",
            label: "ADMIN DASHBOARD",
          },
        ],
        actions: [
          {
            label: "REQUEST REPOSITORY ACCESS",
            href: printManagementAccessUrl,
            emphasis: "primary",
          },
        ],
        tags: ["Django", "Celery", "PrusaSlicer", "OctoPrint"],
        tone: "blue",
      },
      {
        number: "05",
        title: "Robot-Arm RL",
        label: "ROBOTICS / REINFORCEMENT LEARNING",
        description:
          "Simulation-based robot-arm training and control across ROS2, Gazebo, MuJoCo, and a reinforcement-learning workflow.",
        result: "≈85% target-approach success · 1,000+ episodes",
        image: "/projects/robotics-dashboard.png",
        imageAlt: "Robot-arm reinforcement-learning control interface",
        mediaHref: "https://github.com/SepehrMortazavi/robotics_app",
        actions: [
          {
            label: "VIEW REPOSITORY",
            href: "https://github.com/SepehrMortazavi/robotics_app",
            emphasis: "primary",
          },
        ],
        tags: ["ROS2", "Gazebo", "MuJoCo", "RL"],
        tone: "pink",
      },
      {
        number: "06",
        title: "Church OS",
        label: "FULL STACK / PRODUCTION",
        description:
          "A live event, registration, and administration platform with a maintainable operational stack and production deployment.",
        result: "Live at feg-kreuzheber.de",
        image: "/projects/church-os.png",
        imageAlt: "FeG Kreuzheber production website",
        mediaHref: "https://feg-kreuzheber.de",
        actions: [
          {
            label: "OPEN LIVE SITE",
            href: "https://feg-kreuzheber.de",
            emphasis: "primary",
          },
        ],
        tags: ["Next.js", "PostgreSQL", "Docker", "Nginx"],
        tone: "lime",
      },
      {
        number: "07",
        title: "Change Detection",
        label: "REMOTE SENSING / COMPUTER VISION",
        description:
          "Multi-source satellite analysis combining vegetation indices, SAR log-ratio methods, and an interactive visual interface.",
        result: "NDVI + SAR analysis",
        image: "/projects/change-detection.png",
        imageAlt: "Satellite change-detection analysis interface",
        mediaHref:
          "https://github.com/SepehrMortazavi/iran-damage-assessment",
        actions: [
          {
            label: "VIEW REPOSITORY",
            href: "https://github.com/SepehrMortazavi/iran-damage-assessment",
            emphasis: "primary",
          },
        ],
        tags: ["OpenCV", "GDAL", "React", "Docker"],
        tone: "peach",
      },
    ],
    evidence: {
      aria: "Selected results",
      index: "03 / EVIDENCE",
      title: "RESULTS, NOT DECORATION.",
      items: [
        {
          number: "01",
          value: "1ST",
          label: "TUNICORN 2025",
        },
        {
          number: "02",
          value: "85%",
          label: "ROBOT TARGET SUCCESS",
        },
        {
          number: "03",
          value: "20%",
          label: "ENERGY-SAVING POTENTIAL",
        },
        {
          number: "04",
          value: "7",
          label: "SELECTED SYSTEMS",
        },
      ],
    },
    methodsSection: {
      eyebrow: "ENGINEERING METHOD",
      title: "HOW I BUILD.",
      items: [
        [
          "01",
          "SEE THE WHOLE SYSTEM",
          "Model, API, data, infrastructure, and operator are designed as one connected product.",
        ],
        [
          "02",
          "MAKE BEHAVIOUR VISIBLE",
          "Tests, monitoring, and documentation turn implementation into evidence.",
        ],
        [
          "03",
          "BUILD FOR THE NEXT PERSON",
          "Clear interfaces and operating procedures keep systems maintainable.",
        ],
      ],
      ribbon: [
        "RESEARCH DEPTH",
        "PRODUCTION DISCIPLINE",
        "TECHNICAL CLARITY",
      ],
    },
    contact: {
      index: "05 / CONTACT",
      title: "HAVE A SYSTEM",
      emphasis: "WORTH BUILDING?",
      body:
        "Open to AI/ML engineering roles, MLOps work, robotics projects, and research collaboration.",
      email: "EMAIL ME",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      resume: "RÉSUMÉ",
    },
    footer: {
      designed: "DESIGNED AROUND THE WORK",
      top: "BACK TO TOP",
    },
    generic: {
      provenResult: "PROVEN RESULT",
      technologies: "Technologies and methods",
      open: "OPEN",
      case: "CASE",
    },
  },
  de: {
    skip: "Zu den ausgewählten Projekten springen",
    navigation: {
      experience: "Erfahrung",
      work: "Projekte",
      methods: "Arbeitsweise",
    },
    controls: {
      language: "Sprache wählen",
      motion: "Bewegung",
      on: "An",
      off: "Aus",
      talk: "Kontakt",
    },
    hero: {
      role: "KI- & MLOps-Engineer",
      location: "Clausthal-Zellerfeld · Deutschland",
      availability: "Offen für Zusammenarbeit",
      engineering: "Technik",
      intelligence: "Intelligenz",
      leadStart: "Ich verbinde ",
      models: "Modelle",
      betweenModelsAndSoftware: ", ",
      software: "Software",
      betweenSoftwareAndOperations: " und ",
      operations: "Betrieb",
      leadEnd:
        " zu intelligenten Systemen, die über den Prototyp hinaus funktionieren.",
      scroll: "Durch meinen Lebenslauf scrollen",
      orbit: "KI-ENGINEERING • MLOPS • ROBOTIK • DEPLOYMENT •",
    },
    statement: {
      aria: "Technischer Schwerpunkt",
      index: "00 / PROFIL",
      line1: "ICH BRINGE IDEEN",
      line2Start: "VOM",
      line2Emphasis: "MODELL",
      line3Start: "IN DIE",
      line3Emphasis: "REALITÄT.",
      note:
        "Computer Vision, Robotik, Backend-Systeme, Infrastruktur und technische Führung.",
    },
    experienceSection: {
      eyebrow: "BERUFLICHE ENTWICKLUNG",
      title: "DER WEG ZU PRODUKTIVER KI.",
    },
    experiences: [
      {
        number: "01",
        years: "2025 — HEUTE",
        company: "Ostfalia Hochschule",
        role: "Wissenschaftliche Hochschularbeit",
        headline: "KI-Komponenten, die außerhalb des Notebooks bestehen.",
        summary:
          "Entwicklung und Deployment von KI-Komponenten, Pflege DSGVO-konformer Linux-Infrastruktur, technische Dokumentation sowie Betreuung von Bachelor-Projektgruppen in Robotik, Reinforcement Learning und Vision-Language-Modellen.",
        capabilities: [
          "KI-Entwicklung",
          "Linux-Infrastruktur",
          "Deployment",
          "Betreuung",
        ],
      },
      {
        number: "02",
        years: "2025 — HEUTE",
        company: "TUniCorn · TU Clausthal",
        role: "CellCore · Erstplatziertes Innovationsvorhaben",
        headline: "Ein Vorhaben. Eine vollständig automatisierte Zellumgebung.",
        summary:
          "Mitentwicklung von CellCore als vollständiger Umgebung für die Forschung an lebenden Zellen: Echtzeitüberwachung von pH-Wert und Sauerstoff, KI-gestützte Steuerung, Zellüberwachung, Analyse und das umgebende automatisierte Setup. Das Team gewann den 1. Platz und 1.000 € beim TUniCorn 2025 und reichte einen EXIST-Antrag ein.",
        capabilities: [
          "Innovationskonzept",
          "Echtzeitüberwachung",
          "KI-Steuerung",
          "EXIST-Antrag",
        ],
      },
      {
        number: "03",
        years: "2025 — HEUTE",
        company: "Masterarbeitsprojekt",
        role: "Cell Segmentation Platform",
        headline: "Private Mikroskopiedaten. KI im eigenen Netzwerk.",
        summary:
          "Entwicklung einer eigenständigen browserbasierten Plattform für Cellpose-Segmentierung, bei der Mikroskopiebilder im Labornetz bleiben—mit FastAPI-Diensten, PostgreSQL-Historie, Docker-Entwicklung und Kubernetes-/GPU-Deployment.",
        capabilities: [
          "Cellpose",
          "FastAPI",
          "Kubernetes",
          "DSGVO-bewusstes Design",
        ],
      },
      {
        number: "04",
        years: "2023 — 2026",
        company: "Technische Universität Clausthal",
        role: "M.Sc. Digital Technologies",
        headline: "Von mechanischen Systemen zu produktiver KI.",
        summary:
          "Erweiterung meines Maschinenbau-Fundaments um MLOps, cyber-physische Systeme, Computer Vision, Robotiksimulation, Backend-APIs und produktionsreifes Machine Learning.",
        capabilities: [
          "MLOps",
          "Computer Vision",
          "Robotik",
          "Backend-Systeme",
        ],
      },
      {
        number: "05",
        years: "2021 — 2023",
        company: "Iran → Deutschland",
        role: "Studienvorbereitung",
        headline: "Eine neue Sprache, ein neues Land, eine neue Richtung.",
        summary:
          "Sprachliche und akademische Vorbereitung in Deutschland sowie Tätigkeit im Hotelbetrieb. Aufbau von Deutsch C1, Englisch B2 und praktischer Erfahrung in Service und Koordination.",
        capabilities: [
          "Deutsch C1",
          "Englisch B2",
          "Betrieb",
          "Anpassungsfähigkeit",
        ],
      },
      {
        number: "06",
        years: "2018 — 2021",
        company: "Behsazanbazou Industrial Group",
        role: "Mechanische Fertigung",
        headline: "Wo Systemdenken physisch wurde.",
        summary:
          "Arbeit in CNC-Bearbeitung, Spritzgussformenbau, Montagelinienkoordination und Qualitätssicherung—mit einem praktischen Verständnis für Toleranzen, Prozessverfolgung und Verifikation.",
        capabilities: [
          "CNC",
          "Werkzeugbau",
          "Qualitätssicherung",
          "Fertigung",
        ],
      },
    ],
    band: {
      forward: [
        "BAUEN",
        "DEPLOYEN",
        "BEOBACHTEN",
        "VERBESSERN",
        "BAUEN",
        "DEPLOYEN",
      ],
      reverse: ["VISION", "ROBOTIK", "LINUX", "MLOPS", "VISION"],
    },
    workSection: {
      eyebrow: "AUSGEWÄHLTE UMSETZUNGEN",
      title: "VON DER IDEE ZUR WIRKUNG.",
      intro:
        "Sieben Systeme aus Forschung, Hochschularbeit und Produktion. CellCore und meine Masterarbeit werden als die zwei getrennten Projekte dargestellt, die sie sind.",
    },
    projects: [
      {
        number: "01",
        title: "CellCore",
        label: "INNOVATIONSVORHABEN / TUNICORN-SIEGER",
        description:
          "CellCore ist ein eigenständiges Innovationsvorhaben für eine durchgängig automatisierte Umgebung zur Forschung an lebenden Zellen: Echtzeitüberwachung von pH-Wert und Sauerstoff, KI-gestützte Steuerung, Zellüberwachung, Analyse und das vollständige umgebende Setup.",
        result: "1. Platz · 1.000 € Preisgeld · EXIST-Antrag eingereicht",
        disclosure:
          "CellCore ist von dem nachfolgenden GitHub-basierten Masterarbeitsprojekt getrennt.",
        image: "/projects/cellcore/tunicorn-award.jpg",
        imageAlt: "Preisverleihung des TUniCorn 2025 an der TU Clausthal",
        mediaLabel: "OFFIZIELLEN PREISARTIKEL LESEN",
        mediaHref: awardUrl,
        actions: [
          {
            label: "AUSZEICHNUNG ANSEHEN",
            href: awardUrl,
            emphasis: "primary",
          },
        ],
        tags: [
          "Automatisierte Zellumgebung",
          "Echtzeitüberwachung",
          "KI-Steuerung",
          "Zellüberwachung",
        ],
        tone: "lime",
      },
      {
        number: "02",
        title: "Cell Segmentation Platform",
        label: "MASTERARBEIT / ON-PREMISES-KI",
        description:
          "Ein separates Masterarbeitsprojekt: eine browserbasierte Cellpose-Plattform zum Hochladen von Mikroskopiebildern, Einstellen der Segmentierungsparameter sowie Speichern von Masken und Auftragshistorie, ohne sensible Bilddaten aus dem Labornetz zu übertragen.",
        result:
          "31 Unit-Tests · Kubernetes-/GPU-Deployment · Daten bleiben On-Premises",
        disclosure:
          "Dieses GitHub-Repository ist das Softwareprojekt meiner Masterarbeit. Es ist nicht das CellCore-Vorhaben.",
        imageAlt: "Echte Ansichten aus dem Repository der Masterarbeit",
        mediaHref: cellCoreSoftwareUrl,
        mediaLabel: "MASTERARBEITS-REPOSITORY ANSEHEN",
        gallery: [
          {
            src: "/projects/thesis/landing-page.png",
            alt: "Landingpage der Cell Segmentation Platform",
            label: "LANDINGPAGE",
          },
          {
            src: "/projects/thesis/segmentation-result.png",
            alt: "Cellpose-Segmentierungsergebnis in der Masterarbeitsplattform",
            label: "SEGMENTIERUNGSERGEBNIS",
          },
          {
            src: "/projects/thesis/history-tab.png",
            alt: "Segmentierungshistorie in der Masterarbeitsplattform",
            label: "AUFTRAGSHISTORIE",
          },
        ],
        actions: [
          {
            label: "MASTERARBEITS-REPOSITORY ANSEHEN",
            href: cellCoreSoftwareUrl,
            emphasis: "primary",
          },
        ],
        tags: ["Cellpose", "FastAPI", "PostgreSQL", "Kubernetes"],
        tone: "blue",
      },
      {
        number: "03",
        title: "Nachhaltiger 3D-Druck",
        label: "AKADEMISCHES PROJEKT / NACHHALTIGKEIT",
        description:
          "Akademische Forschungsarbeit an der TU Clausthal zu ressourcenbewussten FDM-Entscheidungen über 15 Druckkonfigurationen—mit Energie- und Materialindikatoren, Rekonstruktion von G-Code-Werkzeugwegen und interaktiver 3D-Analyse.",
        result: "Bis zu 20 % Energie · ≈15 % Materialabfall-Potenzial",
        disclosure:
          "Ausschließlich öffentlich sichere Portfolio-Rekonstruktion. Die ursprüngliche Abgabe und Daten bleiben zurückgehalten; eine Wiederverwendungslizenz wird nicht erteilt.",
        imageAlt: "Galerie der Forschungsarbeit zu nachhaltigem 3D-Druck",
        mediaHref: sustainablePrintingGalleryUrl,
        mediaLabel: "LIVE-GALERIE ÖFFNEN",
        gallery: [
          {
            src: "/projects/sustainable-3d/slicer-setup.jpg",
            alt: "Slicer-Einstellungen aus der Studie zum nachhaltigen 3D-Druck",
            label: "SLICER-SETUP",
          },
          {
            src: "/projects/sustainable-3d/toolpath-analysis.jpg",
            alt: "G-Code-Werkzeugweganalyse aus dem öffentlichen Projektportfolio",
            label: "WERKZEUGWEGANALYSE",
          },
          {
            src: "/projects/sustainable-3d/orientation-result.jpg",
            alt: "Bauteilorientierungsvergleich aus der Nachhaltigkeitsstudie",
            label: "ORIENTIERUNGSSTUDIE",
          },
        ],
        actions: [
          {
            label: "LIVE-GALERIE ÖFFNEN",
            href: sustainablePrintingGalleryUrl,
            emphasis: "primary",
          },
          {
            label: "ÖFFENTLICHES REPOSITORY",
            href: sustainablePrintingUrl,
            emphasis: "secondary",
          },
        ],
        tags: ["Cura", "G-Code", "Python", "3D-Visualisierung"],
        tone: "peach",
      },
      {
        number: "04",
        title: "3D-Druck-Manager",
        label: "HOCHSCHUL-GRUPPENPROJEKT / FULL STACK",
        description:
          "Ein Django-Workflow für gemeinsam genutzten 3D-Druck an der Hochschule: Modell-Uploads, Freigaben, PrusaSlicer-Automatisierung, Druckerwarteschlangen, Celery-Worker und OctoPrint-Monitoring in einem verbundenen Betriebssystem.",
        result:
          "An der Hochschule im Einsatz · bis zu 6 Drucker · ≈40 % weniger manuelle Vorbereitung",
        disclosure:
          "Privater Portfolio-Spiegel eines Gruppenprojekts; keine Behauptung der alleinigen Urheberschaft. Der Quellcode bleibt privat, solange Zustimmungen und Lizenzfragen nicht geklärt sind.",
        imageAlt: "Echte Ansichten aus dem Projekt 3D-Druck-Manager",
        mediaLabel: "ECHTE PROJEKTANSICHTEN",
        gallery: [
          {
            src: "/projects/print-manager/landing-page.jpg",
            alt: "Print-AI-Landingpage aus dem Hochschulprojekt",
            label: "LANDINGPAGE",
          },
          {
            src: "/projects/print-manager/admin-dashboard.jpg",
            alt: "Administrations-Dashboard des 3D-Druck-Managers",
            label: "ADMIN-DASHBOARD",
          },
        ],
        actions: [
          {
            label: "REPOSITORY-ZUGANG ANFRAGEN",
            href: printManagementAccessUrl,
            emphasis: "primary",
          },
        ],
        tags: ["Django", "Celery", "PrusaSlicer", "OctoPrint"],
        tone: "blue",
      },
      {
        number: "05",
        title: "Roboterarm RL",
        label: "ROBOTIK / REINFORCEMENT LEARNING",
        description:
          "Simulationsbasiertes Training und Steuerung eines Roboterarms mit ROS2, Gazebo, MuJoCo und einem Reinforcement-Learning-Workflow.",
        result: "≈85 % Zielannäherung · über 1.000 Episoden",
        image: "/projects/robotics-dashboard.png",
        imageAlt:
          "Reinforcement-Learning-Oberfläche zur Roboterarmsteuerung",
        mediaHref: "https://github.com/SepehrMortazavi/robotics_app",
        actions: [
          {
            label: "REPOSITORY ANSEHEN",
            href: "https://github.com/SepehrMortazavi/robotics_app",
            emphasis: "primary",
          },
        ],
        tags: ["ROS2", "Gazebo", "MuJoCo", "RL"],
        tone: "pink",
      },
      {
        number: "06",
        title: "Church OS",
        label: "FULL STACK / PRODUKTION",
        description:
          "Eine produktive Plattform für Veranstaltungen, Registrierung und Administration mit wartbarer Betriebsarchitektur und Live-Deployment.",
        result: "Live unter feg-kreuzheber.de",
        image: "/projects/church-os.png",
        imageAlt: "Produktive Website der FeG Kreuzheber",
        mediaHref: "https://feg-kreuzheber.de",
        actions: [
          {
            label: "LIVE-SEITE ÖFFNEN",
            href: "https://feg-kreuzheber.de",
            emphasis: "primary",
          },
        ],
        tags: ["Next.js", "PostgreSQL", "Docker", "Nginx"],
        tone: "lime",
      },
      {
        number: "07",
        title: "Change Detection",
        label: "FERNERKUNDUNG / COMPUTER VISION",
        description:
          "Multi-Source-Satellitenanalyse mit Vegetationsindizes, SAR-Log-Ratio-Verfahren und einer interaktiven visuellen Oberfläche.",
        result: "NDVI- + SAR-Analyse",
        image: "/projects/change-detection.png",
        imageAlt: "Oberfläche zur Analyse von Satellitenveränderungen",
        mediaHref:
          "https://github.com/SepehrMortazavi/iran-damage-assessment",
        actions: [
          {
            label: "REPOSITORY ANSEHEN",
            href: "https://github.com/SepehrMortazavi/iran-damage-assessment",
            emphasis: "primary",
          },
        ],
        tags: ["OpenCV", "GDAL", "React", "Docker"],
        tone: "peach",
      },
    ],
    evidence: {
      aria: "Ausgewählte Ergebnisse",
      index: "03 / ERGEBNISSE",
      title: "ERGEBNISSE STATT DEKORATION.",
      items: [
        {
          number: "01",
          value: "1.",
          label: "PLATZ TUNICORN 2025",
        },
        {
          number: "02",
          value: "85%",
          label: "ERFOLG BEI ZIELANNÄHERUNG",
        },
        {
          number: "03",
          value: "20%",
          label: "ENERGIEEINSPARPOTENZIAL",
        },
        {
          number: "04",
          value: "7",
          label: "AUSGEWÄHLTE SYSTEME",
        },
      ],
    },
    methodsSection: {
      eyebrow: "ENGINEERING-METHODE",
      title: "WIE ICH ARBEITE.",
      items: [
        [
          "01",
          "DAS GESAMTSYSTEM SEHEN",
          "Modell, API, Daten, Infrastruktur und Bedienung werden als ein verbundenes Produkt gestaltet.",
        ],
        [
          "02",
          "VERHALTEN SICHTBAR MACHEN",
          "Tests, Monitoring und Dokumentation machen aus Implementierung belastbare Evidenz.",
        ],
        [
          "03",
          "FÜR DIE NÄCHSTE PERSON BAUEN",
          "Klare Schnittstellen und Betriebsabläufe halten Systeme langfristig wartbar.",
        ],
      ],
      ribbon: [
        "FORSCHUNGSTIEFE",
        "PRODUKTIONSDISZIPLIN",
        "TECHNISCHE KLARHEIT",
      ],
    },
    contact: {
      index: "05 / KONTAKT",
      title: "EIN SYSTEM",
      emphasis: "DAS SICH ZU BAUEN LOHNT?",
      body:
        "Offen für Positionen im KI-/ML-Engineering, MLOps-Arbeit, Robotikprojekte und Forschungskooperationen.",
      email: "E-MAIL SENDEN",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      resume: "LEBENSLAUF",
    },
    footer: {
      designed: "UM DIE ARBEIT HERUM GESTALTET",
      top: "NACH OBEN",
    },
    generic: {
      provenResult: "NACHGEWIESENES ERGEBNIS",
      technologies: "Technologien und Methoden",
      open: "ÖFFNEN",
      case: "PROJEKT",
    },
  },
};
