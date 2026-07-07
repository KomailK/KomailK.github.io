export const projects = [
  {
    id: 1,
    icon: "infrastructure",
    title: {
      fr: "Infrastructure Sécurisée",
      en: "Secure Infrastructure",
    },
    shortDesc: {
      fr: "J'ai conçu et déployé une infrastructure réseau sécurisée, du firewall à l'annuaire Active Directory.",
      en: "I designed and deployed a secure network infrastructure, from the firewall to the Active Directory.",
    },
    fullDesc: {
      fr: "En tant que chef d'une équipe de cinq personnes, j'ai conçu et déployé une infrastructure réseau sécurisée : configuration d'un firewall Pfsense, mise en place d'un serveur de fichiers Windows et gestion de l'Active Directory pour l'ensemble des flux réseau.",
      en: "As lead of a five-person team, I designed and deployed a secure network infrastructure: Pfsense firewall configuration, Windows file server setup, and Active Directory management for all network flows.",
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
      fr: "J'ai développé un script Python qui automatise la reconnaissance et la génération de rapports d'audit de sécurité.",
      en: "I developed a Python script that automates reconnaissance and security audit report generation.",
    },
    fullDesc: {
      fr: "J'ai développé un outil Python qui automatise les phases de reconnaissance d'un audit de sécurité (Nmap, Legion) et génère un rapport structuré au format PDF, ce qui réduit le temps de rédaction manuelle.",
      en: "I developed a Python tool that automates the reconnaissance phase of a security audit (Nmap, Legion) and generates a structured PDF report, cutting down manual reporting time.",
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
      fr: "J'ai développé une messagerie client-serveur chiffrée de bout en bout avec des Sockets et SSL/TLS.",
      en: "I developed an end-to-end encrypted client-server messaging application using Sockets and SSL/TLS.",
    },
    fullDesc: {
      fr: "J'ai développé, en Python, une application de messagerie utilisant des Sockets et le protocole SSL/TLS (OpenSSL), qui garantit la confidentialité des échanges entre client et serveur.",
      en: "I developed a messaging application in Python using Sockets and the SSL/TLS protocol (OpenSSL), which ensures confidential client-server communication.",
    },
    tools: ["Python", "Socket", "SSL/TLS", "OpenSSL"],
    github: null,
    category: "development",
  },
]
