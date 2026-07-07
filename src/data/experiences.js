export const experiences = [
  {
    id: 1,
    title: {
      fr: "Analyste SOC N1/N2 — Alternance",
      en: "SOC Analyst N1/N2 — Apprenticeship",
    },
    company: "ITrust",
    location: "La Défense, Paris",
    type: { fr: "Alternance", en: "Apprenticeship" },
    period: "Sept. 2025 — Présent",
    metrics: [
      { value: "+200", label: { fr: "alertes/jour", en: "alerts/day" } },
      { value: "6-7", label: { fr: "clients gérés", en: "clients managed" } },
    ],
    bullets: {
      fr: [
        "Analyse et traitement d'alertes de sécurité (+200/jour)",
        "Gestion en simultané de 6 à 7 clients",
        "Participation, à mon initiative, aux comités techniques des clients gérés",
        "Participation, à mon initiative, au comité de pilotage avec le RSSI d'un client et création d'un dashboard Graylog de suivi",
        "Assistance à la mise en place d'un workflow d'automatisation IA de traitement d'alertes sur Mindflow",
        "Rédaction de documents techniques",
      ],
      en: [
        "Security alert analysis and triage (+200/day)",
        "Simultaneous management of 6 to 7 client accounts",
        "Self-initiated participation in client technical committees",
        "Self-initiated participation in a client's steering committee with the CISO, including a Graylog monitoring dashboard",
        "Support for an AI-driven alert automation workflow on Mindflow",
        "Technical documentation writing",
      ],
    },
    tools: [
      "Reveelium",
      "Eset",
      "TrendMicro",
      "SentinelOne",
      "AbuseIPDB",
      "VirusTotal",
      "Grafana",
      "Graylog",
      "Mindflow",
    ],
  },
  {
    id: 2,
    title: {
      fr: "Analyste SOC — Stage technique (1 mois)",
      en: "SOC Analyst — Technical Internship (1 month)",
    },
    company: "DMG Media",
    location: "Londres, Royaume-Uni",
    type: { fr: "Stage", en: "Internship" },
    period: "Août — Sept. 2025",
    bullets: {
      fr: [
        "Analyse et investigation d'e-mails suspects (spam/phishing)",
        "Traitement des alertes de sécurité et participation aux processus internes",
        "Veille active en cybersécurité et montée en compétences sur les outils internes",
        "Collaboration transversale avec les équipes du pôle IT",
      ],
      en: [
        "Suspicious email analysis and investigation (spam/phishing)",
        "Security alert handling and internal process participation",
        "Active cybersecurity monitoring and upskilling on internal tools",
        "Cross-functional collaboration with IT teams",
      ],
    },
    tools: ["Phishing analysis", "Security monitoring", "Threat Intelligence"],
  },
  {
    id: 3,
    title: {
      fr: "Analyste SOC N1/N2 — Stage technique (5 mois)",
      en: "SOC Analyst N1/N2 — Technical Internship (5 months)",
    },
    company: "ITrust",
    location: "La Défense, Paris",
    type: { fr: "Stage", en: "Internship" },
    period: "Nov. 2024 — Avr. 2025",
    bullets: {
      fr: ["Analyse et traitement d'alertes de sécurité"],
      en: ["Security alert analysis and triage"],
    },
    tools: ["EDR", "SIEM"],
  },
]
