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
    skills: string;
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
    download: string;
    downloadMeta: string;
    orbit: string;
  };
  agenda: {
    label: string;
    title: string;
    items: Array<{
      number: string;
      label: string;
      detail: string;
      href: string;
    }>;
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
  skillsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    center: string;
    coreLabel: string;
    workingLabel: string;
    learningLabel: string;
    domains: Array<{
      number: string;
      title: string;
      description: string;
      level: "core" | "working";
      tools: string[];
    }>;
    learning: string[];
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
      skills: "Skills & Tools",
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
      download: "Download résumé",
      downloadMeta: "PDF · 2 pages · German",
      orbit: "AI ENGINEERING • MLOPS • ROBOTICS • DEPLOYMENT •",
    },
    agenda: {
      label: "QUICK ACCESS",
      title: "Choose where to begin.",
      items: [
        {
          number: "01",
          label: "Study & experience",
          detail: "Research, thesis, education, and industry",
          href: "#experience",
        },
        {
          number: "02",
          label: "Selected projects",
          detail: "Seven systems with evidence and context",
          href: "#work",
        },
        {
          number: "03",
          label: "Skills & tools",
          detail: "Capabilities grouped by delivery outcome",
          href: "#skills",
        },
        {
          number: "04",
          label: "Contact",
          detail: "Roles, collaboration, and direct links",
          href: "#contact",
        },
      ],
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
        mediaHref: "/projects/3d-print-manager/",
        mediaLabel: "OPEN VISUAL CASE STUDY",
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
            label: "OPEN CASE STUDY",
            href: "/projects/3d-print-manager/",
            emphasis: "primary",
          },
          {
            label: "REQUEST REPOSITORY ACCESS",
            href: printManagementAccessUrl,
            emphasis: "secondary",
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
    skillsSection: {
      eyebrow: "SKILLS & TOOLS",
      title: "THE STACK BEHIND THE SYSTEMS.",
      intro:
        "A capability map grouped by what each tool helps me deliver—not a wall of disconnected keywords.",
      center: "SYSTEMS",
      coreLabel: "Core toolkit",
      workingLabel: "Working knowledge",
      learningLabel: "Currently expanding",
      domains: [
        {
          number: "01",
          title: "AI & VISION",
          description:
            "From image pipelines and segmentation experiments to usable inference interfaces.",
          level: "core",
          tools: ["Python", "PyTorch", "Cellpose", "OpenCV", "NumPy", "Gradio"],
        },
        {
          number: "02",
          title: "PLATFORM & MLOPS",
          description:
            "Reproducible services, container orchestration, delivery pipelines, and Linux operations.",
          level: "core",
          tools: ["Docker", "Kubernetes", "Helm", "GitLab CI", "Linux", "Git"],
        },
        {
          number: "03",
          title: "BACKEND & DATA",
          description:
            "APIs, queues, persistence, and service boundaries for dependable technical products.",
          level: "core",
          tools: ["FastAPI", "Django", "REST", "PostgreSQL", "Redis", "Celery"],
        },
        {
          number: "04",
          title: "ROBOTICS & SYSTEMS",
          description:
            "Simulation, learning-based control, and engineering practices for physical systems.",
          level: "working",
          tools: [
            "ROS2",
            "Gazebo",
            "MuJoCo",
            "Isaac Sim",
            "Requirements",
            "Agile / Scrum",
          ],
        },
      ],
      learning: ["Vision-language models", "AWS / Azure", "MLflow"],
      ribbon: [
        "MODEL",
        "SERVICE",
        "INFRASTRUCTURE",
        "OPERATION",
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
      skills: "Skills & Tools",
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
      download: "Lebenslauf herunterladen",
      downloadMeta: "PDF · 2 Seiten · Deutsch",
      orbit: "KI-ENGINEERING • MLOPS • ROBOTIK • DEPLOYMENT •",
    },
    agenda: {
      label: "SCHNELLZUGRIFF",
      title: "Womit möchten Sie beginnen?",
      items: [
        {
          number: "01",
          label: "Studium & Erfahrung",
          detail: "Forschung, Masterarbeit, Studium und Industrie",
          href: "#experience",
        },
        {
          number: "02",
          label: "Ausgewählte Projekte",
          detail: "Sieben Systeme mit Ergebnissen und Kontext",
          href: "#work",
        },
        {
          number: "03",
          label: "Skills & Tools",
          detail: "Fähigkeiten nach ihrem Nutzen gruppiert",
          href: "#skills",
        },
        {
          number: "04",
          label: "Kontakt",
          detail: "Positionen, Zusammenarbeit und direkte Links",
          href: "#contact",
        },
      ],
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
        mediaHref: "/projects/3d-print-manager/",
        mediaLabel: "VISUELLE FALLSTUDIE ÖFFNEN",
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
            label: "FALLSTUDIE ÖFFNEN",
            href: "/projects/3d-print-manager/",
            emphasis: "primary",
          },
          {
            label: "REPOSITORY-ZUGANG ANFRAGEN",
            href: printManagementAccessUrl,
            emphasis: "secondary",
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
    skillsSection: {
      eyebrow: "SKILLS & TOOLS",
      title: "DER STACK HINTER DEN SYSTEMEN.",
      intro:
        "Eine Capability Map, geordnet danach, was die Werkzeuge ermöglichen—keine Wand aus unverbundenen Schlagwörtern.",
      center: "SYSTEME",
      coreLabel: "Kernwerkzeuge",
      workingLabel: "Praxiserfahrung",
      learningLabel: "Aktuell im Ausbau",
      domains: [
        {
          number: "01",
          title: "KI & COMPUTER VISION",
          description:
            "Von Bildpipelines und Segmentierungsexperimenten bis zu nutzbaren Inferenzoberflächen.",
          level: "core",
          tools: ["Python", "PyTorch", "Cellpose", "OpenCV", "NumPy", "Gradio"],
        },
        {
          number: "02",
          title: "PLATTFORM & MLOPS",
          description:
            "Reproduzierbare Services, Container-Orchestrierung, Delivery-Pipelines und Linux-Betrieb.",
          level: "core",
          tools: ["Docker", "Kubernetes", "Helm", "GitLab CI", "Linux", "Git"],
        },
        {
          number: "03",
          title: "BACKEND & DATEN",
          description:
            "APIs, Queues, Persistenz und Servicegrenzen für zuverlässige technische Produkte.",
          level: "core",
          tools: ["FastAPI", "Django", "REST", "PostgreSQL", "Redis", "Celery"],
        },
        {
          number: "04",
          title: "ROBOTIK & SYSTEME",
          description:
            "Simulation, lernbasierte Steuerung und Engineering-Praktiken für physische Systeme.",
          level: "working",
          tools: [
            "ROS2",
            "Gazebo",
            "MuJoCo",
            "Isaac Sim",
            "Requirements",
            "Agile / Scrum",
          ],
        },
      ],
      learning: ["Vision-Language-Modelle", "AWS / Azure", "MLflow"],
      ribbon: [
        "MODELL",
        "SERVICE",
        "INFRASTRUKTUR",
        "BETRIEB",
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
