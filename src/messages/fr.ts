const messages = {
  meta: {
    description:
      "Hexamind vous accompagne dans vos projets de transformation IA : conseil, développement sur mesure et modules d'IA propriétaires (Hexgate, Pascal, zeAgent, Fastprop).",
    vision: {
      title: "Vision",
      description:
        "L'IA, une promesse qui reste à réaliser ? Notre vision pour faire de l'IA un succès en entreprise.",
    },
    offres: {
      title: "Nos offres",
      description:
        "Conseil, développement et modules IA : nos offres pour faire de l'IA un succès dans votre organisation.",
    },
    qui: {
      title: "Qui sommes-nous",
      description:
        "Hexamind : nos valeurs, notre équipe et notre engagement pour une IA maîtrisée au bénéfice de tous.",
    },
    rejoindre: {
      title: "Nous rejoindre",
      description:
        "Rejoignez Hexamind : autonomie radicale, stack de pointe, culture produit et excellence durable.",
    },
    contact: {
      title: "Contact",
      description:
        "Discutons de votre projet d'IA. Notre équipe vous répond sous 48 heures.",
    },
    mentions: {
      title: "Mentions légales",
      description:
        "Mentions légales du site Hexamind : éditeur, propriété intellectuelle et données personnelles.",
    },
  },

  nav: {
    vision: "Vision",
    offres: "Nos offres",
    qui: "Qui sommes-nous",
    rejoindre: "Nous rejoindre",
    hexgate: "Hexgate",
    contact: "Nous contacter",
    linkedinAria: "LinkedIn Hexamind",
    menuAria: "Menu",
  },

  languageSwitcher: {
    label: "Langue",
    fr: "FR",
    en: "EN",
  },

  footer: {
    blurb:
      "Une IA utile, maîtrisée et déployée en production, du conseil aux modules logiciels.",
    exploreTitle: "Explorer",
    contactTitle: "Contact",
    links: {
      vision: "Vision",
      offres: "Nos offres",
      qui: "Qui sommes-nous",
      rejoindre: "Nous rejoindre",
      contact: "Nous contacter",
      linkedin: "LinkedIn",
      mentions: "Mentions légales",
    },
    rights: "Tous droits réservés.",
    location: "Paris",
  },

  newsletter: {
    placeholder: "votre@email.com",
    submit: "S'abonner",
    thanks: "Merci ! Nous vous tiendrons informé.",
    ariaLabel: "Votre adresse email",
  },

  contactCta: {
    eyebrow: "TRAVAILLONS ENSEMBLE",
    title: "Une question, un projet ?",
    button: "Nous contacter",
  },

  mitStats: {
    invest: "30–40 Md$",
    investCaption: "investis dans l'IA générative",
    fivePercent: "5 %",
    fivePercentCaption: "en tirent un retour concret",
    you: "Vous",
    youCaption: "notre mission : vous mettre dans ces 5 %",
  },

  devModes: {
    eyebrow: "DÉVELOPPEMENT",
    title: "Quatre modalités d'intervention.",
    intro:
      "Nous adaptons notre mode de collaboration à la maturité de vos projets, à votre budget et à votre besoin de flexibilité.",
    principleLabel: "Principe.",
    billingLabel: "Facturation.",
    modes: [
      {
        n: "01",
        title: "Forfait",
        principle:
          "Engagement de résultat sur cahier des charges précis. Prix fixe et date de livraison.",
        billing: "Prix global défini à la signature.",
        advantages: [
          "Maîtrise totale du budget",
          "Externalisation des risques",
          "Garantie de livraison à date",
        ],
      },
      {
        n: "02",
        title: "Centre de Services",
        principle:
          "Équipe dédiée pilotée par SLA pour TMA ou développement continu.",
        billing: "Unité d'œuvre ou forfait mensuel ajustable.",
        advantages: [
          "Industrialisation",
          "Capitalisation long terme",
          "Flexibilité du volume",
        ],
      },
      {
        n: "03",
        title: "Mode Agile",
        principle:
          "Squad pluridisciplinaire (PO, Scrum Master, Devs) qui travaille par sprints.",
        billing: "Par sprint ou au temps passé, vision budgétaire macro.",
        advantages: [
          "Time-to-market accéléré",
          "Ajustement permanent",
          "Transparence totale",
        ],
      },
      {
        n: "04",
        title: "Régie",
        principle:
          "Consultants qualifiés intégrés à vos équipes, sous votre direction opérationnelle.",
        billing: "Au temps passé (TJM).",
        advantages: [
          "Souplesse et réactivité",
          "Intégration aux rituels",
          "Contrôle total de l'exécution",
        ],
      },
    ],
  },

  modules: {
    eyebrow: "MODULES IA",
    title: "Nos briques logicielles propriétaires.",
    badge: "OPEN SOURCE · MIT",
    cloudButton: "Try the cloud version →",
    githubButton: "GitHub",
    demoButton: "Demander une démo",
    dashboardAlt:
      "Hexgate — tableau de bord d'audit : chaque décision de politique (autorisée, refusée, validation requise)",
    editorAlt:
      "Hexgate — éditeur de politique : capabilities, contraintes sur les arguments et permissions résolues par rôle",
    pascalPreviewAlt: "Aperçu de Pascal, voir la vidéo de présentation",
    hexgate: {
      name: "Hexgate",
      tagline: "L'autorisation de vos agents IA",
      bodyShort:
        "Autorisation par utilisateur pour les agents IA. Chaque appel d'outil est filtré selon le rôle de l'appelant. La policy est appliquée en local, depuis un bundle WASM signé, et chaque décision part dans le journal d'audit.",
      body:
        "Autorisation par utilisateur pour les agents IA : chaque appel d'outil est filtré selon le rôle de l'appelant, via une policy appliquée en local depuis un bundle WASM signé, sans latence ajoutée. Chaque décision (autoriser, refuser, validation requise) part dans le journal d'audit. Compatible OpenAI Agents, LangChain, Google ADK et Pydantic AI.",
      benefits: [
        "Contrôle fin : rôles, contraintes sur les arguments et décisions typées (allow / deny / approval-required)",
        "Zéro latence ajoutée : la policy est évaluée en local, depuis un bundle WASM signé",
        "Traçabilité : chaque décision est journalisée avec l'identité de l'appelant",
      ],
    },
    pascal: {
      name: "Pascal",
      tagline: "Le cadre pour vos projets d'IA",
      body:
        "Pascal accélère l'urbanisation de vos projets d'IA en isolant des parties aux rythmes d'évolution différents et en mutualisant des éléments de fondation clés (gestion fine des accès, droits, UX enrichie pour les traitements documentaires).",
      benefits: [
        "Plus grande agilité : décorrélation cas d'usage / transverse / LLM",
        "UX/UI universelle enrichie : travaillez avec l'IA directement sur documents et formulaires",
        "Sécurité & gouvernance : maîtrise des droits et accès des agents",
      ],
    },
    zeagent: {
      name: "zeAgent",
      tagline: "La fabrique d'agents intelligents",
      body:
        "L'environnement complet pour maîtriser le cycle de vie de vos agents IA, de la conception à l'exploitation. Le socle indispensable d'une IA fiable et orchestrée.",
      benefits: [
        "Time-to-Market accéléré : framework optimisé pour le déploiement",
        "Sécurisation : environnement de test et monitoring rigoureux",
        "Mutualisation de l'excellence : maintenir vos agents à l'état de l'art",
      ],
    },
    fastprop: {
      name: "Fastprop",
      tagline: "Le turbo de vos réponses commerciales",
      body:
        "Fastprop analyse les cahiers des charges et, en s'appuyant sur vos propositions passées, génère des propositions itératives sous le contrôle de vos commerciaux. S'appuie sur Pascal et zeAgent.",
      benefits: [
        "Productivité immédiate : application rigoureuse de vos chartes et templates",
        "IA & agents intelligents : suggestions de plans, premiers jets, contrôles de cohérence",
        "Autonomie & fiabilité : livrables sécurisés, cycle de bid management raccourci",
      ],
    },
  },

  home: {
    hero: {
      statusPill: "IA <b>déployée en production</b>, pas juste un prototype",
      eyebrow: "HEXAMIND",
      lead:
        "Nous vous accompagnons dans vos projets de transformation IA en conseil, en développement sur mesure et grâce à nos propres modules d'IA.",
      ctaPrimary: "Discuter de votre projet",
      ctaSecondary: "Découvrir notre vision",
      disciplines: ["CONSEIL", "DÉVELOPPEMENT", "MODULES IA PROPRIÉTAIRES"],
    },
    workflow: {
      eyebrow: "NOTRE FAÇON DE TRAVAILLER",
      subtitle: "trois temps, sur vos données",
      steps: [
        { n: "01", word: "CADRER" },
        { n: "02", word: "CONSTRUIRE" },
        { n: "03", word: "INDUSTRIALISER" },
      ],
      enjeu: "votre enjeu métier",
      production: "en production",
      columns: [
        {
          title: "Cas d'usage priorisés, ROI estimé",
          body: "On cartographie les cas d'usage et on chiffre le gain attendu avec vous. Vos équipes techniques ne sont mobilisées que pour extraire les données.",
        },
        {
          title: "Du MVP à la mise en production",
          body: "Maquettes sur données réelles en cycles courts, puis développement sur mesure jusqu'au déploiement.",
        },
        {
          title: "Droits, rôles et audit",
          body: "Nos modules prennent le relais : Hexgate pour l'autorisation et la traçabilité, Pascal, zeAgent et Fastprop pour le reste.",
        },
      ],
      credibility: "DES ÉQUIPES QUI ONT DÉJÀ LIVRÉ",
      schools: ["Polytechnique", "Stanford", "Supaéro", "Accenture", "Sopra Steria"],
      doctorats: "+ doctorats",
    },
    conseil: {
      eyebrow: "CONSEIL",
      title: "Trois façons de démarrer.",
      intro:
        "Cadrer, acculturer, prototyper : le point d'entrée dépend de votre maturité.",
      more: "En savoir plus",
      cards: [
        {
          id: "startai",
          name: "STARTAI",
          tagline: "AUDIT IA & DIAGNOSTIC DE MATURITÉ",
          desc: "L'étape préalable indispensable pour prioriser les initiatives à fort ROI, éviter les investissements inutiles et poser des bases solides.",
        },
        {
          id: "boostai",
          name: "BOOSTAI",
          tagline: "ACCULTURATION & FORMATION IA",
          desc: "Trois parcours progressifs selon votre maturité, pour rendre vos équipes autonomes avec l'IA dès le premier jour.",
        },
        {
          id: "buildai",
          name: "BUILDAI",
          tagline: "PROTOTYPAGE & EXPÉRIMENTATION",
          desc: "Transforme votre cas d'usage prioritaire en solution concrète, testée par vos utilisateurs et mesurée en euros.",
        },
      ],
    },
    clients: {
      eyebrow: "RÉFÉRENCES",
      title: "Ils nous font confiance.",
    },
  },

  vision: {
    eyebrow: "VISION",
    h1: "L'IA, une promesse qui reste à réaliser ?",
    intro1:
      "L'Intelligence Artificielle est une réalité opérationnelle et un <b>moteur de transformation</b> majeur pour les organisations. En permettant aux machines de simuler des capacités cognitives humaines, l'IA remodèle fondamentalement la manière dont les organisations fonctionnent, interagissent avec leurs clients ou usagers et créent de la valeur. Pourtant son essor au sein des organisations reste décevant par rapport aux attentes générées par les offres grand public.",
    intro2:
      "Un récent rapport du MIT* indique que malgré un investissement massif estimé entre 30 et 40 milliards de dollars dans l'IA générative, <b>seulement 5 %</b> des organisations obtiendraient un retour concret. Ce chiffre de 5 % est accablant dans un contexte où l'IA démontre ses extraordinaires capacités et est adoptée simplement pour des usages de plus en plus variés et complexes. Ce même rapport indique que <b>40 %</b> des projets s'appuyant sur l'IA « General Purpose » (ex. ChatGPT, Claude) ont un retour positif. Parmi les raisons invoquées : la flexibilité, la simplicité et l'utilité directement perceptible des outils grand public.",
    defi: {
      eyebrow: "LE DÉFI",
      title:
        "Faire entrer la dynamique des offres « General Purpose » au cœur des organisations.",
      forcesTitle: "Les forces de l'IA « General Purpose »",
      forces: [
        "<b>Simple</b> : un accès facile à une application puissante.",
        "<b>Quasi-gratuite</b> : coûts d'usage marginaux pour l'utilisateur.",
        "<b>Apprenante</b> : mémoire des conversations.",
        "<b>Évolutive</b> : versions remplacées en transparence.",
      ],
      constraintsTitle: "Les contraintes des organisations",
      constraints: [
        "<b>Accès</b> : l'agent IA doit accéder aux données et applications, en respectant les droits.",
        "<b>Gouvernance & souveraineté</b> : maîtriser qui accède à quoi, éviter les fuites de données, suivre le cycle de vie des agents.",
        "<b>UX évoluée</b> : rester universel tout en s'enrichissant pour des cas d'usage métiers.",
      ],
    },
    obstacles: {
      eyebrow: "TROIS OBSTACLES",
      title: "Ce qui empêche un déploiement fluide en entreprise.",
      items: [
        {
          n: "01",
          title: "Vitesse",
          tags: ["Build initial + évolutions", "Cas d'usage incrémental"],
          body: "Les projets d'IA sont trop longs. Une partie « informatique » liée au déploiement de l'infrastructure et des couches non fonctionnelles (administration, sécurité, observabilité, etc.) hérite naturellement des contraintes de toute application en entreprise. Mais les évolutions du noyau d'IA et l'ajout incrémental de nouveaux cas d'usage peuvent et doivent être accélérés.",
        },
        {
          n: "02",
          title: "UX",
          tags: [
            "Les utilisateurs ont besoin de plus qu'un chat",
            "Une UX, plusieurs cas d'usage",
          ],
          body: "Une des clés de la réussite de ChatGPT, depuis reprise par les autres fournisseurs de modèles, réside dans la simplicité et l'universalité de son interface. L'interface dans le monde de l'entreprise doit être guidée par ce principe de simplicité et d'universalité, en intégrant des spécificités mineures pour assurer une intégration fluide dans les processus métier.",
        },
        {
          n: "03",
          title: "Confiance",
          tags: [
            "Contrôle d'accès pour les Users et les Agents",
            "Sources, explicabilité, observabilité",
          ],
          body: "La confiance est clé à la fois dans la qualité de ce qui est produit par l'IA et dans le contrôle du qui-accède-à-quoi, et en particulier en étendant ces contrôles aux agents IA.",
        },
      ],
    },
    proposition: {
      eyebrow: "LA PROPOSITION HEXAMIND",
      title: "Une architecture en trois couches qui décorrèle les évolutions.",
      layers: [
        {
          n: "01",
          title: "Une couche transverse aux différents cas d'usage",
          body: "Elle contient essentiellement la partie « logicielle » (administration, gestion des accès et des rôles, UX/UI, connecteurs, etc.) avec une vitesse d'évolution faible, une capacité d'apprentissage sur la base des usages et des fonctionnalités de fondation, mais peu spécifiques.",
        },
        {
          n: "02",
          title: "Une couche agent qui porte la logique métier",
          body: "La définition des agents s'appuie sur le concept de skills et de plugins proposé initialement par Anthropic : les agents sont spécifiés dans des dossiers selon un format normalisé et peuvent être consommés par les plateformes d'IA compatibles. Les agents peuvent donc provenir de plusieurs sources : spécifiques et dédiés à l'organisation, ou open source (ex. les plugins de gestion de documents d'Anthropic). Chaque utilisateur a accès à des agents en fonction de son rôle. Les agents peuvent être développés en interne, par des tiers ou par Hexamind.",
        },
        {
          n: "03",
          title: "Une couche LLM noyau",
          body: "En fonction des contraintes de souveraineté, les modèles peuvent être publics mondiaux (ex. OpenAI, Mistral), souverains ou privés sur la base des modèles open source (ex. Deepseek, Mistral). Le choix du LLM peut se faire dynamiquement en fonction des agents et des utilisateurs.",
        },
      ],
      buildRun:
        "En phase de <b>build</b>, les agents s'ajoutent de manière incrémentale. En phase de <b>run</b>, l'utilisateur dispose d'une interface unique, bénéficiant de la coopération de plusieurs agents en toute transparence. De nouvelles fonctionnalités peuvent être apportées sans changer l'interface.",
      banking: {
        title: "Cas d'usage bancaire",
        intro:
          "Quels gains apportés par l'approche en trois couches pour accélérer le déploiement de nouvelles applications agentiques ?",
        disclosure: "Lire la suite",
        p1: "Le schéma ci-dessous illustre des agents vus d'un employé bancaire qui dispose d'une interface unique pour différents usages.",
        p2: "De nouvelles fonctionnalités peuvent être apportées en définissant de nouvelles compétences (ex. agents, skills ou plugins) sans que l'interface soit changée pour l'utilisateur. Cette architecture permet donc de faire évoluer de manière transparente et fluide le système d'information de l'organisation.",
        imgAlt:
          "Schéma : interface unique d'un employé bancaire avec agents Pascal et LLMs",
      },
    },
    accompagnement: {
      eyebrow: "NOTRE ACCOMPAGNEMENT",
      title: "Hexamind vous accompagne à chaque étape.",
      items: [
        "Nous accompagnons la démarche globale et la définition de l'architecture générale.",
        "Nous mettons en place les fondations transverses à partir de notre socle Pascal.",
        "Nous développons des agents spécifiques à vos cas d'usage. Le code devient votre propriété.",
      ],
      link: "Voir toutes nos offres",
    },
  },

  offres: {
    eyebrow: "NOS OFFRES",
    h1: "Du conseil au déploiement, en passant par nos modules IA.",
    intro:
      "Trois familles d'offres complémentaires, à activer indépendamment ou en combinaison selon vos enjeux.",
    conseil: {
      eyebrow: "CONSEIL",
      more: "En savoir plus",
      contenu: "Le contenu",
      livrables: "Les livrables",
      pourQui: "Pour qui ?",
      offers: [
        {
          id: "startai",
          name: "STARTAI",
          tagline: "Audit IA & Diagnostic de Maturité",
          duration: "1 à 3 semaines · Forfait fermé",
          intro:
            "L'étape préalable indispensable pour prioriser les initiatives à fort ROI, éviter les investissements inutiles et poser des bases solides.",
          items: [
            "Analyse approfondie de vos données (volume, qualité, gouvernance)",
            "Cartographie des processus métiers et points de friction",
            "Évaluation de l'infrastructure et de la cybersécurité",
            "Revue des contraintes réglementaires (RGPD, AI Act)",
            "Entretiens directions métier & IT",
            "Scan des cas d'usage à fort ROI",
          ],
          deliverables: [
            "Rapport de maturité IA avec scoring détaillé",
            "3 quick-wins priorisés et chiffrés",
            "Roadmap stratégique 12–24 mois",
            "Benchmark des solutions open-source (PyTorch, LangChain, Mistral, Llama 3, Qwen)",
          ],
          forWho: "DG, DSI, Directeurs Innovation / Transformation / Opérations.",
        },
        {
          id: "boostai",
          name: "BOOSTAI",
          tagline: "Acculturation & Formation IA",
          duration: "3 jours à 3 semaines · Intra ou inter-entreprise",
          intro:
            "Trois parcours progressifs selon votre maturité, pour rendre vos équipes autonomes avec l'IA dès le premier jour.",
          items: [
            "Level 1 · Starting (1 jour) : fondamentaux IA, ML, NLP, LLM",
            "Level 2 · Building (3 à 5 jours) : ateliers pratiques, intégration Jira / Confluence / M365 / Notion",
            "Level 3 · Scaling (1 à 3 semaines) : Vibe Coding (Claude Code), agents autonomes, gouvernance LLM",
          ],
          deliverables: [
            "Supports complets (vidéos, exercices, cas réels)",
            "Kit d'adoption immédiate (templates, checklists)",
            "Certification Hexamind par niveau",
            "Coaching post-formation (2 demi-journées)",
          ],
          forWho:
            "POs, PMs, Scrum Masters, Développeurs, Lead Tech, CTO, DSI, DRH Formation.",
        },
        {
          id: "buildai",
          name: "BUILDAI",
          tagline: "Prototypage & Expérimentation",
          duration: "4 à 12 semaines · Forfait fixe ou sprint de 2 semaines",
          intro:
            "Transforme votre cas d'usage prioritaire en solution concrète, testée par vos utilisateurs et mesurée en euros.",
          items: [
            "Cadrage ultra-précis en 3 jours",
            "Préparation et anonymisation des données",
            "Développement offline/on-premise (Llama 3, Mistral, Mixtral, Qwen, Phi-3, Gemma)",
            "Sprints de 2 semaines avec tests utilisateurs",
            "Mesure continue des métriques métier",
          ],
          deliverables: [
            "MVP pleinement fonctionnel, déployable dès la fin",
            "Code source ouvert, versionné, documenté",
            "Dashboard de performance (précision, latence, coût)",
            "Rapport de preuve de valeur avec ROI chiffré",
          ],
          forWho: "Product Owners, fonctions métiers, CxO.",
        },
      ],
    },
  },

  qui: {
    eyebrow: "QUI SOMMES-NOUS",
    h1: "Amoureux d'une IA maîtrisée, au bénéfice de tous.",
    intro:
      "Early adopters ou plus récemment entrés dans le mouvement, nous sommes des passionnés de l'IA et voulons être acteurs d'une IA maîtrisée au bénéfice de tous.",
    values: {
      eyebrow: "NOS VALEURS",
      title: "Quatre principes qui nous guident.",
      items: [
        {
          title: "Impact",
          body: "Nous ne créons pas de gadgets. Nous déployons une IA utile qui transforme radicalement le business de nos clients et génère de la valeur réelle.",
        },
        {
          title: "Excellence technique",
          body: "Dans un monde qui change chaque semaine, nous maîtrisons l'état de l'art. Nous innovons en continu pour rester les guides de confiance de notre industrie.",
        },
        {
          title: "Rigueur industrielle",
          body: "Du prototype à la mise à l'échelle, nous codons pour la durée. Nos solutions sont robustes, fiables et conçues pour les exigences du monde réel.",
        },
        {
          title: "Plaisir de la belle ouvrage",
          body: "Nous sommes des artisans passionnés. Nous cultivons l'excellence technique dans une atmosphère de plaisir partagé et de fierté du travail bien fait.",
        },
      ],
    },
    team: {
      eyebrow: "L'ÉQUIPE",
      title: "Des profils complémentaires.",
      members: [
        {
          img: "/team/yves.png",
          name: "Yves PELIGRY",
          role: "CEO",
          fullRole: "Chief Executive Officer",
          bio: ["SupAéro 91, MS HEC,", "Visiting Scholar Stanford AI Lab", "ex- Thales / SSG / ACN"],
        },
        {
          img: "/team/nico.png",
          name: "Nicolas RENNERT",
          role: "CTO",
          fullRole: "Chief Technical Officer",
          bio: ["Sorbonne AI PhD", ">20 années XP et >5 years", "comme CTO en startup IA"],
        },
        {
          img: "/team/guillaume.png",
          name: "Guillaume POTEL",
          role: "CSO",
          fullRole: "Chief Services Officer",
          bio: ["Polytechnique '18", "5 années XP en startup IA"],
        },
        {
          img: "/team/quang.png",
          name: "Quang LE",
          role: "CPO",
          fullRole: "Chief Product Officer",
          bio: ["Polytechnique '15", "7 années XP en startup IA"],
        },
      ],
      note: "<b>+ 10 ingénieurs et chercheurs</b> issus des meilleures écoles et universités.",
    },
  },

  rejoindre: {
    eyebrow: "NOUS REJOINDRE",
    h1: "Construisons ensemble une IA utile et maîtrisée.",
    reasons: {
      eyebrow: "POURQUOI NOUS REJOINDRE",
      title: "Quatre raisons de nous rejoindre.",
      items: [
        {
          title: "Une autonomie radicale",
          body: "Vous n'êtes pas un rouage. Vous pilotez les choix techniques et stratégiques. Votre influence sur le projet est directe, peu importe votre ancienneté.",
        },
        {
          title: "Une stack de pointe, sans limite",
          body: "Priorité à l'open-source (Mistral, Llama, PyTorch) et accès exclusif à nos actifs propriétaires (zeAgent, Pascal, Fastprop). Vous utilisez les derniers outils d'IA (licence Claude Code). Vous ne subissez pas la stack, vous la forgez.",
        },
        {
          title: "Culture produit & cycles courts",
          body: "Sprints de 2 semaines et feedbacks terrain. Vous développez en prise directe avec les utilisateurs finaux pour itérer vite et juste.",
        },
        {
          title: "L'excellence, durablement",
          body: "Nous visons l'état de l'art dans un environnement de travail sain. Une exigence technique de haut niveau, sans compromis sur votre équilibre de vie.",
        },
      ],
    },
    jobs: {
      eyebrow: "REJOIGNEZ-NOUS !",
      title: "Nos postes ouverts.",
      list: [
        {
          title: "AI Engineer (CDI)",
          location: "Paris · Démarrage dès que possible",
          sections: [
            {
              title: "Tes missions",
              items: [
                "Intégrer des LLM dans des workflows métiers.",
                "Construire des API clean (Python/FastAPI).",
                "Piloter les choix d'architecture et l'amélioration continue du produit.",
                "Assurer un ownership total avec contact direct avec les utilisateurs finaux.",
              ],
            },
            {
              title: "Ton profil",
              items: [
                "Diplômé·e d'une école d'ingénieur (ou équivalent reconnu)",
                "Solide socle en développement logiciel back-end",
                "Première expérience concrète en IA appliquée (LLM, NLP, automatisation, RAG)",
                "Sens de la qualité, du produit et de l'impact réel",
                "À l'aise dans des environnements exigeants et peu cadrés",
              ],
            },
            {
              title: "Ce que ce poste va t'apporter",
              items: [
                "Un rôle au cœur de produits IA en production, dans une équipe exigeante et pragmatique",
                "Une montée en compétences rapide sur les sujets IA modernes",
                "Une vraie liberté technique et une exposition directe aux enjeux clients",
              ],
            },
          ],
        },
        {
          title: "AI Intern (Stage)",
          location: "Paris · 4 à 6 mois (flexible)",
          sections: [
            {
              title: "Ton rôle",
              items: [
                "Intégrer des LLM dans des workflows métiers",
                "Développer des pipelines IA avancés (RAG, agents multi-modèles, orchestration)",
                "Concevoir des APIs backend performantes (Python/FastAPI)",
                "Garantir la qualité logicielle (testing, monitoring, scalabilité)",
              ],
            },
            {
              title: "Ton profil",
              items: [
                "Étudiant·e en 4e/5e année d'école d'ingénieur (IA / Data Science / Informatique)",
                "Solides bases en algorithmique et excellente maîtrise du développement",
                "Rigueur, orientation produit, autonomie, appétence pour le clean code",
                "Une expérience en NLP/LLM et la connaissance de LangChain sont un plus",
              ],
            },
            {
              title: "Ce que ce poste va t'apporter",
              items: [
                "Une montée en compétences accélérée sur les architectures IA modernes",
                "Le mentoring d'ingénieurs IA seniors",
                "Une exposition directe aux enjeux métiers",
              ],
            },
          ],
        },
        {
          title: "Senior Account Executive (CDI)",
          location: "Paris · Démarrage dès que possible",
          sections: [
            {
              title: "Tes missions",
              items: [
                "Développement commercial : qualification, cycle de vente, appels d'offres, suivi de pipeline",
                "Avant-vente et conseil : cadrage besoin, démos, propositions, POC",
                "Structuration : process commerciaux, supports de vente, retours clients",
              ],
            },
            {
              title: "Ton profil",
              items: [
                "4 à 6 ans d'expérience en vente B2B de solutions logicielles ou services IT",
                "Expérience confirmée sur cycles de vente complexes avec multiples décideurs",
                "Maîtrise de la vente consultative, compréhension tech, autonomie, aisance rédactionnelle",
                "La connaissance du marché de l'IA et l'anglais professionnel sont un plus",
              ],
            },
            {
              title: "Ce que ce poste va t'apporter",
              items: [
                "Autonomie & impact : un rôle clé influençant directement la croissance",
                "Montée en compétences : immersion quotidienne dans les enjeux IA",
                "Rémunération attractive : variable déplafonné, perspectives rapides",
                "Co-construction : contribution à la stratégie commerciale dès le départ",
              ],
            },
          ],
        },
      ],
    },
  },

  contact: {
    eyebrow: "CONTACT",
    h1: "Parlons de votre projet.",
    intro:
      "Une question, un cadrage, une démo de nos modules : laissez-nous un message, nous revenons vers vous sous 48 heures.",
    locationLine: "Paris, France",
    linkedin: "LinkedIn",
    form: {
      name: "Nom, Prénom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer le message",
      defaultSubject: "Contact site Hexamind",
    },
  },

  mentions: {
    eyebrow: "INFORMATIONS LÉGALES",
    h1: "Mentions légales",
    editeur: {
      title: "Éditeur du site",
      lines: [
        "Hexamind",
        "Siège social : 16 rue Saint Antoine, 75004 Paris, France",
        "Email : hello@hexamind.ai",
        "Forme juridique : SAS (société par actions simplifiée)",
        "Capital social : 40 000 €",
        "RCS Paris : 947 999 793 · SIREN : 947 999 793",
        "N° TVA intracommunautaire : FR34 947 999 793",
      ],
    },
    pi: {
      title: "Propriété intellectuelle",
      body: "L'ensemble des contenus présents sur ce site (textes, images, logos, marques, vidéos, éléments graphiques) est la propriété exclusive de Hexamind ou de ses partenaires. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.",
    },
    data: {
      title: "Données personnelles",
      body1: "Les informations recueillies via le formulaire de contact font l'objet d'un traitement destiné à répondre à vos demandes. Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à hello@hexamind.ai.",
      body2:
        "Délégué à la protection des données (DPO) : Yves Péligry. Durée de conservation des données : 12 mois.",
    },
    cookies: {
      title: "Cookies",
      body: "Le site peut utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez paramétrer leur utilisation via les réglages de votre navigateur.",
    },
    responsabilite: {
      title: "Responsabilité",
      body: "Hexamind s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.",
    },
  },

  notFound: {
    eyebrow: "ERREUR 404",
    title: "Page introuvable.",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    button: "Retour à l'accueil",
  },
} as const;

export default messages;
