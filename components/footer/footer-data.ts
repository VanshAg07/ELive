export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/united-carriers-apac/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/unitedcarriersofficial",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/UnitedCarriersOfficial",
  },
] as const;

export const NAV_COLUMNS = [
  {
    id: "company",
    label: "Company",
    links: [
      { href: "#top", label: "Home", active: true },
      { href: "#about", label: "About us" },
      { href: "#careers", label: "Careers" },
    ],
  },
  {
    id: "insights",
    label: "",
    links: [
      { href: "#insights", label: "Insights" },
      { href: "#merchandise", label: "Merchandise" },
      { href: "#community", label: "Community" },
    ],
  },
  {
    id: "industries",
    label: "",
    links: [
      { href: "#industries", label: "Industries" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact us" },
    ],
  },
] as const;

export const INDUSTRIES = [
  "Healthcare",
  "Retail",
  "Technology & Electronics",
  "Energy & Renewables",
  "Automotive",
  "Building & Construction",
  "Project Cargo",
  "Engineering & Manufacturing",
  "Food & Beverage",
  "Fashion & Footwear",
  "Mining & Resources",
  "Agriculture & Commodities",
] as const;

export const SERVICES = [
  "Air Freight",
  "Ocean Freight",
  "Customs Brokerage",
  "Warehousing & 3PL",
  "Project Cargo",
  "Domestic & Linehaul Transport",
  "Freight Consolidation Programs",
  "Cross-Docking & Bypass",
  "Trade Compliance Advisory",
  "Supply Chain Optimization",
  "Freight & Marine Insurance",
] as const;

export const LEGAL_LINKS = [
  { href: "#qhse", label: "QHSE" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#payment", label: "Payment Policy" },
  { href: "#delivery", label: "Delivery Policy" },
  { href: "#refunds", label: "Refund & Returns Policy" },
] as const;

export const MAP_MARKERS = [
  { id: "china", x: "78.6%", y: "38.5%", tone: "accent" as const },
  { id: "hong-kong", x: "79.8%", y: "46.2%", tone: "accent" as const },
  { id: "australia", x: "86.4%", y: "76.8%", tone: "accent" as const },
  { id: "new-zealand", x: "93.2%", y: "82.4%", tone: "muted" as const },
  { id: "europe", x: "51.8%", y: "30.5%", tone: "muted" as const },
  { id: "africa", x: "54.2%", y: "58.4%", tone: "muted" as const },
  { id: "americas", x: "24.6%", y: "42.8%", tone: "muted" as const },
  { id: "south-america", x: "30.4%", y: "72.2%", tone: "muted" as const },
  { id: "india", x: "71.2%", y: "48.6%", tone: "muted" as const },
  { id: "japan", x: "86.8%", y: "36.8%", tone: "muted" as const },
];

export const OFFICE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=2A+International+Square,+Tullamarine+VIC+3043,+Australia";
