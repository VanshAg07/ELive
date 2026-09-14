export type Hub = {
  id: string;
  label: string;
  location: [number, number];
  size?: number;
};

export const HUBS: Hub[] = [
  { id: "germany", label: "Germany", location: [51.1657, 10.4515], size: 0.045 },
  { id: "italy", label: "Italy", location: [41.8719, 12.5674], size: 0.038 },
  { id: "turkey", label: "Turkey", location: [38.9637, 35.2433], size: 0.04 },
  { id: "israel", label: "Israel", location: [31.0461, 34.8516], size: 0.032 },
  { id: "egypt", label: "Egypt", location: [26.8206, 30.8025], size: 0.04 },
  { id: "saudi-arabia", label: "Saudi Arabia", location: [23.8859, 45.0792], size: 0.042 },
  { id: "kenya", label: "Kenya", location: [-1.2921, 36.8219], size: 0.036 },
  { id: "south-africa", label: "South Africa", location: [-30.5595, 22.9375], size: 0.042 },
  { id: "argentina", label: "Argentina", location: [-38.4161, -63.6167], size: 0.048 },
  { id: "chile", label: "Chile", location: [-35.6751, -71.543], size: 0.04 },
];

export const ROUTES: { id: string; from: [number, number]; to: [number, number] }[] = [
  { id: "germany-italy", from: [51.1657, 10.4515], to: [41.8719, 12.5674] },
  { id: "italy-turkey", from: [41.8719, 12.5674], to: [38.9637, 35.2433] },
  { id: "turkey-israel", from: [38.9637, 35.2433], to: [31.0461, 34.8516] },
  { id: "israel-egypt", from: [31.0461, 34.8516], to: [26.8206, 30.8025] },
  { id: "egypt-saudi", from: [26.8206, 30.8025], to: [23.8859, 45.0792] },
  { id: "egypt-kenya", from: [26.8206, 30.8025], to: [-1.2921, 36.8219] },
  { id: "kenya-sa", from: [-1.2921, 36.8219], to: [-30.5595, 22.9375] },
  { id: "germany-egypt", from: [51.1657, 10.4515], to: [26.8206, 30.8025] },
  { id: "turkey-kenya", from: [38.9637, 35.2433], to: [-1.2921, 36.8219] },
  { id: "argentina-chile", from: [-38.4161, -63.6167], to: [-35.6751, -71.543] },
];

export const NEWS_ITEMS = [
  "NEWS: TYPHOON SIGNAL UNLIKELY IN HONG KONG THIS WEEKEND AS THE TROUGH WEAKENS OVER THE SOUTH CHINA SEA",
  "NEWS: MAJOR FLEET-WIDE FUEL EFFICIENCY AGREEMENT SIGNALS A NEW ERA FOR APAC ROUTING",
  "NEWS: LIVE TRACKING NOW COVERS 98.2% OF IN-TRANSIT CONSIGNMENTS ACROSS AIR, OCEAN, AND LAND",
  "NEWS: UNITED CARRIERS EXPANDS CUSTOMS BROKERAGE CAPACITY ACROSS AUSTRALIA, NZ, AND GREATER CHINA",
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#insights", label: "Insights" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
] as const;
