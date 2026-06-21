export const SITE_NAME = "Lodges of Uganda";
export const SITE_DOMAIN = "lodgesofuganda.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const TAGLINE = "Independent Accommodation Guide";
export const EMAIL = "info@lodgesofuganda.com";
export const EMAIL_ENCODED = Buffer.from("info@lodgesofuganda.com").toString("base64");
export const WHATSAPP_NUMBER = "+256 763 463229";
export const WHATSAPP_MESSAGE = "Hello, I need help choosing a lodge in Uganda.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[\s+]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Lodges", href: "/lodges" },
  { label: "Regions", href: "/lodges#regions" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Tour Operators", href: "/tour-operators" },
  { label: "Best Of", href: "/best-of" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
