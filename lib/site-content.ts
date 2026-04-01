export const navItems = [
  { href: "#problem", label: "Problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust" },
  { href: "#faq", label: "Questions" },
] as const;

export const heroContent = {
  badge: "Built for Dubai Real Estate Agents",
  title: ["Stop losing leads.", "Start every morning in control."],
  description:
    "LAMARS reads your WhatsApp conversations and tells you every morning which leads are cooling down, who you promised to call, and what opportunities you're missing.",
  cta: "Download Free on Google Play",
  meta: "Free during beta. No credit card. 15 min setup.",
} as const;

export const briefingSections = [
  {
    title: "📌 YOU PROMISED TODAY (2)",
    items: [
      `Ahmed - "I'll call you today" (you said yesterday)`,
      "Sarah - Send 2BR options (pending since Monday)",
    ],
  },
  {
    title: "COOLING DOWN (3) 🔥",
    items: [
      "Omar - 5 days, no reply",
      "Khalid - 3 days, no reply",
      "Layla - 2 days, no reply",
    ],
  },
  {
    title: "NEW OPPORTUNITIES (2) ⚡",
    items: [
      "Mohammed - wrote last night - wants to buy, cash",
      "Fatima - came back after 2 weeks - asking off-plan",
    ],
  },
] as const;

export const problemSection = {
  title: "Every minute you don't reply, someone else closes your deal.",
  description:
    "Real estate agents in Dubai juggle 30-50 active leads on WhatsApp. Things fall through the cracks every single day.",
  cards: [
    {
      eyebrow: "Leads go cold",
      icon: "💀",
      text: "A buyer messaged you 3 days ago. You forgot. They found another agent. That's AED 50,000 in commission - gone.",
    },
    {
      eyebrow: "Your memory is not a CRM",
      icon: "📌",
      text: `You told Ahmed "I'll call you tomorrow." That was Tuesday. It's Friday. He's not picking up anymore.`,
    },
    {
      eyebrow: "Morning anxiety is real",
      icon: "😰",
      text: "You wake up, open WhatsApp, see 47 unread messages. You don't know who to answer first. So you start random - and miss what matters.",
    },
    {
      eyebrow: "Opportunities hide in plain sight",
      icon: "📉",
      text: "A cash buyer wrote you at 11pm last night. It's buried between 20 other messages. You won't see it until it's too late.",
    },
  ],
} as const;

export const howItWorksSection = {
  title: "How it works",
  steps: [
    {
      number: "01",
      title: "Connect WhatsApp",
      text: "Scan a QR code. That's it. LAMARS starts reading your conversations to understand your leads.",
      meta: "15 minutes setup",
    },
    {
      number: "02",
      title: "Get your daily briefing",
      text: "Every morning at 8 AM, you see exactly who needs attention: leads cooling down, promises to keep, and new opportunities.",
      meta: "Every morning, 8 AM",
    },
    {
      number: "03",
      title: "Act and close",
      text: "Tap a lead, see the context, take action. Call, message, or follow up - directly from LAMARS. Mark it done. Move on.",
      meta: "One tap to act",
    },
  ],
} as const;

export const trustSection = {
  title: "You stay in control. Always.",
  cards: [
    {
      title: "We never message your clients",
      icon: "🔒",
      text: "LAMARS reads your conversations to help you. It never sends anything to your leads. You decide what to do.",
    },
    {
      title: "Your data stays yours",
      icon: "👁️",
      text: "We don't share your conversations or lead information with anyone. Not your brokerage, not other agents, not third parties.",
    },
    {
      title: "Not another CRM",
      icon: "📌",
      text: "LAMARS doesn't replace anything. It just makes sure you don't forget anything. Keep working exactly how you work today.",
    },
  ],
} as const;

export const faqItems = [
  {
    question: "Is it really free?",
    answer:
      "Yes. LAMARS is free during our beta period. No credit card, no trial expiration. We'll introduce paid plans later with advanced features - but the core daily briefing will always have a free tier.",
  },
  {
    question: "Will LAMARS send messages to my clients?",
    answer:
      "Never. LAMARS only reads your conversations to understand what's happening with your leads. It never sends anything on your behalf. You stay 100% in control of every message.",
  },
  {
    question: "Do I need to replace my CRM?",
    answer:
      "No. LAMARS works alongside whatever you already use - even if that's just WhatsApp and your memory. No migration, no new system to learn. Just connect and start seeing your daily briefing.",
  },
  {
    question: "Does my brokerage need to approve this?",
    answer:
      "No. Agents can start individually. You connect your own WhatsApp and get your own daily briefing. If your brokerage wants team features later, they can connect separately.",
  },
  {
    question: "How long does setup take?",
    answer:
      "15 minutes. Download the app, scan a QR code to connect WhatsApp, and mark any personal contacts that aren't leads. By the next morning, your first briefing is ready.",
  },
  {
    question: "Is this only for Dubai?",
    answer:
      "We're launching in Dubai first, designed for the WhatsApp-first real estate market here. If you're an agent working in Dubai or the UAE, this is built for you.",
  },
] as const;

export const finalCta = {
  title: ["Stop losing leads.", "Start tomorrow morning."],
  description:
    "Connect WhatsApp in 15 minutes. See your first briefing tomorrow at 8 AM.",
  button: "Download Free on Google Play",
  meta: "Free during beta · No credit card · Android",
} as const;

export const footerContent = {
  legal: "© 2026 LAMARS. All rights reserved.",
  operator: "Operated by Clearpoint Information Technology - FZCO, Dubai, UAE.",
} as const;
