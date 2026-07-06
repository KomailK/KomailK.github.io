export const projects = [
  {
    id: 1,
    icon: "infrastructure",
    title: {
      fr: "Infrastructure Sécurisée",
      en: "Secure Infrastructure",
    },
    shortDesc: {
      fr: "Conception et déploiement d'une infrastructure réseau sécurisée, du firewall à l'annuaire Active Directory.",
      en: "Design and deployment of a secure network infrastructure, from the firewall to the Active Directory.",
    },
    fullDesc: {
      fr: "En tant que chef d'une équipe de cinq personnes, conception et déploiement d'une infrastructure réseau sécurisée : configuration d'un firewall Pfsense, mise en place d'un serveur de fichiers Windows et gestion de l'Active Directory pour l'ensemble des flux réseau.",
      en: "As lead of a five-person team, design and deployment of a secure network infrastructure: Pfsense firewall configuration, Windows file server setup and Active Directory management for all network flows.",
    },
    tools: ["Pfsense", "Active Directory", "Windows Server", "Réseau"],
    github: null,
    category: "infrastructure",
  },
  {
    id: 2,
    icon: "pentest",
    title: {
      fr: "Automatisation de Pentest",
      en: "Pentest Automation",
    },
    shortDesc: {
      fr: "Script Python automatisant la reconnaissance et la génération de rapports d'audit de sécurité.",
      en: "Python script automating reconnaissance and security audit report generation.",
    },
    fullDesc: {
      fr: "Développement d'un outil Python automatisant les phases de reconnaissance d'un audit de sécurité (Nmap, Legion) et générant un rapport structuré au format PDF, réduisant le temps de rédaction manuelle.",
      en: "Development of a Python tool automating the reconnaissance phase of a security audit (Nmap, Legion) and generating a structured PDF report, cutting down manual reporting time.",
    },
    tools: ["Python", "Kali Linux", "Nmap", "Legion"],
    github: null,
    category: "offensive",
  },
  {
    id: 3,
    icon: "chat",
    title: {
      fr: "Chat Room Sécurisée",
      en: "Secure Chat Room",
    },
    shortDesc: {
      fr: "Messagerie client-serveur chiffrée de bout en bout avec Sockets et SSL/TLS.",
      en: "End-to-end encrypted client-server messaging using Sockets and SSL/TLS.",
    },
    fullDesc: {
      fr: "Application de messagerie développée en Python avec des Sockets et le protocole SSL/TLS (OpenSSL), garantissant la confidentialité des échanges entre client et serveur.",
      en: "Messaging application built in Python using Sockets and the SSL/TLS protocol (OpenSSL), ensuring confidential client-server communication.",
    },
    tools: ["Python", "Socket", "SSL/TLS", "OpenSSL"],
    github: null,
    category: "development",
  },
]
