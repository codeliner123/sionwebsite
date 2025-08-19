export const siteConfig = {
  name: "Sion Technology",
  tagline: "AI that frees clinicians to focus on care.",
  description: "Clinical notes, without the paperwork. AI-powered documentation that lets healthcare professionals focus on what matters most - patient care.",
  url: "https://sion.health",
  email: "hello@sion.health",
}

export const navigation = {
  main: [
    { name: "Products", href: "#products" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
}

export const features = [
  {
    title: "Sounds like you",
    description: "Our AI learns your voice and documentation style, creating notes that feel authentically yours.",
    icon: "microphone",
  },
  {
    title: "Templates for any specialty",
    description: "Pre-built templates for every medical specialty, customizable to your workflow and requirements.",
    icon: "template",
  },
  {
    title: "Web & EHR side-by-side",
    description: "Works seamlessly alongside your existing EHR system without disrupting your established workflow.",
    icon: "integration",
  },
  {
    title: "Privacy first",
    description: "HIPAA-compliant from day one, with end-to-end encryption and strict data protection protocols.",
    icon: "shield",
  },
]

export const howItWorksSteps = [
  {
    step: 1,
    title: "Record or upload",
    description: "Dictate directly or upload existing audio files from your patient encounters.",
  },
  {
    step: 2,
    title: "Sion drafts notes",
    description: "Our AI processes your input and generates comprehensive, accurate clinical documentation.",
  },
  {
    step: 3,
    title: "Review & export",
    description: "Review, edit if needed, and export directly to your EHR system or preferred format.",
  },
]  

export const testimonials = [
  {
    quote: "Sion can give me back 2 hours every day. I can finally focus more on my patients instead of paperwork.",
    author: "Dr. Praveena",
    role: "Oral Cancer Specialist",
  },
  {
    quote: "The initial accuracy is incredible. It understands medical terminology better than any system I've tested.",
    author: "Dr. Jagdish",
    role: "Ortho-Surgeon",
  },
  {
    quote: "Setup seems instant, and it integrates perfectly with our existing workflow. Game changer.",
    author: "Dr. Arumugam",
    role: "Cardiologist",
  },
]

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying Sion",
    features: [
      "Up to 10 notes per month",
      "Basic templates",
      "Standard support",
      "Web interface",
    ],
    cta: "Try free",
    href: "/onboarding",
    popular: false,
  },
  {
    name: "Pro ", 
    price: "$1",
    period: "per month",
    description: "For individual practitioners",
    features: [
      "Unlimited notes",
      "All specialty templates",
      "Priority support",
      "EHR integrations",
      "Custom templates",
      "Voice training",
    ],
    cta: "Try free",
    href: "/onboarding",
    popular: true,
  },
  {
    name: "Teams",
    price: "Custom",
    period: "pricing",
    description: "For practices and institutions",
    features: [
      "Everything in Pro",
      "Multi-user management",
      "Advanced analytics",
      "Dedicated support",
      "Custom integrations",
      "BAA included",
    ],
    cta: "Talk to us",
    href: "/contact",
    popular: false,
  },
]

export const securityBadges = [
  { name: "HIPAA-ready", icon: "shield" },
  { name: "GDPR-ready", icon: "globe" },
  { name: "Encryption at rest", icon: "lock" },
]

export const faqItems = [
  {
    question: "Is there a free trial?",
    answer: "Yes! Our Free plan lets you create up to 10 notes per month forever. No credit card required to get started.",
  },
  {
    question: "How does billing work?",
    answer: "Pro plans are billed monthly. You can upgrade, downgrade, or cancel anytime. Teams pricing is custom based on your needs.",
  },
  {
    question: "What EHRs do you integrate with?",
    answer: "We support all major EHR systems including Epic, Cerner, and others. Custom integrations available for Teams plans.",
  },
]

export const securityDetails = [
  {
    question: "Data Retention",
    answer: "We retain your data only as long as necessary to provide our services. You can request deletion at any time, and we'll permanently remove your information within 30 days.",
  },
  {
    question: "Access Controls",
    answer: "All access to your data is logged and monitored. Our team follows strict least-privilege principles, and we regularly audit all access patterns.",
  },
  {
    question: "Encryption",
    answer: "Your data is encrypted at rest using AES-256 and in transit using TLS 1.3. We use industry-standard key management practices.",
  },
  {
    question: "BAA/DPA",
    answer: "We're happy to sign Business Associate Agreements (BAA) and Data Processing Agreements (DPA). These are included with all paid plans.",
  },
]