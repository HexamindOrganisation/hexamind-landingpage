const messages = {
  meta: {
    description:
      "Hexamind helps you deliver your AI transformation projects: consulting, custom development and proprietary AI modules (Hexgate, Pascal, zeAgent, Fastprop).",
    vision: {
      title: "Vision",
      description:
        "AI, a promise still to be fulfilled? Our vision for making AI a success in the enterprise.",
    },
    offres: {
      title: "Our offerings",
      description:
        "Consulting, development and AI modules: our offerings to make AI a success in your organization.",
    },
    qui: {
      title: "About us",
      description:
        "Hexamind: our values, our team and our commitment to governed AI for everyone's benefit.",
    },
    rejoindre: {
      title: "Join us",
      description:
        "Join Hexamind: radical autonomy, a cutting-edge stack, product culture and lasting excellence.",
    },
    contact: {
      title: "Contact",
      description:
        "Let's talk about your AI project. Our team replies within 48 hours.",
    },
    mentions: {
      title: "Legal notice",
      description:
        "Legal notice for the Hexamind website: publisher, intellectual property and personal data.",
    },
  },

  nav: {
    vision: "Vision",
    offres: "Our offerings",
    qui: "About us",
    rejoindre: "Join us",
    hexgate: "Hexgate",
    contact: "Get in touch",
    linkedinAria: "Hexamind on LinkedIn",
    menuAria: "Menu",
  },

  languageSwitcher: {
    label: "Language",
    fr: "FR",
    en: "EN",
  },

  footer: {
    blurb:
      "Useful, governed AI deployed in production, from consulting to software modules.",
    exploreTitle: "Explore",
    contactTitle: "Contact",
    links: {
      vision: "Vision",
      offres: "Our offerings",
      qui: "About us",
      rejoindre: "Join us",
      contact: "Get in touch",
      linkedin: "LinkedIn",
      mentions: "Legal notice",
    },
    rights: "All rights reserved.",
    location: "Paris",
  },

  newsletter: {
    placeholder: "you@email.com",
    submit: "Subscribe",
    thanks: "Thanks! We'll keep you posted.",
    ariaLabel: "Your email address",
  },

  contactCta: {
    eyebrow: "LET'S WORK TOGETHER",
    title: "A question, a project?",
    button: "Get in touch",
  },

  mitStats: {
    invest: "$30–40B",
    investCaption: "invested in generative AI",
    fivePercent: "5%",
    fivePercentCaption: "get a real return",
    you: "You",
    youCaption: "our mission: put you in that 5%",
  },

  devModes: {
    eyebrow: "DEVELOPMENT",
    title: "Four ways to engage.",
    intro:
      "We adapt how we work to your project maturity, your budget and your need for flexibility.",
    principleLabel: "Principle.",
    billingLabel: "Billing.",
    modes: [
      {
        n: "01",
        title: "Fixed price",
        principle:
          "A commitment to results against a precise specification. Fixed price and delivery date.",
        billing: "Total price agreed at signing.",
        advantages: [
          "Full budget control",
          "Risk transferred to us",
          "Guaranteed on-time delivery",
        ],
      },
      {
        n: "02",
        title: "Service Center",
        principle:
          "A dedicated team run by SLA for maintenance or continuous development.",
        billing: "Work units or an adjustable monthly retainer.",
        advantages: [
          "Industrialization",
          "Long-term capitalization",
          "Volume flexibility",
        ],
      },
      {
        n: "03",
        title: "Agile mode",
        principle:
          "A cross-functional squad (PO, Scrum Master, Devs) working in sprints.",
        billing: "Per sprint or time-and-materials, with a macro budget view.",
        advantages: [
          "Faster time-to-market",
          "Continuous adjustment",
          "Full transparency",
        ],
      },
      {
        n: "04",
        title: "Staff augmentation",
        principle:
          "Qualified consultants embedded in your teams, under your operational lead.",
        billing: "Time-and-materials (daily rate).",
        advantages: [
          "Flexibility and responsiveness",
          "Integrated into your rituals",
          "Full control of execution",
        ],
      },
    ],
  },

  modules: {
    eyebrow: "AI MODULES",
    title: "Our proprietary software building blocks.",
    badge: "OPEN SOURCE · MIT",
    cloudButton: "Try the cloud version →",
    githubButton: "GitHub",
    demoButton: "Request a demo",
    dashboardAlt:
      "Hexgate — audit dashboard: every policy decision (allowed, denied, approval required)",
    editorAlt:
      "Hexgate — policy editor: capabilities, argument constraints and permissions resolved by role",
    pascalPreviewAlt: "Pascal preview, watch the intro video",
    hexgate: {
      name: "Hexgate",
      tagline: "Authorization for your AI agents",
      bodyShort:
        "Per-user authorization for AI agents. Every tool call is filtered by the caller's role. The policy is enforced locally, from a signed WASM bundle, and every decision is written to the audit log.",
      body:
        "Per-user authorization for AI agents: every tool call is filtered by the caller's role, via a policy enforced locally from a signed WASM bundle, with no added latency. Every decision (allow, deny, approval required) is written to the audit log. Works with OpenAI Agents, LangChain, Google ADK and Pydantic AI.",
      benefits: [
        "Fine-grained control: roles, argument constraints and typed decisions (allow / deny / approval-required)",
        "Zero added latency: the policy is evaluated locally, from a signed WASM bundle",
        "Traceability: every decision is logged with the caller's identity",
      ],
    },
    pascal: {
      name: "Pascal",
      tagline: "The framework for your AI projects",
      body:
        "Pascal speeds up the structuring of your AI projects by isolating parts that evolve at different rates and by pooling key foundation elements (fine-grained access and rights management, an enriched UX for document workflows).",
      benefits: [
        "Greater agility: decoupling use case / cross-cutting / LLM",
        "Universal, enriched UX/UI: work with AI directly on documents and forms",
        "Security & governance: control over agents' rights and access",
      ],
    },
    zeagent: {
      name: "zeAgent",
      tagline: "The intelligent-agent factory",
      body:
        "The complete environment to master the lifecycle of your AI agents, from design to operations. The essential foundation for reliable, orchestrated AI.",
      benefits: [
        "Faster time-to-market: a framework optimized for deployment",
        "Hardening: a rigorous testing and monitoring environment",
        "Pooled excellence: keep your agents at the state of the art",
      ],
    },
    fastprop: {
      name: "Fastprop",
      tagline: "The turbo for your sales proposals",
      body:
        "Fastprop analyzes requirements and, drawing on your past proposals, generates iterative proposals under your sales team's control. Built on Pascal and zeAgent.",
      benefits: [
        "Immediate productivity: rigorous application of your charters and templates",
        "AI & intelligent agents: outline suggestions, first drafts, consistency checks",
        "Autonomy & reliability: secured deliverables, a shorter bid-management cycle",
      ],
    },
  },

  home: {
    hero: {
      statusPill: "AI <b>deployed in production</b>, not just a prototype",
      eyebrow: "HEXAMIND",
      lead:
        "We help you deliver your AI transformation projects: consulting, custom development and our own AI modules.",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "Discover our vision",
      disciplines: ["CONSULTING", "DEVELOPMENT", "PROPRIETARY AI MODULES"],
    },
    workflow: {
      eyebrow: "HOW WE WORK",
      subtitle: "three steps, on your data",
      steps: [
        { n: "01", word: "FRAME" },
        { n: "02", word: "BUILD" },
        { n: "03", word: "INDUSTRIALIZE" },
      ],
      enjeu: "your business challenge",
      production: "in production",
      columns: [
        {
          title: "Prioritized use cases, estimated ROI",
          body: "We map the use cases and quantify the expected gains with you. Your technical teams are only needed to extract the data.",
        },
        {
          title: "From MVP to production",
          body: "Mock-ups on real data in short cycles, then custom development through to deployment.",
        },
        {
          title: "Rights, roles and audit",
          body: "Our modules take over: Hexgate for authorization and traceability, Pascal, zeAgent and Fastprop for the rest.",
        },
      ],
      credibility: "TEAMS THAT HAVE ALREADY DELIVERED",
      schools: ["Polytechnique", "Stanford", "Supaéro", "Accenture", "Sopra Steria"],
      doctorats: "+ PhDs",
    },
    conseil: {
      eyebrow: "CONSULTING",
      title: "Three ways to start.",
      intro:
        "Frame, upskill, prototype: your entry point depends on your maturity.",
      more: "Learn more",
      cards: [
        {
          id: "startai",
          name: "STARTAI",
          tagline: "AI AUDIT & MATURITY DIAGNOSTIC",
          desc: "The essential first step to prioritize high-ROI initiatives, avoid wasted investment and lay solid foundations.",
        },
        {
          id: "boostai",
          name: "BOOSTAI",
          tagline: "AI ENABLEMENT & TRAINING",
          desc: "Three progressive tracks based on your maturity, to make your teams self-sufficient with AI from day one.",
        },
        {
          id: "buildai",
          name: "BUILDAI",
          tagline: "PROTOTYPING & EXPERIMENTATION",
          desc: "Turns your priority use case into a concrete solution, tested by your users and measured in euros.",
        },
      ],
    },
    clients: {
      eyebrow: "REFERENCES",
      title: "They trust us.",
    },
  },

  vision: {
    eyebrow: "VISION",
    h1: "AI, a promise still to be fulfilled?",
    intro1:
      "Artificial Intelligence is an operational reality and a major <b>engine of transformation</b> for organizations. By letting machines simulate human cognitive abilities, AI is fundamentally reshaping how organizations operate, interact with their customers or users, and create value. Yet its rise within organizations remains disappointing compared with the expectations set by consumer products.",
    intro2:
      "A recent MIT report* indicates that despite a massive investment estimated at 30 to 40 billion dollars in generative AI, <b>only 5%</b> of organizations would see a concrete return. That 5% figure is damning at a time when AI is demonstrating its extraordinary capabilities and is readily adopted for ever more varied and complex uses. The same report notes that <b>40%</b> of projects relying on “general-purpose” AI (e.g. ChatGPT, Claude) show a positive return. Among the reasons given: the flexibility, simplicity and directly perceptible usefulness of consumer tools.",
    defi: {
      eyebrow: "THE CHALLENGE",
      title:
        "Bring the momentum of “general-purpose” AI into the heart of organizations.",
      forcesTitle: "The strengths of “general-purpose” AI",
      forces: [
        "<b>Simple</b>: easy access to a powerful application.",
        "<b>Near-free</b>: marginal usage costs for the user.",
        "<b>Learning</b>: memory of conversations.",
        "<b>Evolving</b>: versions replaced seamlessly.",
      ],
      constraintsTitle: "The constraints of organizations",
      constraints: [
        "<b>Access</b>: the AI agent must reach data and applications while respecting permissions.",
        "<b>Governance & sovereignty</b>: control who accesses what, prevent data leaks, track agents' lifecycle.",
        "<b>Advanced UX</b>: stay universal while enriching it for business use cases.",
      ],
    },
    obstacles: {
      eyebrow: "THREE OBSTACLES",
      title: "What prevents smooth enterprise deployment.",
      items: [
        {
          n: "01",
          title: "Speed",
          tags: ["Initial build + iterations", "Incremental use cases"],
          body: "AI projects take too long. An “IT” part tied to deploying infrastructure and non-functional layers (administration, security, observability, etc.) naturally inherits the constraints of any enterprise application. But evolutions of the AI core and the incremental addition of new use cases can and must be accelerated.",
        },
        {
          n: "02",
          title: "UX",
          tags: [
            "Users need more than a chat",
            "One UX, several use cases",
          ],
          body: "One of the keys to ChatGPT's success, since copied by other model providers, lies in the simplicity and universality of its interface. In the enterprise, the interface must be guided by that same principle of simplicity and universality, while adding minor specifics to ensure a smooth fit into business processes.",
        },
        {
          n: "03",
          title: "Trust",
          tags: [
            "Access control for both Users and Agents",
            "Sources, explainability, observability",
          ],
          body: "Trust is key both in the quality of what AI produces and in controlling who-accesses-what, and in particular by extending those controls to AI agents.",
        },
      ],
    },
    proposition: {
      eyebrow: "THE HEXAMIND PROPOSAL",
      title: "A three-layer architecture that decouples change.",
      layers: [
        {
          n: "01",
          title: "A layer shared across use cases",
          body: "It mainly holds the “software” part (administration, access and role management, UX/UI, connectors, etc.) with a low rate of change, an ability to learn from usage, and foundational but not very specific features.",
        },
        {
          n: "02",
          title: "An agent layer carrying business logic",
          body: "Agent definitions build on the skills and plugins concept first proposed by Anthropic: agents are specified in folders following a standard format and can be consumed by compatible AI platforms. Agents can therefore come from several sources: specific and dedicated to the organization, or open source (e.g. Anthropic's document-management plugins). Each user has access to agents based on their role. Agents can be developed in-house, by third parties or by Hexamind.",
        },
        {
          n: "03",
          title: "A core LLM layer",
          body: "Depending on sovereignty constraints, models can be global public ones (e.g. OpenAI, Mistral), sovereign, or private based on open-source models (e.g. Deepseek, Mistral). The LLM can be chosen dynamically based on the agents and users.",
        },
      ],
      buildRun:
        "During the <b>build</b> phase, agents are added incrementally. During the <b>run</b> phase, the user has a single interface, benefiting from the cooperation of several agents transparently. New features can be added without changing the interface.",
      banking: {
        title: "Banking use case",
        intro:
          "What gains does the three-layer approach bring to speed up the deployment of new agentic applications?",
        disclosure: "Read more",
        p1: "The diagram below shows agents as seen by a bank employee who has a single interface for different uses.",
        p2: "New features can be added by defining new capabilities (e.g. agents, skills or plugins) without the interface changing for the user. This architecture therefore lets the organization's information system evolve transparently and smoothly.",
        imgAlt:
          "Diagram: a bank employee's single interface with Pascal agents and LLMs",
      },
    },
    accompagnement: {
      eyebrow: "HOW WE HELP",
      title: "Hexamind supports you at every step.",
      items: [
        "We support the overall approach and the definition of the general architecture.",
        "We put the cross-cutting foundations in place from our Pascal base.",
        "We build agents specific to your use cases. The code becomes your property.",
      ],
      link: "See all our offerings",
    },
  },

  offres: {
    eyebrow: "OUR OFFERINGS",
    h1: "From consulting to deployment, by way of our AI modules.",
    intro:
      "Three complementary families of offerings, to activate on their own or together depending on your needs.",
    conseil: {
      eyebrow: "CONSULTING",
      more: "Learn more",
      contenu: "What's included",
      livrables: "Deliverables",
      pourQui: "Who's it for?",
      offers: [
        {
          id: "startai",
          name: "STARTAI",
          tagline: "AI Audit & Maturity Diagnostic",
          duration: "1 to 3 weeks · Fixed price",
          intro:
            "The essential first step to prioritize high-ROI initiatives, avoid wasted investment and lay solid foundations.",
          items: [
            "In-depth analysis of your data (volume, quality, governance)",
            "Mapping of business processes and friction points",
            "Assessment of infrastructure and cybersecurity",
            "Review of regulatory constraints (GDPR, AI Act)",
            "Interviews with business & IT leadership",
            "Scan of high-ROI use cases",
          ],
          deliverables: [
            "AI maturity report with detailed scoring",
            "3 prioritized, costed quick wins",
            "Strategic roadmap 12–24 months",
            "Benchmark of open-source solutions (PyTorch, LangChain, Mistral, Llama 3, Qwen)",
          ],
          forWho: "CEOs, CIOs, Directors of Innovation / Transformation / Operations.",
        },
        {
          id: "boostai",
          name: "BOOSTAI",
          tagline: "AI Enablement & Training",
          duration: "3 days to 3 weeks · In-house or inter-company",
          intro:
            "Three progressive tracks based on your maturity, to make your teams self-sufficient with AI from day one.",
          items: [
            "Level 1 · Starting (1 day): AI, ML, NLP, LLM fundamentals",
            "Level 2 · Building (3 to 5 days): hands-on workshops, Jira / Confluence / M365 / Notion integration",
            "Level 3 · Scaling (1 to 3 weeks): Vibe Coding (Claude Code), autonomous agents, LLM governance",
          ],
          deliverables: [
            "Complete materials (videos, exercises, real cases)",
            "Ready-to-use adoption kit (templates, checklists)",
            "Hexamind certification per level",
            "Post-training coaching (2 half-days)",
          ],
          forWho:
            "POs, PMs, Scrum Masters, Developers, Lead Techs, CTOs, CIOs, L&D leads.",
        },
        {
          id: "buildai",
          name: "BUILDAI",
          tagline: "Prototyping & Experimentation",
          duration: "4 to 12 weeks · Fixed price or 2-week sprint",
          intro:
            "Turns your priority use case into a concrete solution, tested by your users and measured in euros.",
          items: [
            "Ultra-precise framing in 3 days",
            "Data preparation and anonymization",
            "Offline/on-premise development (Llama 3, Mistral, Mixtral, Qwen, Phi-3, Gemma)",
            "2-week sprints with user testing",
            "Continuous measurement of business metrics",
          ],
          deliverables: [
            "A fully functional MVP, deployable from the end",
            "Open, versioned, documented source code",
            "Performance dashboard (accuracy, latency, cost)",
            "Proof-of-value report with quantified ROI",
          ],
          forWho: "Product Owners, business functions, CxOs.",
        },
      ],
    },
  },

  qui: {
    eyebrow: "ABOUT US",
    h1: "In love with governed AI, for everyone's benefit.",
    intro:
      "Early adopters or more recent converts, we are AI enthusiasts and want to be part of a governed AI that benefits everyone.",
    values: {
      eyebrow: "OUR VALUES",
      title: "Four principles that guide us.",
      items: [
        {
          title: "Impact",
          body: "We don't build gadgets. We deploy useful AI that radically transforms our clients' business and generates real value.",
        },
        {
          title: "Technical excellence",
          body: "In a world that changes every week, we master the state of the art. We keep innovating to remain our industry's trusted guides.",
        },
        {
          title: "Industrial rigor",
          body: "From prototype to scale, we code to last. Our solutions are robust, reliable and built for real-world demands.",
        },
        {
          title: "The joy of fine craft",
          body: "We are passionate craftspeople. We cultivate technical excellence in an atmosphere of shared enjoyment and pride in work well done.",
        },
      ],
    },
    team: {
      eyebrow: "THE TEAM",
      title: "Complementary profiles.",
      members: [
        {
          img: "/team/yves.png",
          name: "Yves PELIGRY",
          role: "CEO",
          fullRole: "Chief Executive Officer",
          bio: ["SupAéro '91, MS HEC,", "Visiting Scholar, Stanford AI Lab", "ex-Thales / SSG / ACN"],
        },
        {
          img: "/team/nico.png",
          name: "Nicolas RENNERT",
          role: "CTO",
          fullRole: "Chief Technical Officer",
          bio: ["Sorbonne AI PhD", ">20 years' experience, 5+ years", "as CTO in AI startups"],
        },
        {
          img: "/team/guillaume.png",
          name: "Guillaume POTEL",
          role: "CSO",
          fullRole: "Chief Services Officer",
          bio: ["Polytechnique '18", "5 years in AI startups"],
        },
        {
          img: "/team/quang.png",
          name: "Quang LE",
          role: "CPO",
          fullRole: "Chief Product Officer",
          bio: ["Polytechnique '15", "7 years in AI startups"],
        },
      ],
      note: "<b>+ 10 engineers and researchers</b> from top schools and universities.",
    },
  },

  rejoindre: {
    eyebrow: "JOIN US",
    h1: "Let's build useful, governed AI together.",
    reasons: {
      eyebrow: "WHY JOIN US",
      title: "Four reasons to join us.",
      items: [
        {
          title: "Radical autonomy",
          body: "You're not a cog. You drive the technical and strategic choices. Your influence on the project is direct, whatever your seniority.",
        },
        {
          title: "A cutting-edge stack, no limits",
          body: "Open source first (Mistral, Llama, PyTorch) and exclusive access to our proprietary assets (zeAgent, Pascal, Fastprop). You use the latest AI tools (Claude Code license). You don't put up with the stack, you forge it.",
        },
        {
          title: "Product culture & short cycles",
          body: "2-week sprints and field feedback. You build in direct contact with end users to iterate fast and well.",
        },
        {
          title: "Excellence, sustainably",
          body: "We aim for the state of the art in a healthy work environment. High technical standards, with no compromise on your work-life balance.",
        },
      ],
    },
    jobs: {
      eyebrow: "JOIN THE TEAM!",
      title: "Our open roles.",
      list: [
        {
          title: "AI Engineer (permanent)",
          location: "Paris · Starting as soon as possible",
          sections: [
            {
              title: "Your mission",
              items: [
                "Integrate LLMs into business workflows.",
                "Build clean APIs (Python/FastAPI).",
                "Drive architecture choices and continuous product improvement.",
                "Take full ownership, in direct contact with end users.",
              ],
            },
            {
              title: "Your profile",
              items: [
                "Engineering degree (or recognized equivalent)",
                "Solid grounding in back-end software development",
                "First hands-on experience in applied AI (LLM, NLP, automation, RAG)",
                "A sense of quality, product and real impact",
                "Comfortable in demanding, loosely-framed environments",
              ],
            },
            {
              title: "What you'll gain",
              items: [
                "A role at the heart of production AI products, in a demanding, pragmatic team",
                "Fast skill growth on modern AI topics",
                "Real technical freedom and direct exposure to client challenges",
              ],
            },
          ],
        },
        {
          title: "AI Intern",
          location: "Paris · 4 to 6 months (flexible)",
          sections: [
            {
              title: "Your role",
              items: [
                "Integrate LLMs into business workflows",
                "Build advanced AI pipelines (RAG, multi-model agents, orchestration)",
                "Design high-performing backend APIs (Python/FastAPI)",
                "Ensure software quality (testing, monitoring, scalability)",
              ],
            },
            {
              title: "Your profile",
              items: [
                "4th/5th-year engineering student (AI / Data Science / Computer Science)",
                "Solid grounding in algorithmics and excellent development skills",
                "Rigor, product orientation, autonomy, a taste for clean code",
                "Experience in NLP/LLM and knowledge of LangChain are a plus",
              ],
            },
            {
              title: "What you'll gain",
              items: [
                "Accelerated skill growth on modern AI architectures",
                "Mentoring from senior AI engineers",
                "Direct exposure to business challenges",
              ],
            },
          ],
        },
        {
          title: "Senior Account Executive (permanent)",
          location: "Paris · Starting as soon as possible",
          sections: [
            {
              title: "Your mission",
              items: [
                "Sales development: qualification, sales cycle, tenders, pipeline tracking",
                "Pre-sales and advisory: needs framing, demos, proposals, POCs",
                "Structuring: sales processes, sales materials, client feedback",
              ],
            },
            {
              title: "Your profile",
              items: [
                "4 to 6 years' experience selling B2B software or IT services",
                "Proven experience on complex sales cycles with multiple decision-makers",
                "Consultative selling, technical understanding, autonomy, strong writing",
                "Knowledge of the AI market and professional English are a plus",
              ],
            },
            {
              title: "What you'll gain",
              items: [
                "Autonomy & impact: a key role directly influencing growth",
                "Skill growth: daily immersion in AI challenges",
                "Attractive compensation: uncapped variable, fast prospects",
                "Co-creation: contribute to the sales strategy from the start",
              ],
            },
          ],
        },
      ],
    },
  },

  contact: {
    eyebrow: "CONTACT",
    h1: "Let's talk about your project.",
    intro:
      "A question, a scoping session, a demo of our modules: leave us a message and we'll get back to you within 48 hours.",
    locationLine: "Paris, France",
    linkedin: "LinkedIn",
    form: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      defaultSubject: "Hexamind website contact",
    },
  },

  mentions: {
    eyebrow: "LEGAL INFORMATION",
    h1: "Legal notice",
    editeur: {
      title: "Publisher",
      lines: [
        "Hexamind",
        "Registered office: 16 rue Saint Antoine, 75004 Paris, France",
        "Email: contact@hexamind.ai",
        "Legal form: SAS (simplified joint-stock company)",
        "Share capital: €40,000",
        "RCS Paris: 947 999 793 · SIREN: 947 999 793",
        "EU VAT number: FR34 947 999 793",
      ],
    },
    pi: {
      title: "Intellectual property",
      body: "All content on this site (texts, images, logos, trademarks, videos, graphic elements) is the exclusive property of Hexamind or its partners. Any reproduction, representation, modification or distribution, in whole or in part, without prior written authorization is prohibited and constitutes infringement punishable under articles L.335-2 et seq. of the French Intellectual Property Code.",
    },
    data: {
      title: "Personal data",
      body1: "Information collected through the contact form is processed to respond to your requests. In accordance with Regulation (EU) 2016/679 (GDPR) and the French Data Protection Act, you have the right to access, rectify, erase, object to, restrict and port your data. You can exercise these rights by writing to contact@hexamind.ai.",
      body2:
        "Data Protection Officer (DPO): Yves Péligry. Data retention period: 12 months.",
    },
    cookies: {
      title: "Cookies",
      body: "The site may use cookies for audience measurement and to improve the user experience. You can configure their use through your browser settings.",
    },
    responsabilite: {
      title: "Liability",
      body: "Hexamind strives to ensure the accuracy and currency of the information published on this site, but cannot guarantee that it is free of errors or omissions. Users acknowledge that they use this information under their sole responsibility.",
    },
  },

  notFound: {
    eyebrow: "ERROR 404",
    title: "Page not found.",
    body: "The page you're looking for doesn't exist or has moved.",
    button: "Back to home",
  },
} as const;

export default messages;
