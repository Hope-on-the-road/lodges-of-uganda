import type { HubDefinition } from "@/data/taxonomy/types";

export const accommodationGuidesHub: HubDefinition = {
  slug: "accommodation-guides",
  type: "category",
  tier: "A",
  categoryId: "accommodation-guides",
  title: "Uganda Accommodation Guides",
  seoTitle: "Uganda Accommodation Guides 2026 | Lodge Comparisons & Reviews",
  seoDescription:
    "Independent lodge guides for Uganda. Compare luxury, budget, and family lodges in Bwindi, Queen Elizabeth, Murchison Falls, and across all regions. Updated 2026.",
  introduction:
    "Choosing the right lodge in Uganda can shape your entire trip. A gorilla trekking permit costs $700 per person — staying in the wrong sector adds hours of mountain driving before your 7:30 AM briefing. A family booking at a lodge without proper facilities turns an adventure into stress. And a luxury splurge at a property with no wildlife frontage misses the point entirely.\n\nThese guides exist because Uganda's accommodation landscape is unusually varied. Within a single national park, you might find a $30 community guesthouse and a $1,200-per-night tented camp separated by a fifteen-minute walk. Price alone does not predict quality, and location matters more than star ratings.\n\nEvery guide on this page compares lodges by what actually matters to travellers: proximity to park gates and briefing points, the specific activities available from each property, realistic price ranges by season, and honest assessments of facilities. We visit properties, talk to operators, and update information as lodges open, close, or change ownership.\n\nWhether you are planning a first gorilla trek, comparing Bwindi sectors, or looking for the best value safari lodge in Uganda — start here.",
  faqs: [
    {
      question: "How do I choose between lodges in the same area?",
      answer:
        "Start with location — how close is the lodge to your main activity (gorilla briefing point, boat launch, game drive area). Then compare price level, room type, and included meals. Our comparison guides break this down for each area.",
    },
    {
      question: "Are Uganda lodge prices negotiable?",
      answer:
        "Direct bookings sometimes receive lower rates than online travel agents, especially in low season (March–May, October–November). Many lodges offer discounts for multi-night stays or East African residents. Always ask for current rates directly.",
    },
    {
      question: "What is the difference between a lodge, a camp, and a guesthouse in Uganda?",
      answer:
        "Lodges are permanent structures, often with en-suite rooms and a restaurant. Camps (including luxury tented camps) use semi-permanent tents on raised platforms — these can be as comfortable as lodges. Guesthouses are simpler, community-run properties with basic facilities and lower prices.",
    },
    {
      question: "Should I book lodges through a tour operator or directly?",
      answer:
        "Both work. Tour operators handle logistics and often bundle lodges with transport and permits, which saves time. Direct booking gives you more control and sometimes better rates. For gorilla trekking, many travellers prefer operators because permit logistics are complex.",
    },
    {
      question: "How far in advance should I book a Uganda lodge?",
      answer:
        "For peak season (June–September, December–February), book 3–6 months ahead, especially in Bwindi where popular lodges fill up alongside gorilla permits. Low season bookings can often be made 2–4 weeks out, with better availability and rates.",
    },
  ],
  featuredArticleSlugs: [
    "best-lodges-uganda",
    "bwindi-lodges-comparison",
    "luxury-lodges-bwindi",
    "budget-vs-luxury-uganda",
    "family-lodges-bwindi",
    "safari-lodges-uganda",
    "top-10-lodges-bwindi",
    "lodges-bwindi-gorilla-trekking",
  ],
  featuredLodgeSlugs: [],
  relatedCategorySlugs: [
    "destinations",
    "travel-planning",
    "activities",
    "practical-information",
  ],
  sections: [
    { type: "featured-articles", title: "Featured Guides" },
    { type: "all-articles", title: "All Accommodation Guides" },
    { type: "related-entities", title: "Browse by Destination", limit: 8 },
    { type: "related-categories", title: "Related Topics" },
    { type: "faqs" },
    { type: "related-hubs", title: "Explore More", limit: 6 },
    { type: "cta" },
  ],
};
