export const projects = [
  {
    id: 1,
    icon: "🔒",
    title: {
      fr: "Infrastructure Sécurisée",
      en: "Secure Infrastructure",
    },
    shortDesc: {
      fr: "Conception et déploiement d'une infrastructure réseau sécurisée en équipe de 5.",
      en: "Design and deployment of a secure network infrastructure in a team of 5.",
    },
    fullDesc: {
      fr: "Chef d'une équipe de 5 personnes. Implémentation d'un Filer Windows, configuration d'un Firewall Pfsense, gestion des flux réseaux et Active Directory.",
      en: "Led a 5-person team. Implemented a Windows File Server, configured Pfsense Firewall, managed network flows and Active Directory.",
    },
    tools: ["Pfsense", "Active Directory", "Windows Server", "Réseau"],
    github: null,
    category: "infrastructure",
  },
  {
    id: 2,
    icon: "🤖",
    title: {
      fr: "Automatisation de Pentest",
      en: "Pentest Automation",
    },
    shortDesc: {
      fr: "Outil d'automatisation générant des rapports d'audit de sécurité.",
      en: "Automation tool generating security audit reports.",
    },
    fullDesc: {
      fr: "Développement d'un script Python automatisant les phases de reconnaissance et de reporting lors d'audits de sécurité. Génération de rapports structurés au format PDF.",
      en: "Python script automating reconnaissance and reporting phases during security audits. Generates structured PDF reports.",
    },
    tools: ["Python", "Kali Linux", "Nmap", "Legion"],
    github: null,
    category: "offensive",
  },
  {
    id: 3,
    icon: "💬",
    title: {
      fr: "Chat Room Sécurisée",
      en: "Secure Chat Room",
    },
    shortDesc: {
      fr: "Application de chat chiffrée de bout en bout via SSL/TLS.",
      en: "End-to-end encrypted chat application using SSL/TLS.",
    },
    fullDesc: {
      fr: "Développement d'une application de messagerie sécurisée en Python utilisant les Sockets et le protocole SSL/TLS avec OpenSSL. Chiffrement des communications client-serveur.",
      en: "Secure messaging application in Python using Sockets and SSL/TLS protocol with OpenSSL. Encrypted client-server communications.",
    },
    tools: ["Python", "Socket", "SSL/TLS", "OpenSSL"],
    github: null,
    category: "development",
  },
]
