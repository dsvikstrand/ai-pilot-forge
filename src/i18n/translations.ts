export type Language = "sv" | "en";

export const translations = {
  // Header
  nav: {
    home: { sv: "Hem", en: "Home" },
    services: { sv: "Tjänster", en: "Services" },
    agenticWorkflows: { sv: "Agentiska flöden", en: "Agentic Workflows" },
    pilots: { sv: "AI-Piloter", en: "AI Pilots" },
    about: { sv: "Om oss", en: "About" },
    contact: { sv: "Kontakt", en: "Contact" },
    bookCall: { sv: "Boka ett samtal", en: "Book a call" },
  },

  // Hero
  hero: {
    title: { sv: "GPU-drivna AI-piloter för svenska SMF", en: "GPU-powered AI pilots for Swedish SMEs" },
    subtitle: { sv: "Från idé till fungerande prototyp—snabbt, mätbart och byggt för leverans.", en: "From idea to a working prototype—fast, measurable, and built to ship." },
    cta: { sv: "Boka ett samtal", en: "Book a short call" },
    ctaSecondary: { sv: "Utforska tjänster", en: "Explore services" },
  },

  // Services Overview
  servicesOverview: {
    title: { sv: "Vad vi gör", en: "What we do" },
    subtitle: { sv: "Vi hjälper team att testa och driftsätta praktisk AI: sökning, automatisering och optimering—byggt med stark ingenjörskonst och tydlig utvärdering.", en: "We help teams test and deploy practical AI: search, automation, and optimization—built with strong engineering and clear evaluation." },
  },

  // Services
  services: {
    rag: {
      title: { sv: "RAG-utvärdering", en: "RAG fit-check & evaluation" },
      description: { sv: "Validera om RAG (Retrieval-Augmented Generation) är rätt approach och mät kvaliteten innan du lanserar.", en: "Validate whether Retrieval-Augmented Generation is the right approach, and measure quality before you ship." },
      descriptionLong: { sv: "Validera om RAG (Retrieval-Augmented Generation) är rätt approach för ditt användningsfall. Vi bedömer datakvalitet, designar retrieval-strategier och mäter kvaliteten innan lansering—så du vet vad som fungerar.", en: "Validate whether Retrieval-Augmented Generation (RAG) is the right approach for your use case. We assess data quality, design retrieval strategies, and measure quality before you ship—so you know what works and what doesn't." },
    },
    visualSearch: {
      title: { sv: "Visuell sökning", en: "Visual search from images" },
      description: { sv: "Hitta liknande produkter från ett foto med embeddings och snabba sökpipelines.", en: "Find similar products from a photo using embeddings and fast search pipelines." },
      descriptionLong: { sv: "Hitta liknande produkter från ett foto med embeddings och snabba sökpipelines. Perfekt för e-handel, lagerhantering och katalogsökning där visuell matchning överträffar textbaserade sökningar.", en: "Find similar products from a photo using embeddings and fast search pipelines. Ideal for e-commerce, inventory management, and catalog search where visual matching outperforms text-based queries." },
    },
    inference: {
      title: { sv: "Inferens & GPU-optimering", en: "Inference speed & GPU cost optimization" },
      description: { sv: "Profilera flaskhalsar, förbättra genomströmning/latens och minska servingkostnader.", en: "Profile bottlenecks, improve throughput/latency, and reduce serving cost." },
      descriptionLong: { sv: "Profilera flaskhalsar i dina ML-pipelines, förbättra genomströmning och latens, och minska servingkostnader. Vi identifierar exakt var tid och pengar spenderas—och åtgärdar det.", en: "Profile bottlenecks in your ML pipelines, improve throughput and latency, and reduce serving cost. We identify exactly where time and money are being spent—and fix it." },
    },
    autoTagging: {
      title: { sv: "Auto-taggning", en: "Auto-tagging & categorization" },
      description: { sv: "Förvandla bildbibliotek till strukturerade kataloger med pålitliga taggningsflöden.", en: "Turn image libraries into structured catalogs with reliable tagging workflows." },
      descriptionLong: { sv: "Förvandla bildbibliotek till strukturerade kataloger med pålitliga taggningsflöden. Minska manuellt etikettarbete och förbättra konsekvensen i stora dataset.", en: "Turn image libraries into structured catalogs with reliable tagging workflows. Reduce manual labeling effort and improve consistency across large datasets." },
    },
    prototyping: {
      title: { sv: "Prototyping", en: "Custom prototyping" },
      description: { sv: "Bygg och testa en prototypmodell/pipeline med tydliga framgångsmått.", en: "Build and test a prototype model/pipeline with clear success metrics." },
      descriptionLong: { sv: "Bygg och testa en prototypmodell eller pipeline med tydliga framgångsmått. Gå från idé till fungerande system med korrekt ingenjörskonst och utvärdering från dag ett.", en: "Build and test a prototype model or pipeline with clear success metrics. Move from idea to working system with proper engineering and evaluation from day one." },
    },
    agenticWorkflows: {
      title: { sv: "Agentiska arbetsflöden", en: "Agentic Workflows" },
      description: { sv: "Skräddarsydda AI-agenter som autonomt utför komplexa flerstegsuppgifter—från datahämtning till beslutsfattande—med mänsklig kontroll.", en: "Custom AI agents that autonomously execute complex multi-step tasks—from data retrieval to decision-making—with human-in-the-loop guardrails." },
      descriptionLong: { sv: "Skräddarsydda AI-agenter som autonomt utför komplexa flerstegsuppgifter—från datahämtning till beslutsfattande—med mänsklig kontroll och inbyggda säkerhetsmekanismer.", en: "Custom AI agents that autonomously execute complex multi-step tasks—from data retrieval to decision-making—with human-in-the-loop guardrails and built-in safety mechanisms." },
    },
    deployment: {
      title: { sv: "Driftsättningsvägledning", en: "Deployment guidance" },
      description: { sv: "Praktisk rådgivning för att gå från prototyp till produktion.", en: "Get practical advice on moving from prototype to production." },
      descriptionLong: { sv: "Få praktisk rådgivning för att gå från prototyp till produktion. Vi hjälper till med arkitekturbeslut, infrastrukturval och överlämningsdokumentation som ditt team faktiskt kan använda.", en: "Get practical advice on moving from prototype to production. We help with architecture decisions, infrastructure choices, and handoff documentation your team can actually use." },
    },
  },

  // How it works
  howItWorks: {
    title: { sv: "Så fungerar det", en: "How it works" },
    subtitle: { sv: "En tydlig, förutsägbar process designad för att minska risk och leverera resultat.", en: "A clear, predictable process designed to reduce risk and deliver results." },
    step1: {
      title: { sv: "Definiera framgång", en: "Define success" },
      description: { sv: "Klargör din data, framgångsmått och begränsningar från start.", en: "Clarify your data, success metric, and constraints upfront." },
    },
    step2: {
      title: { sv: "Bygg en pilot", en: "Build a pilot" },
      description: { sv: "Skapa en fungerande prototyp med baslinje och korrekt utvärdering.", en: "Create a working prototype with baseline and proper evaluation." },
    },
    step3: {
      title: { sv: "Leverera eller iterera", en: "Ship or iterate" },
      description: { sv: "Få en tydlig överlämningsplan eller fortsätt bygga baserat på resultat.", en: "Get a clear handoff plan or continue building based on results." },
    },
  },

  // Why VDS
  whyVds: {
    title: { sv: "Varför VDS", en: "Why VDS" },
    subtitle: { sv: "VDS finns för att överbrygga gapet mellan \"AI låter lovande\" och \"AI fungerar faktiskt i produktion.\"", en: "VDS exists to close the gap between \"AI sounds promising\" and \"AI actually works in production.\"" },
    reasons: {
      fast: { sv: "Snabba prototyper med verkliga mätningar", en: "Fast prototypes with real measurements" },
      engineering: { sv: "Ingenjörsfokus: prestanda, reproducerbarhet och ren överlämning", en: "Engineering-first: performance, reproducibility, and clean handover" },
      communication: { sv: "Tydlig kommunikation och avgränsade leverabler", en: "Clear communication and scoped deliverables" },
      gpu: { sv: "GPU-optimerade pipelines för produktionsarbetsbelastningar", en: "GPU-optimized pipelines for production workloads" },
      honest: { sv: "Ärliga bedömningar—inklusive när AI inte är rätt lösning", en: "Honest assessments—including when AI isn't the right solution" },
    },
    caseStudy: {
      badge: { sv: "Fallstudie", en: "Case Study" },
      client: { sv: "Rörstrand Museum", en: "Rörstrand Museum" },
      title: { sv: "Kulturarv + AI", en: "Cultural Heritage + AI" },
      challenge: { sv: "Museet fick dagligen frågor från allmänheten om porslinsobjekt—men identifiering tog veckor och personal lade 50% av sin tid på detta.", en: "The museum received daily inquiries about porcelain objects—but identification took weeks and staff spent 50% of their time on this." },
      solution: { sv: "Vi byggde ett AI-system för automatisk identifiering av stämplar och dekormönster direkt integrerat i museets webbplats.", en: "We built an AI system for automatic identification of stamps and decor patterns, integrated directly into the museum website." },
      responseTime: { sv: "Veckor → Sekunder", en: "Weeks → Seconds" },
      responseTimeLabel: { sv: "Svarstid", en: "Response time" },
      accuracy: { sv: "87%", en: "87%" },
      accuracyLabel: { sv: "Träffsäkerhet", en: "Accuracy" },
      images: { sv: "17 000+", en: "17,000+" },
      imagesLabel: { sv: "Träningsbilder", en: "Training images" },
      production: { sv: "I drift", en: "In production" },
      productionLabel: { sv: "Status", en: "Status" },
    },
  },

  // Contact
  contact: {
    title: { sv: "Låt oss prata", en: "Let's talk" },
    subtitle: { sv: "Berätta vad du bygger och vad \"framgång\" innebär för dig. Jag svarar med ett konkret nästa steg.", en: "Share what you're building and what \"success\" looks like. I'll respond with a concrete next step." },
    name: { sv: "Ditt namn", en: "Your name" },
    email: { sv: "E-postadress", en: "Email address" },
    company: { sv: "Företag (valfritt)", en: "Company (optional)" },
    message: { sv: "Berätta om ditt projekt och vad du vill uppnå...", en: "Tell me about your project and what you're trying to achieve..." },
    submit: { sv: "Skicka meddelande", en: "Send message" },
    submitting: { sv: "Skickar...", en: "Sending..." },
    success: { sv: "Meddelande skickat!", en: "Message sent!" },
    successDesc: { sv: "Tack för att du hörde av dig. Jag återkommer snart.", en: "Thanks for reaching out. I'll get back to you soon." },
  },

  // Footer
  footer: {
    tagline: { sv: "GPU-drivna AI-piloter för svenska SMF. Från idé till fungerande prototyp—snabbt, mätbart och byggt för leverans.", en: "GPU-powered AI pilots for Swedish SMEs. From idea to working prototype—fast, measurable, and built to ship." },
    company: { sv: "Företag", en: "Company" },
    legal: { sv: "Juridik", en: "Legal" },
    privacy: { sv: "Integritetspolicy", en: "Privacy Policy" },
    copyright: { sv: "Alla rättigheter förbehållna.", en: "All rights reserved." },
  },

  // Services Page
  servicesPage: {
    title: { sv: "Tjänster", en: "Services" },
    subtitle: { sv: "Praktiska AI-lösningar byggda med stark ingenjörskonst och tydlig utvärdering. Varje uppdrag fokuserar på mätbara resultat.", en: "Practical AI solutions built with strong engineering and clear evaluation. Every engagement focuses on measurable outcomes." },
    deliverables: {
      title: { sv: "Typiska leverabler", en: "Typical deliverables" },
      items: [
        { sv: "Fungerande prototyp med källkod och dokumentation", en: "Working prototype with source code and documentation" },
        { sv: "Baslinjemått och utvärderingsresultat", en: "Baseline metrics and evaluation results" },
        { sv: "Prestandaprofilering (latens, genomströmning, kostnad)", en: "Performance profiling (latency, throughput, cost)" },
        { sv: "Tydliga rekommendationer för nästa steg", en: "Clear next-step recommendations" },
        { sv: "Överlämningsklara leverabler som ditt team kan äga", en: "Handoff-ready deliverables your team can own" },
      ],
    },
  },

  // Pilots Page
  pilotsPage: {
    title: { sv: "AI-Piloter", en: "AI Pilots" },
    subtitle: { sv: "Fokuserade uppdrag designade för att validera värde snabbt. Välj det format som passar dina behov.", en: "Focused engagements designed to validate value quickly. Choose the format that fits your current needs." },
    faq: { sv: "Vanliga frågor", en: "Frequently asked questions" },
  },

  // Pilots
  pilots: {
    discovery: {
      title: { sv: "Upptäckt", en: "Discovery" },
      duration: { sv: "3–5 dagar", en: "3–5 days" },
      description: { sv: "Snabb genomförbarhetsbedömning när du är osäker på om AI är rätt lösning. Få ärliga svar innan du investerar i en fullständig utveckling.", en: "Quick feasibility assessment when you're not sure if AI is the right solution. Get honest answers before investing in a full build." },
      deliverables: [
        { sv: "Datakvalitetsgranskning", en: "Data quality audit" },
        { sv: "Genomförbarhetsbedömning", en: "Feasibility assessment" },
        { sv: "Rekommenderad approach (eller stopp-beslut)", en: "Recommended approach (or no-go decision)" },
        { sv: "Avgränsat förslag för nästa steg", en: "Scoped proposal for next steps" },
      ],
    },
    sprint: {
      title: { sv: "Pilot-Sprint", en: "Pilot Sprint" },
      duration: { sv: "1–2 veckor", en: "1–2 weeks" },
      description: { sv: "Kärnuppdraget: bygg en fungerande prototyp med korrekt utvärdering. Gå från idé till mätbara resultat snabbt.", en: "The core engagement: build a working prototype with proper evaluation. Move from idea to measured results quickly." },
      deliverables: [
        { sv: "Fungerande prototyp (inte slides)", en: "Working prototype (not slides)" },
        { sv: "Baslinjemått och utvärdering", en: "Baseline metrics and evaluation" },
        { sv: "Prestandaprofilering", en: "Performance profiling" },
        { sv: "Ren kodbas + dokumentation", en: "Clean codebase + documentation" },
        { sv: "Nästa stegs-plan (leverera, iterera eller stoppa)", en: "Next-step plan (ship, iterate, or stop)" },
      ],
    },
    optimization: {
      title: { sv: "Optimerings-Sprint", en: "Optimization Sprint" },
      duration: { sv: "1 vecka", en: "1 week" },
      description: { sv: "Gör befintliga ML-system snabbare och billigare. Fokuserat arbete på inferenshastighet, GPU-utnyttjande och servingkostnad.", en: "Make existing ML systems faster and cheaper. Focused work on inference speed, GPU utilization, and serving cost." },
      deliverables: [
        { sv: "Latens/genomströmningsprofilering", en: "Latency/throughput profiling" },
        { sv: "Flaskhalseidentifiering", en: "Bottleneck identification" },
        { sv: "Optimeringsimplementering", en: "Optimization implementation" },
        { sv: "Före/efter-kostnadsanalys", en: "Before/after cost analysis" },
        { sv: "Teknisk rapport", en: "Technical report" },
      ],
    },
  },

  // FAQs
  faqs: [
    {
      question: { sv: "Arbetar ni med känslig data?", en: "Do you work with sensitive data?" },
      answer: { sv: "Ja. Vi kan arbeta med anonymiserade prover under tidig utforskning och signerar NDA för produktionsdata. Allt arbete kan göras på er infrastruktur om det krävs.", en: "Yes. We can work with sanitized samples during early exploration, and sign NDAs for production data. All work can be done on your infrastructure if required." },
    },
    {
      question: { sv: "Levererar ni kod?", en: "Do you deliver code?" },
      answer: { sv: "Ja. Varje uppdrag inkluderar ett rent repository med källkod, dokumentation och tydliga instruktioner. Ert team kan äga och vidareutveckla arbetet.", en: "Yes. Every engagement includes a clean repository with source code, documentation, and clear instructions. Your team can own and extend the work." },
    },
    {
      question: { sv: "Vad händer om vi inte vet om AI är rätt lösning?", en: "What if we don't know if AI is the right solution?" },
      answer: { sv: "Det är precis vad Upptäckt-uppdraget är till för. Vi bedömer er data, utforskar alternativ och ger en ärlig rekommendation—inklusive om AI inte är rätt val.", en: "That's exactly what the Discovery engagement is for. We'll assess your data, explore options, and give you an honest recommendation—including if AI isn't the right fit." },
    },
    {
      question: { sv: "Hur hanterar ni scopeändringar under en pilot?", en: "How do you handle scope changes during a pilot?" },
      answer: { sv: "Vi börjar med ett tydligt avgränsat mål, men förblir flexibla. Om vi upptäcker något viktigt mitt i piloten diskuterar vi alternativ och justerar planen tillsammans.", en: "We start with a clearly scoped goal, but we stay flexible. If we discover something important mid-pilot, we'll discuss options and adjust the plan together." },
    },
    {
      question: { sv: "Vilka branscher arbetar ni med?", en: "What industries do you work with?" },
      answer: { sv: "Vi har arbetat med e-handel, tillverkning och professionella tjänster. Den gemensamma nämnaren är företag med verklig data som vill testa AI praktiskt—inte bara prata om det.", en: "We've worked across e-commerce, manufacturing, and professional services. The common thread is companies with real data who want to test AI practically—not just talk about it." },
    },
  ],

  // About Page
  aboutPage: {
    title: { sv: "Om oss", en: "About" },
    subtitle: { sv: "Ingenjörsfokuserad AI-konsulting för team som vill ha resultat, inte demos.", en: "Engineering-first AI consulting for teams that want results, not demos." },
    contextTitle: { sv: "Kontext", en: "Context" },
    context: [
      { sv: "VDS (Vikstrand Deep Solutions) finns för att överbrygga gapet mellan \"AI låter lovande\" och \"AI fungerar faktiskt i produktion.\" Många team fastnar mellan demos som inte skalar och långa projekt som aldrig levereras.", en: "VDS (Vikstrand Deep Solutions) exists to close the gap between \"AI sounds promising\" and \"AI actually works in production.\" Many teams get stuck between demos that don't scale and long projects that never ship." },
      { sv: "Jag hjälper företag bygga GPU-drivna AI-piloter som är praktiska, mätbara och designade för överlämning. Målet är enkelt: validera värde snabbt, minska risk och gå från idé till fungerande prototyp med tydliga nästa steg.", en: "I help companies build GPU-powered AI pilots that are practical, measurable, and designed for handover. The goal is simple: validate value quickly, reduce risk, and move from idea to a working prototype with clear next steps." },
      { sv: "Min bakgrund kombinerar djup teknisk expertis inom maskininlärning med praktisk erfarenhet av att leverera verkliga system. Jag fokuserar på det som fungerar—inte det som låter imponerande på en slide.", en: "My background combines deep technical expertise in machine learning with practical experience shipping real systems. I focus on what works—not what sounds impressive on a slide." },
    ],
    howIWork: { sv: "Så arbetar jag", en: "How I work" },
    howIWorkItems: [
      { sv: "Börja med tydliga mål och framgångsmått", en: "Start with clear goals and success metrics" },
      { sv: "Bygg fungerande prototyper, inte slide-decks", en: "Build working prototypes, not slide decks" },
      { sv: "Mät allt som spelar roll", en: "Measure everything that matters" },
      { sv: "Kommunicera ärligt—inklusive när AI inte är svaret", en: "Communicate honestly—including when AI isn't the answer" },
      { sv: "Leverera ren, dokumenterad kod som ditt team kan äga", en: "Deliver clean, documented code your team can own" },
    ],
  },

  // Contact Page
  contactPage: {
    title: { sv: "Kontakt", en: "Contact" },
    subtitle: { sv: "Redo att utforska vad AI kan göra för ditt företag? Låt oss ha ett samtal.", en: "Ready to explore what AI can do for your business? Let's have a conversation." },
    email: { sv: "E-post", en: "Email" },
    location: { sv: "Plats", en: "Location" },
    locationValue: { sv: "Göteborg, Sverige", en: "Gothenburg, Sweden" },
    connect: { sv: "Anslut", en: "Connect" },
  },

  // Privacy Page
  privacyPage: {
    title: { sv: "Integritetspolicy", en: "Privacy Policy" },
    lastUpdated: { sv: "Senast uppdaterad:", en: "Last updated:" },
    sections: {
      overview: {
        title: { sv: "Översikt", en: "Overview" },
        content: { sv: "VDS (Vikstrand Deep Solutions) respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar din information när du besöker vår webbplats eller anlitar våra tjänster.", en: "VDS (Vikstrand Deep Solutions) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services." },
      },
      collect: {
        title: { sv: "Information vi samlar in", en: "Information We Collect" },
        intro: { sv: "Vi kan samla in information du tillhandahåller direkt, inklusive:", en: "We may collect information you provide directly, including:" },
        items: [
          { sv: "Namn och kontaktinformation när du skickar vårt kontaktformulär", en: "Name and contact information when you submit our contact form" },
          { sv: "Företagsnamn och projektdetaljer du delar under konsultationer", en: "Company name and project details you share during consultations" },
          { sv: "Kommunikationshistorik från vår korrespondens", en: "Communication records from our correspondence" },
        ],
      },
      use: {
        title: { sv: "Hur vi använder din information", en: "How We Use Your Information" },
        intro: { sv: "Vi använder informationen vi samlar in för att:", en: "We use the information we collect to:" },
        items: [
          { sv: "Svara på dina förfrågningar och tillhandahålla begärda tjänster", en: "Respond to your inquiries and provide requested services" },
          { sv: "Kommunicera om projekt och leverabler", en: "Communicate about projects and deliverables" },
          { sv: "Förbättra vår webbplats och våra tjänster", en: "Improve our website and services" },
        ],
      },
      security: {
        title: { sv: "Datasäkerhet", en: "Data Security" },
        content: { sv: "Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring, avslöjande eller förstöring.", en: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction." },
      },
      rights: {
        title: { sv: "Dina rättigheter", en: "Your Rights" },
        content: { sv: "Enligt GDPR har du rätt att få tillgång till, korrigera eller radera dina personuppgifter. Du kan också begära dataportabilitet eller invända mot viss behandling.", en: "Under GDPR, you have the right to access, correct, or delete your personal data. You may also request data portability or object to certain processing activities." },
      },
      contactPrivacy: {
        title: { sv: "Kontakt", en: "Contact" },
        content: { sv: "Om du har frågor om denna integritetspolicy eller hur vi hanterar dina uppgifter, vänligen kontakta oss på hello@vds.se.", en: "If you have questions about this privacy policy or how we handle your data, please contact us at hello@vds.se." },
      },
    },
  },

  // Agentic Section (Homepage)
  agenticSection: {
    badge: { sv: "Nytt erbjudande", en: "New Service" },
    title: { sv: "Agentiska AI-arbetsflöden", en: "Agentic AI Workflows" },
    subtitle: { sv: "Lås upp nya nivåer av automatisering med AI-agenter som självständigt utför komplexa flerstegsuppgifter—med inbyggda säkerhetsmekanismer och mänsklig kontroll.", en: "Unlock new levels of automation with AI agents that autonomously execute complex multi-step tasks—with built-in guardrails and human oversight." },
    cta: { sv: "Läs mer", en: "Learn more" },
    features: {
      multiStep: {
        title: { sv: "Flerstegsautomatisering", en: "Multi-step automation" },
        description: { sv: "Agenter som planerar, utför och itererar över komplexa uppgifter utan konstant övervakning.", en: "Agents that plan, execute, and iterate over complex tasks without constant supervision." },
      },
      guardrails: {
        title: { sv: "Inbyggda säkerhetsmekanismer", en: "Built-in guardrails" },
        description: { sv: "Mänsklig kontroll vid kritiska beslut för att säkerställa kvalitet och efterlevnad.", en: "Human-in-the-loop at critical decisions to ensure quality and compliance." },
      },
      scalable: {
        title: { sv: "Skalbar arkitektur", en: "Scalable architecture" },
        description: { sv: "Från en enskild uppgift till tusentals parallella körningar.", en: "From a single task to thousands of parallel executions." },
      },
    },
    visual: {
      title: { sv: "AI-agent", en: "AI Agent" },
      subtitle: { sv: "Arbetar autonomt", en: "Working autonomously" },
      steps: {
        receive: { sv: "Ta emot uppgift", en: "Receive task" },
        analyze: { sv: "Analysera & planera", en: "Analyze & plan" },
        execute: { sv: "Utför åtgärder", en: "Execute actions" },
        verify: { sv: "Verifiera & rapportera", en: "Verify & report" },
      },
    },
  },

  // Agentic Page
  agenticPage: {
    badge: { sv: "Agentiska arbetsflöden", en: "Agentic Workflows" },
    title: { sv: "AI-agenter som arbetar för dig", en: "AI Agents That Work For You" },
    subtitle: { sv: "Automatisera komplexa, flerstegsuppgifter med intelligenta AI-agenter som planerar, utför och lär sig—med dig i kontroll.", en: "Automate complex, multi-step tasks with intelligent AI agents that plan, execute, and learn—with you in control." },
    cta: { sv: "Diskutera ditt projekt", en: "Discuss your project" },
    ctaSecondary: { sv: "Se våra piloter", en: "View our pilots" },

    what: {
      title: { sv: "Vad är agentiska arbetsflöden?", en: "What Are Agentic Workflows?" },
      description: { sv: "Till skillnad från traditionella chatbots som svarar på enstaka frågor, är agentiska AI-system designade för att självständigt utföra komplexa uppgifter över flera steg. De kan samla information, fatta beslut, använda verktyg och anpassa sin approach baserat på resultat—allt medan de håller människor informerade vid kritiska punkter.", en: "Unlike traditional chatbots that respond to single queries, agentic AI systems are designed to autonomously complete complex tasks across multiple steps. They can gather information, make decisions, use tools, and adapt their approach based on results—all while keeping humans informed at critical points." },
    },

    principles: {
      orchestration: {
        title: { sv: "Intelligent orkestrering", en: "Intelligent Orchestration" },
        description: { sv: "Agenter bryter ner komplexa mål i hanterbara steg och koordinerar verktyg och datakällor för att uppnå resultat.", en: "Agents break down complex goals into manageable steps, coordinating tools and data sources to achieve outcomes." },
      },
      guardrails: {
        title: { sv: "Säkerhetsmekanismer", en: "Safety Guardrails" },
        description: { sv: "Inbyggda kontroller säkerställer att agenter arbetar inom definierade gränser med mänsklig översyn vid kritiska beslut.", en: "Built-in controls ensure agents operate within defined boundaries with human oversight at critical decisions." },
      },
      transparency: {
        title: { sv: "Full transparens", en: "Full Transparency" },
        description: { sv: "Detaljerade loggar och förklaringar av agentens resonemang så du alltid vet vad som händer och varför.", en: "Detailed logs and explanations of agent reasoning so you always know what's happening and why." },
      },
    },

    benefitsSection: {
      title: { sv: "Fördelar för SMF", en: "Benefits for SMEs" },
      subtitle: { sv: "Agentiska arbetsflöden ger små och medelstora företag tillgång till automatiseringsnivåer som tidigare var reserverade för storföretag.", en: "Agentic workflows give small and medium enterprises access to automation levels previously reserved for large corporations." },
    },

    benefits: {
      time: {
        title: { sv: "Spara tid", en: "Save Time" },
        description: { sv: "Automatisera timmar av manuellt arbete till minuter.", en: "Automate hours of manual work into minutes." },
      },
      accuracy: {
        title: { sv: "Ökad precision", en: "Higher Accuracy" },
        description: { sv: "Minska mänskliga fel i repetitiva uppgifter.", en: "Reduce human errors in repetitive tasks." },
      },
      scalability: {
        title: { sv: "Skalbarhet", en: "Scalability" },
        description: { sv: "Hantera ökande volymer utan proportionell kostnad.", en: "Handle increasing volumes without proportional cost." },
      },
      control: {
        title: { sv: "Du behåller kontrollen", en: "You Stay in Control" },
        description: { sv: "Mänsklig översyn vid alla viktiga beslutspunkter.", en: "Human oversight at all critical decision points." },
      },
    },

    useCasesSection: {
      title: { sv: "Användningsområden", en: "Use Cases" },
      subtitle: { sv: "Praktiska tillämpningar av agentiska arbetsflöden för svenska SMF.", en: "Practical applications of agentic workflows for Swedish SMEs." },
    },

    useCases: {
      research: {
        title: { sv: "Research & analys", en: "Research & Analysis" },
        description: { sv: "Låt agenter samla, syntetisera och rapportera information från flera källor.", en: "Let agents gather, synthesize, and report information from multiple sources." },
        examples: [
          { sv: "Konkurrentbevakning och marknadsanalys", en: "Competitor monitoring and market analysis" },
          { sv: "Automatiserad due diligence", en: "Automated due diligence" },
          { sv: "Trendanalys och rapportgenerering", en: "Trend analysis and report generation" },
        ],
      },
      customer: {
        title: { sv: "Kundservice & support", en: "Customer Service & Support" },
        description: { sv: "Agenter som hanterar kundärenden från start till slut med eskalering vid behov.", en: "Agents that handle customer cases from start to finish with escalation when needed." },
        examples: [
          { sv: "Automatisk ärendehantering och routing", en: "Automatic case handling and routing" },
          { sv: "Proaktiv kundkommunikation", en: "Proactive customer communication" },
          { sv: "Komplex frågebesvarande med kontextförståelse", en: "Complex Q&A with context understanding" },
        ],
      },
      operations: {
        title: { sv: "Operationell automatisering", en: "Operational Automation" },
        description: { sv: "Effektivisera interna processer med agenter som koordinerar mellan system.", en: "Streamline internal processes with agents that coordinate across systems." },
        examples: [
          { sv: "Automatiserad orderhantering", en: "Automated order processing" },
          { sv: "Datamigration och kvalitetskontroll", en: "Data migration and quality control" },
          { sv: "Rapportgenerering och distribution", en: "Report generation and distribution" },
        ],
      },
    },

    process: {
      title: { sv: "Redo att utforska?", en: "Ready to Explore?" },
      description: { sv: "Vi hjälper dig identifiera rätt användningsfall, bygga en pilot och mäta resultaten—innan du investerar i full skala.", en: "We help you identify the right use case, build a pilot, and measure results—before you invest at full scale." },
      cta: { sv: "Boka ett samtal", en: "Book a call" },
    },
  },

  // Custom AI Page
  customAIPage: {
    hero: {
      badge: { sv: "Skräddarsydd AI", en: "Custom AI Solutions" },
      title: { sv: "Skräddarsydd AI som faktiskt passar ditt företag", en: "Custom AI that actually fits your business" },
      subtitle: { sv: "Har du bra data? Då kan vi bygga en pålitlig modell som slår generiska verktyg på de mätvärden som betyder något för dig.", en: "If you have good data, we can build a reliable model that beats generic tools on the metrics you care about." },
      ctaPrimary: { sv: "Boka en 20-min fit-check", en: "Book a 20-min fit check" },
      ctaSecondary: { sv: "Se hur det fungerar", en: "See how it works" },
      chips: [
        { sv: "Anpassade mätvärden", en: "Custom metrics" },
        { sv: "Snabb GPU-iteration", en: "Fast GPU iteration" },
        { sv: "Inspekterbarhet & säkerhet", en: "Inspectability & guardrails" },
      ],
    },

    problem: {
      title: { sv: "Varför generiska verktyg misslyckas", en: "Why generic tools fail" },
      subtitle: { sv: "SaaS-lösningar som fungerar för alla fungerar sällan optimalt för någon.", en: "SaaS solutions built for everyone rarely work optimally for anyone." },
      items: {
        average: {
          title: { sv: "Optimerade för genomsnittet", en: "Optimized for average" },
          description: { sv: "Generiska verktyg optimerar för den genomsnittliga användaren, inte dina specifika edge-cases.", en: "Generic tools optimize for the average user, not your specific edge cases." },
        },
        definitions: {
          title: { sv: "Fel definition av 'bra'", en: "Wrong definition of 'good'" },
          description: { sv: "De matchar sällan dina definitioner av kvalitet, feltolerans eller latenskrav.", en: "They rarely match your definitions of quality thresholds, error tolerance, or latency needs." },
        },
        inspect: {
          title: { sv: "Svårt att inspektera", en: "Hard to inspect" },
          description: { sv: "Du kan inte enkelt inspektera eller finjustera deras misslyckanden.", en: "You can't easily inspect or tune their failure cases." },
        },
        integrate: {
          title: { sv: "Integrationsfriktioner", en: "Integration friction" },
          description: { sv: "Generiska API:er passar sällan sömlöst in i dina befintliga system.", en: "Generic APIs rarely fit seamlessly into your existing systems." },
        },
      },
    },

    pipeline: {
      title: { sv: "Den praktiska pipelinen", en: "The practical pipeline" },
      subtitle: { sv: "Från idé till driftsatt modell—en transparent process anpassad för SMF.", en: "From idea to deployed model—a transparent process tailored for SMEs." },
      steps: {
        define: {
          title: { sv: "Definiera beslutet", en: "Define the decision" },
          description: { sv: "Vad ska AI:n stödja? Vad ska den inte göra?", en: "What should the AI support? What should it not do?" },
        },
        audit: {
          title: { sv: "Data-audit & märkning", en: "Data audit & labeling" },
          description: { sv: "Utvärdera datakvalitet och definiera märkningsstrategi.", en: "Evaluate data quality and define labeling strategy." },
        },
        baseline: {
          title: { sv: "Baslinje + regler", en: "Baseline + rules" },
          description: { sv: "Sätt upp 'kan inte avgöra'-regler och säkerhetsmekanismer.", en: "Set up 'cannot determine' rules and guardrails." },
          note: { sv: "Vi stoppar när input är opålitlig.", en: "We stop when input is unreliable." },
        },
        train: {
          title: { sv: "Träna & validera", en: "Train & validate" },
          description: { sv: "Träna med anpassade mätvärden som speglar verkliga mål.", en: "Train with custom metrics that reflect real-world goals." },
        },
        analyze: {
          title: { sv: "Felanalys", en: "Error analysis" },
          description: { sv: "Djupdyk i edge-cases och misslyckanden.", en: "Deep dive into edge cases and failures." },
        },
        integrate: {
          title: { sv: "Integrera", en: "Integrate" },
          description: { sv: "Bygg in i ditt produkt eller arbetsflöde.", en: "Build into your product or workflow." },
        },
        monitor: {
          title: { sv: "Övervaka & iterera", en: "Monitor & iterate" },
          description: { sv: "Kontinuerlig förbättring baserad på verklig användning.", en: "Continuous improvement based on real usage." },
        },
      },
    },

    training: {
      title: { sv: "Vad betyder 'träna en modell'?", en: "What does 'training a model' mean?" },
      subtitle: { sv: "Ingen matematik—bara en enkel förklaring.", en: "No math—just a simple explanation." },
      steps: {
        examples: { sv: "Vi visar exempel", en: "We show examples" },
        patterns: { sv: "Modellen lär sig mönster", en: "The model learns patterns" },
        test: { sv: "Vi testar på nya fall", en: "We test on new cases" },
        iterate: { sv: "Vi upprepar tills målet nås", en: "We repeat until target is met" },
      },
      analogy: { sv: "Tänk dig en ny medarbetare som lär sig av exempel, testar sina bedömningar, och gradvis blir bättre—med tydliga riktlinjer för när de ska be om hjälp.", en: "Think of it like a new employee learning from examples, testing their judgment, and gradually improving—with clear guidelines for when to ask for help." },
    },

    comparison: {
      title: { sv: "Varför anpassad AI kan vinna", en: "Why custom AI can win" },
      subtitle: { sv: "När du har bra data, slår skräddarsydda lösningar generiska verktyg.", en: "When you have good data, custom solutions beat generic tools." },
      headers: {
        aspect: { sv: "Aspekt", en: "Aspect" },
        generic: { sv: "Generiskt verktyg", en: "Generic tool" },
        custom: { sv: "Anpassad modell", en: "Custom model" },
      },
      rows: {
        metrics: {
          aspect: { sv: "Benchmarks", en: "Benchmarks" },
          generic: { sv: "Generisk 'accuracy'", en: "Generic 'accuracy'" },
          custom: { sv: "Speglar din verklighet", en: "Reflects your reality" },
        },
        thresholds: {
          aspect: { sv: "Felhantering", en: "Error handling" },
          generic: { sv: "En storlek för alla", en: "One size fits all" },
          custom: { sv: "Kostnadskänslig precision/recall", en: "Cost-sensitive precision/recall" },
        },
        constraints: {
          aspect: { sv: "Affärsregler", en: "Business rules" },
          generic: { sv: "Inte stöd", en: "Not supported" },
          custom: { sv: "Inbyggda domänbegränsningar", en: "Built-in domain constraints" },
        },
        integration: {
          aspect: { sv: "Integration", en: "Integration" },
          generic: { sv: "Anpassa dig", en: "Adapt to it" },
          custom: { sv: "Anpassar sig till dig", en: "Adapts to you" },
        },
        privacy: {
          aspect: { sv: "Datasäkerhet", en: "Data privacy" },
          generic: { sv: "Deras villkor", en: "Their terms" },
          custom: { sv: "Full kontroll", en: "Full control" },
        },
        cannotDetermine: {
          aspect: { sv: "'Kan inte avgöra'", en: "'Cannot determine'" },
          generic: { sv: "Sällan stöd", en: "Rarely supported" },
          custom: { sv: "Inbyggd konfidenströskel", en: "Built-in confidence threshold" },
        },
      },
    },

    value: {
      title: { sv: "Affärsvärde: mätbara resultat", en: "Business value: measurable outcomes" },
      subtitle: { sv: "Konkreta fördelar när AI faktiskt fungerar.", en: "Concrete benefits when AI actually works." },
      outcomes: {
        time: {
          title: { sv: "Minskad manuell granskning", en: "Reduced manual review" },
          description: { sv: "Automatisera timmar av manuellt arbete till minuter.", en: "Automate hours of manual work into minutes." },
        },
        decisions: {
          title: { sv: "Snabbare beslutscykler", en: "Faster decision cycles" },
          description: { sv: "Få svar på sekunder istället för dagar.", en: "Get answers in seconds instead of days." },
        },
        errors: {
          title: { sv: "Färre kostsamma misstag", en: "Fewer costly mistakes" },
          description: { sv: "Minska false positives och negatives som kostar pengar.", en: "Reduce false positives and negatives that cost money." },
        },
        consistency: {
          title: { sv: "Förbättrad konsekvens", en: "Improved consistency" },
          description: { sv: "Samma kvalitet varje gång, med full spårbarhet.", en: "Same quality every time, with full auditability." },
        },
        experience: {
          title: { sv: "Bättre kundupplevelse", en: "Better customer experience" },
          description: { sv: "Snabbare och mer tillförlitliga svar till kunder.", en: "Faster and more reliable responses to customers." },
        },
        cost: {
          title: { sv: "Lägre driftskostnad", en: "Lower operating cost" },
          description: { sv: "Skala utan proportionell personalökning.", en: "Scale without proportional headcount increase." },
        },
      },
      disclaimer: { sv: "Resultat beror på datakvalitet och operationell passform.", en: "Outcomes depend on data quality and operational fit." },
    },

    useCases: {
      title: { sv: "Realistiska användningsfall", en: "Realistic use cases" },
      subtitle: { sv: "Konkreta exempel på hur SMF kan använda anpassad AI.", en: "Concrete examples of how SMEs can use custom AI." },
      labels: {
        input: { sv: "Input", en: "Input" },
        output: { sv: "Output", en: "Output" },
        impact: { sv: "Affärspåverkan", en: "Business impact" },
      },
      cases: {
        visual: {
          title: { sv: "Visuell inspektion", en: "Visual inspection" },
          input: { sv: "Produktbilder från tillverkningslinje", en: "Product images from manufacturing line" },
          output: { sv: "OK / Defekt / Kräver manuell granskning", en: "OK / Defect / Requires manual review" },
          impact: { sv: "70% mindre manuell granskningstid", en: "70% less manual review time" },
        },
        document: {
          title: { sv: "Dokumentklassificering", en: "Document classification" },
          input: { sv: "Inkommande dokument (PDF, e-post)", en: "Incoming documents (PDF, email)" },
          output: { sv: "Kategori + routing till rätt team", en: "Category + routing to right team" },
          impact: { sv: "80% snabbare ärendehantering", en: "80% faster case handling" },
        },
        prediction: {
          title: { sv: "Efterfråge-/riskprediktion", en: "Demand/risk prediction" },
          input: { sv: "Historisk data + externa signaler", en: "Historical data + external signals" },
          output: { sv: "Sannolikhetsberäkning + konfidensintervall", en: "Probability score + confidence interval" },
          impact: { sv: "20% bättre lageroptimering", en: "20% better inventory optimization" },
        },
      },
    },

    tiers: {
      title: { sv: "Välj ditt nästa steg", en: "Choose your next step" },
      subtitle: { sv: "Transparenta leverabler i varje steg.", en: "Transparent deliverables at every stage." },
      popular: { sv: "Populär", en: "Popular" },
      deliverablesLabel: { sv: "Leverabler:", en: "Deliverables:" },
      fitCheck: {
        title: { sv: "Fit Check", en: "Fit Check" },
        duration: { sv: "1–2 veckor", en: "1–2 weeks" },
        price: { sv: "från 25 000 kr", en: "from 25,000 SEK" },
        description: { sv: "Snabb bedömning av om dina data och mål passar för anpassad AI.", en: "Quick assessment of whether your data and goals fit custom AI." },
        deliverables: [
          { sv: "Data-audit", en: "Data audit" },
          { sv: "Baslinjemätning", en: "Baseline measurement" },
          { sv: "Framgångsmått definierade", en: "Success metrics defined" },
          { sv: "Go/no-go rekommendation", en: "Go/no-go recommendation" },
          { sv: "Liten demo om möjligt", en: "Small demo if feasible" },
        ],
        cta: { sv: "Starta Fit Check", en: "Start Fit Check" },
      },
      pilot: {
        title: { sv: "Pilot", en: "Pilot" },
        duration: { sv: "4–6 veckor", en: "4–6 weeks" },
        price: { sv: "från 75 000 kr", en: "from 75,000 SEK" },
        description: { sv: "Bygg och utvärdera en riktig modell med anpassade mätvärden.", en: "Build and evaluate a real model with custom metrics." },
        deliverables: [
          { sv: "Tränad modell", en: "Trained model" },
          { sv: "Utvärderingsrapport med anpassade mätvärden", en: "Evaluation report with custom metrics" },
          { sv: "Felanalys", en: "Error analysis" },
          { sv: "Enkel integrationsplan", en: "Simple integration plan" },
          { sv: "Driftsättningsvägledning", en: "Deployment guidance" },
        ],
        cta: { sv: "Boka Pilot-samtal", en: "Book Pilot Call" },
      },
      production: {
        title: { sv: "Produktion", en: "Production" },
        duration: { sv: "8–12+ veckor", en: "8–12+ weeks" },
        price: { sv: "kontakta oss", en: "contact us" },
        description: { sv: "Produktionsklar modell med övervakning, iteration och överlämning.", en: "Production-ready model with monitoring, iteration, and handover." },
        deliverables: [
          { sv: "Produktionsklar modell", en: "Production-ready model" },
          { sv: "Övervakningsplan", en: "Monitoring plan" },
          { sv: "Iterationsloop", en: "Iteration loop" },
          { sv: "Integrationsstöd", en: "Integration support" },
          { sv: "Dokumentation & utbildning", en: "Documentation & training" },
        ],
        cta: { sv: "Kontakta VDS", en: "Talk to VDS" },
      },
    },

    faq: {
      title: { sv: "Vanliga frågor", en: "Frequently asked questions" },
      items: [
        {
          question: { sv: "Vad räknas som 'bra data'?", en: "What counts as 'good data'?" },
          answer: { sv: "Bra data är representativ för ditt verkliga användningsfall, har tillräcklig volym för mönsterigenkänning, och har konsekventa etiketter eller utfall. Vi hjälper dig utvärdera detta i Fit Check.", en: "Good data is representative of your real use case, has sufficient volume for pattern recognition, and has consistent labels or outcomes. We help you evaluate this in the Fit Check." },
        },
        {
          question: { sv: "Hur mycket data behöver vi?", en: "How much data do we need?" },
          answer: { sv: "Det beror på komplexiteten. För vissa uppgifter räcker hundratals exempel, för andra krävs tusentals. Vi ger dig ett ärligt svar under Fit Check.", en: "It depends on complexity. For some tasks, hundreds of examples suffice; for others, thousands are needed. We give you an honest answer during Fit Check." },
        },
        {
          question: { sv: "Kan ni börja regelbaserat och utveckla till ML?", en: "Can you start rule-based and evolve to ML?" },
          answer: { sv: "Absolut. Ofta är en hybrid approach bäst—regelbaserat för tydliga fall, ML för gråzoner. Detta ger pålitlighet från dag ett.", en: "Absolutely. Often a hybrid approach is best—rule-based for clear cases, ML for gray zones. This provides reliability from day one." },
        },
        {
          question: { sv: "Hur hanterar ni 'kan inte avgöra'-fall?", en: "How do you handle 'cannot determine' cases?" },
          answer: { sv: "Vi bygger in konfidenströsklar och 'osäker'-output från början. Modellen lär sig när den ska flagga för mänsklig granskning istället för att gissa.", en: "We build in confidence thresholds and 'uncertain' outputs from the start. The model learns when to flag for human review instead of guessing." },
        },
        {
          question: { sv: "Fungerar detta med våra integritetskrav?", en: "Will this work with our privacy constraints?" },
          answer: { sv: "Ja. Vi kan arbeta på er infrastruktur, använda anonymiserade data, och anpassa oss efter GDPR och era interna policyer.", en: "Yes. We can work on your infrastructure, use anonymized data, and adapt to GDPR and your internal policies." },
        },
      ],
    },

    readinessTest: {
      badge: { sv: "Gratis test", en: "Free Assessment" },
      title: { sv: "Osäker på var ni står?", en: "Unsure where you stand?" },
      subtitle: { sv: "Ta vårt 3-minuters AI-beredskapstest för att få en personlig bedömning och konkreta rekommendationer.", en: "Take our 3-minute AI readiness test to get a personalized assessment and concrete recommendations." },
      cta: { sv: "Ta testet nu", en: "Take the test now" },
    },

    finalCta: {
      title: { sv: "Redo att utforska?", en: "Ready to explore?" },
      subtitle: { sv: "Boka en 20-minuters fit-check för att se om anpassad AI passar ditt företag.", en: "Book a 20-minute fit check to see if custom AI fits your business." },
      cta: { sv: "Boka samtal", en: "Book a call" },
    },
  },

  // AI Readiness Test Page
  aiReadinessTest: {
    hero: {
      badge: { sv: "AI-beredskapstest", en: "AI Readiness Check" },
      title: { sv: "Är ditt företag redo för AI?", en: "Is your business ready for AI?" },
      subtitle: { sv: "Svara på 12 frågor och få en personlig bedömning av er AI-mognad – plus konkreta rekommendationer för nästa steg.", en: "Answer 12 questions and get a personalized assessment of your AI maturity – plus concrete recommendations for next steps." },
      timeEstimate: { sv: "3 minuter", en: "3 minutes" },
      questionsCount: { sv: "12 frågor", en: "12 questions" },
      instantResults: { sv: "Omedelbart resultat", en: "Instant results" },
    },
    start: {
      title: { sv: "Starta testet", en: "Start the test" },
      description: { sv: "Testet utvärderar fyra nyckelområden som avgör hur redo ert företag är att dra nytta av skräddarsydd AI.", en: "The test evaluates four key areas that determine how ready your company is to benefit from custom AI." },
      categories: [
        { sv: "Datatillgänglighet och kvalitet", en: "Data availability and quality" },
        { sv: "Processklarhet och dokumentation", en: "Process clarity and documentation" },
        { sv: "Teknisk infrastruktur", en: "Technical infrastructure" },
        { sv: "Organisatorisk beredskap", en: "Organizational readiness" },
      ] as const,
      cta: { sv: "Börja testet", en: "Begin the test" },
    },
    test: {
      question: { sv: "Fråga", en: "Question" },
      category: { sv: "Kategori", en: "Category" },
      previous: { sv: "Föregående", en: "Previous" },
      next: { sv: "Nästa", en: "Next" },
      seeResults: { sv: "Se resultat", en: "See results" },
    },
    categories: {
      data: { sv: "Data", en: "Data" },
      process: { sv: "Process", en: "Process" },
      technical: { sv: "Teknisk", en: "Technical" },
      organizational: { sv: "Organisation", en: "Organizational" },
    },
    results: {
      areasToImprove: { sv: "Områden att förbättra:", en: "Areas to improve:" },
      recommendations: {
        title: { sv: "Rekommenderade nästa steg:", en: "Recommended next steps:" },
      },
      restart: { sv: "Ta testet igen", en: "Take the test again" },
      learnMore: { sv: "Vill du veta mer om hur skräddarsydd AI kan passa ditt företag?", en: "Want to learn more about how custom AI can fit your business?" },
      learnMoreCta: { sv: "Läs mer om Custom AI", en: "Read more about Custom AI" },
      categories: {
        aiReady: {
          title: { sv: "AI-redo", en: "AI Ready" },
          description: { sv: "Ert företag har starka förutsättningar för att dra nytta av skräddarsydd AI. Ni har data, processer och organisation på plats för att börja omedelbart.", en: "Your company has strong prerequisites to benefit from custom AI. You have data, processes, and organization in place to start immediately." },
          recommendations: [
            { sv: "Identifiera 2-3 högvärdiga användningsfall att prioritera", en: "Identify 2-3 high-value use cases to prioritize" },
            { sv: "Börja med en pilot för att validera ROI", en: "Start with a pilot to validate ROI" },
            { sv: "Planera för skalning efter lyckad pilot", en: "Plan for scaling after successful pilot" },
          ] as const,
          cta: { sv: "Boka ett samtal om pilotprojekt", en: "Book a call about pilot projects" },
        },
        promising: {
          title: { sv: "Lovande grund", en: "Promising Foundation" },
          description: { sv: "Ni har en god bas att bygga på. Några förbättringsområden finns, men med rätt fokus kan ni snabbt bli AI-redo.", en: "You have a good foundation to build on. Some areas need improvement, but with the right focus you can quickly become AI-ready." },
          recommendations: [
            { sv: "Börja dokumentera era mest repetitiva processer", en: "Start documenting your most repetitive processes" },
            { sv: "Samla historisk data i ett tillgängligt format", en: "Collect historical data in an accessible format" },
            { sv: "Överväg en förstudie för att kartlägga möjligheter", en: "Consider a discovery phase to map opportunities" },
          ] as const,
          cta: { sv: "Boka en kostnadsfri förstudie", en: "Book a free discovery session" },
        },
        earlyStage: {
          title: { sv: "Tidigt skede", en: "Early Stage" },
          description: { sv: "Det finns förbättringspotential inom flera områden, men det betyder inte att AI är uteslutet. Börja med grundläggande förberedelser.", en: "There's improvement potential in several areas, but that doesn't rule out AI. Start with basic preparations." },
          recommendations: [
            { sv: "Prioritera att digitalisera och strukturera er data", en: "Prioritize digitizing and structuring your data" },
            { sv: "Dokumentera era nyckelprocesser och flaskhalsar", en: "Document your key processes and bottlenecks" },
            { sv: "Sätt upp grundläggande KPI:er för de områden ni vill förbättra", en: "Set up basic KPIs for the areas you want to improve" },
          ] as const,
          cta: { sv: "Få rådgivning om förberedelser", en: "Get advice on preparations" },
        },
        foundation: {
          title: { sv: "Bygga grunden", en: "Foundation Building" },
          description: { sv: "Just nu finns betydande förberedelser att göra innan AI blir aktuellt. Det positiva är att dessa förbättringar ger värde oavsett AI.", en: "Right now there are significant preparations to make before AI becomes relevant. The positive is that these improvements add value regardless of AI." },
          recommendations: [
            { sv: "Fokusera på att digitalisera era mest kritiska processer", en: "Focus on digitizing your most critical processes" },
            { sv: "Skapa system för att samla och spara data konsekvent", en: "Create systems for collecting and saving data consistently" },
            { sv: "Bygg intern förståelse för varför data och dokumentation är viktigt", en: "Build internal understanding of why data and documentation matters" },
          ] as const,
          cta: { sv: "Prata med oss om digitaliseringsstrategi", en: "Talk to us about digitalization strategy" },
        },
      },
    },
  },
} as const;

export function t(value: { sv: string; en: string }, lang: Language): string {
  return value[lang];
}

export function tArray(value: readonly { sv: string; en: string }[], lang: Language): string[] {
  return value.map((item) => item[lang]);
}
