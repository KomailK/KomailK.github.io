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
        "Analyse et triage de +200 alertes de sécurité/jour sur 6-7 comptes clients simultanés",
        "Participation à mon initiative aux comités techniques clients et au comité de pilotage avec le RSSI, aboutissant à la création d'un dashboard Graylog dédié",
        "Contribution à la mise en place d'un workflow d'automatisation des alertes sur Mindflow",
      ],
      en: [
        "Triaging and analysing 200+ security alerts a day across 6 to 7 client accounts simultaneously",
        "Self-initiated participation in client technical committees and a client's steering committee with the CISO, resulting in a dedicated Graylog dashboard",
        "Contributed to building an alert automation workflow on Mindflow",
      ],
    },
    tools: ["Reveelium", "TheHive", "SentinelOne", "Graylog", "Mindflow", "VirusTotal"],
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
        "Analyse e-mails suspects (spam/phishing)",
        "Traitement des alertes de sécurité et participation aux processus internes",
        "Veille active en cybersécurité et collaboration transversale avec les équipes du pôle IT",
      ],
      en: [
        "Suspicious email analysis (spam/phishing)",
        "Security alert handling and internal process participation",
        "Active cybersecurity monitoring and cross-functional collaboration with IT teams",
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
      fr: ["Analyse et triage de 150+ alertes de sécurité/jour sur 3 comptes clients simultanés"],
      en: ["Triaging and analysing 150+ security alerts a day across 3 client accounts"],
    },
    tools: ["Reveelium", "TheHive", "Graylog", "Gitlab", "VirusTotal"],
  },
]
