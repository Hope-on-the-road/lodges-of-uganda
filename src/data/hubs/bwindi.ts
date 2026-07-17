import type { HubDefinition } from "@/data/taxonomy/types";
import { BWINDI } from "@/data/taxonomy/entities";

export const bwindiHub: HubDefinition = {
  slug: "bwindi",
  type: "entity",
  tier: "A",
  entityRef: BWINDI,
  title: "Bwindi — Lodges, Gorilla Trekking & Travel Guide",
  seoTitle: "Bwindi 2026 | Lodges, Gorilla Trekking, Sectors & Travel Guide",
  seoDescription:
    "Complete Bwindi guide: compare lodges across all four sectors, understand gorilla trekking logistics, and plan your trip. Independent information, updated 2026.",
  introduction:
    "Bwindi Impenetrable National Park is the centre of gorilla trekking in Uganda. Roughly half of the world's remaining mountain gorillas live in this ancient rainforest — around 459 individuals in over 20 habituated family groups spread across four trekking sectors.\n\nThe four sectors — Buhoma, Rushaga, Ruhija, and Nkuringo — are not interchangeable. Each has its own briefing point, its own gorilla families, its own accommodation options, and its own character. Driving between sectors takes two to four hours on steep mountain roads. Your gorilla permit is assigned to a specific sector, and your lodge choice should match.\n\nBuhoma is the most established sector with the widest range of lodges, from luxury to budget. Rushaga has the most habituated gorilla families and is growing quickly. Ruhija sits at the highest altitude with a different forest experience. Nkuringo is the most remote, offering dramatic Rift Valley views and a genuine wilderness feel.\n\nThis page brings together everything you need to plan a Bwindi trip: lodge comparisons by sector and budget, gorilla trekking logistics, tour operator options, and practical travel information. Every recommendation is based on verified data and direct knowledge of the area.",
  faqs: [
    {
      question: "Which Bwindi sector should I choose for gorilla trekking?",
      answer:
        "It depends on your priorities. Buhoma has the most accommodation and is well-established. Rushaga offers the most gorilla families and good mid-range options. Ruhija is at higher altitude with fewer lodges but a unique forest experience. Nkuringo is the most remote and adventurous. Your permit determines your sector — choose your sector first, then find your lodge.",
    },
    {
      question: "How many days do I need in Bwindi?",
      answer:
        "Most travellers spend two nights: arrive in the afternoon, trek the next morning, depart the following day. Adding a third night allows for a second activity (birding walk, Batwa trail, or a rest day) and reduces rush.",
    },
    {
      question: "Can I change my gorilla trekking sector after booking?",
      answer:
        "Sector changes are possible through UWA but not guaranteed, especially in peak season. It is much easier to book the right sector from the start. If your permit is for Rushaga, do not book a lodge in Buhoma.",
    },
    {
      question: "How do I get to Bwindi from Entebbe or Kampala?",
      answer:
        "By road: 8–10 hours via Kabale (for Ruhija, Rushaga, Nkuringo) or via Ishasha (for Buhoma). By charter flight: approximately 1.5 hours to Kihihi (Buhoma) or Kisoro (Rushaga, Nkuringo, Ruhija) airstrips. Many tour operators include transfers.",
    },
    {
      question: "What is the best time to visit Bwindi?",
      answer:
        "Gorilla trekking is available year-round. The dry seasons (June–September and December–February) offer easier trekking conditions. The wet seasons (March–May, October–November) are quieter with lower lodge rates, but trails are muddier and treks can be longer.",
    },
  ],
  featuredArticleSlugs: [
    "bwindi-lodges-comparison",
    "lodges-bwindi-gorilla-trekking",
    "luxury-lodges-bwindi",
    "family-lodges-bwindi",
    "top-10-lodges-bwindi",
    "lodges-in-bwindi",
  ],
  featuredLodgeSlugs: [],
  sections: [
    { type: "featured-articles", title: "Lodge Guides for Bwindi" },
    { type: "lodges", title: "Lodges in Bwindi", limit: 12 },
    { type: "activities", title: "Activities", limit: 6 },
    { type: "all-articles", title: "All Articles about Bwindi" },
    { type: "related-entities", title: "Related Destinations", limit: 6 },
    { type: "faqs" },
    { type: "related-hubs", title: "Explore More", limit: 6 },
    { type: "cta" },
  ],
};
