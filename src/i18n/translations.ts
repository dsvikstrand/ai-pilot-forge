export type Language = "sv" | "en";

export const translations = {
  // Header
  nav: {
    home: { sv: "Hem", en: "Home" },
    services: { sv: "Tjänster", en: "Services" },
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
    outcomes: {
      title: { sv: "Typiska resultat", en: "Typical outcomes" },
      prototype: { sv: "En fungerande prototyp (inte slides)", en: "A working prototype (not slides)" },
      metrics: { sv: "Tydliga utvärderingsmått och baslinjer", en: "Clear evaluation metrics and baselines" },
      plan: { sv: "En plan för driftsättning, iteration eller ett stopp-beslut", en: "A plan for deployment, iteration, or a no-go decision" },
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
    locationValue: { sv: "Stockholm, Sverige", en: "Stockholm, Sweden" },
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
} as const;

export function t(value: { sv: string; en: string }, lang: Language): string {
  return value[lang];
}

export function tArray(value: readonly { sv: string; en: string }[], lang: Language): string[] {
  return value.map((item) => item[lang]);
}
