// Dati presi dal CV 2026 (IT). Unica fonte di verità per il sito.

export const person = {
  name: "Mattia Selvaggio",
  role: "Software Engineer",
  city: "Torino",
  email: "selvaggio.mattia92@gmail.com",
  linkedin: "https://www.linkedin.com/in/mattia-selvaggio",
  domain: "borntobewild.tech",
};

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  current?: boolean;
};

export const jobs: Job[] = [
  {
    company: "ClikApp S.r.l. · Toduba",
    role: "Software Engineer",
    period: "11/2025 – oggi",
    current: true,
    summary: "Pagamenti, blockchain e cloud: qui il software non può permettersi di sbagliare.",
    points: [
      "Back-end in Node.js e TypeScript, con un'architettura modulare facile da far crescere.",
      "Un issuer processor EMV su AWS Payment Cryptography: ISO 8583, TLV, ARQC/ARPC e AES-GCM.",
      "Evoluzione di un motore transazionale su blockchain proprietaria, nata da un protocollo open source.",
      "Integrazioni con vendor POS di terze parti, code AWS SQS FIFO e cache con Redis.",
      "Dati su MySQL, PostgreSQL, MongoDB e ClickHouse. Backoffice in React e Next.js.",
    ],
  },
  {
    company: "SSI Nord S.r.l.",
    role: "Lead Software Engineer",
    period: "01/2025 – 10/2025",
    summary: "Guida tecnica di un progetto full-stack, tra Angular e Java.",
    points: [
      "Interfacce in Angular, servizi in Java e Spring Boot.",
      "Database relazionali (PostgreSQL, Oracle, MySQL) e MongoDB, scelti in base al lavoro da fare.",
    ],
  },
  {
    company: "Training4U S.r.l.",
    role: "Lead Software Engineer",
    period: "05/2023 – 01/2025",
    summary: "Software per il welfare pubblico e un team da far crescere.",
    points: [
      "Web app in Angular e microservizi in Java Spring Boot.",
      "Docker e Kubernetes per arrivare in produzione. Query e funzioni su PostgreSQL e Oracle per statistiche e gestione dei dati.",
      "Dal confronto con i clienti alla documentazione: requisiti, analisi funzionali e formazione degli utenti.",
      "Coordinamento di un team di sviluppo full-stack.",
    ],
  },
  {
    company: "Freelance e primi ruoli",
    role: "Web Developer · IT Help Desk",
    period: "dal 2017",
    summary: "Dai primi passi con SAP Fiori all'assistenza a clienti in tutto il Piemonte.",
    points: [
      "Una web app per cliniche veterinarie in Vue.js.",
      "Integrazioni Angular per un servizio di food delivery, con le API di Google e Vromo.",
      "Docente di front-end per aziende esterne: ho imparato anche spiegando.",
      "Assistenza tecnica su software gestionali personalizzati.",
      "SAP Fiori e sviluppo web per Cyrius e Perabite, i miei primi ruoli.",
    ],
  },
];

export const skills = [
  { title: "Front-end", note: "Interfacce chiare, veloci, piacevoli da usare.", items: ["Angular", "React", "Next.js", "Vue.js", "TypeScript", "HTML e CSS"] },
  { title: "Back-end", note: "Servizi solidi che reggono il carico.", items: ["Node.js", "Express", "Java", "Spring Boot", "PHP"] },
  { title: "Database", note: "Dati al posto giusto, query che volano.", items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "ClickHouse"] },
  { title: "Cloud e DevOps", note: "Dal primo commit alla produzione.", items: ["AWS", "Docker", "Kubernetes", "Redis", "Git"] },
];

export const education = {
  degree: "Laurea triennale in Informatica",
  school: "Università degli Studi di Torino",
  thesis: "Nuove esperienze utente nelle interfacce mobile e web di SAP: SAP UI5 e SAP Fiori",
};

export const courses = [
  "Angular Framework, corso avanzato (Kinetikon, 2024)",
  "PostgreSQL for Developers (Kinetikon, 2024)",
  "UI/UX Design (Kinetikon, 2023)",
  "Spring Boot Framework (Kinetikon, 2022)",
  "iOS Development with Swift, base e intermedio (Swift Srl, 2018)",
];
