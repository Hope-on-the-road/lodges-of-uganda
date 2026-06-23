import type { Region } from "./lodge-types";

export const regions: Region[] = [
  {
    id: "bwindi",
    name: "Bwindi Impenetrable National Park",
    slug: "bwindi",
    description:
      "A UNESCO World Heritage Site and home to nearly half of the world's remaining mountain gorillas. Bwindi's ancient rainforest covers over 330 square kilometres of steep, mist-covered terrain in southwestern Uganda.",
    longDescription:
      "Bwindi Impenetrable National Park is one of the most biologically diverse areas on Earth. Its dense montane and lowland forest has survived the last ice age, making it one of the oldest habitats in Africa. The park is divided into four sectors — Buhoma, Ruhija, Rushaga, and Nkuringo — each offering gorilla trekking permits and a distinct landscape experience.\n\nBeyond gorilla trekking, Bwindi supports over 120 mammal species, 350 bird species, and 220 butterfly species. The surrounding Batwa communities offer cultural encounters that add depth to any visit. Accommodation ranges from basic community guesthouses to high-end luxury lodges perched on the forest edge.",
    highlights: [
      "Mountain gorilla trekking",
      "UNESCO World Heritage Site",
      "Over 350 bird species",
      "Batwa cultural experiences",
      "Ancient montane rainforest",
    ],
    activities: [
      "Gorilla trekking",
      "Gorilla habituation experience",
      "Bird watching",
      "Nature walks",
      "Batwa trail",
      "Community visits",
    ],
    bestTimeToVisit:
      "June to September and December to February are the driest months and generally the best for trekking. Gorilla permits are available year-round.",
    gettingThere:
      "Bwindi is approximately 8–10 hours by road from Entebbe or Kampala. Charter flights are available to Kihihi or Kisoro airstrips. The park can also be reached from Kigali, Rwanda in about 4–5 hours.",
    faq: [
      {
        question: "How many gorilla families can be visited in Bwindi?",
        answer:
          "Bwindi currently has over 20 habituated gorilla families spread across its four sectors. Each family can be visited by a maximum of eight trekkers per day.",
      },
      {
        question: "Which sector of Bwindi is best for gorilla trekking?",
        answer:
          "All four sectors offer excellent gorilla trekking. Buhoma is the most established with the widest range of accommodation. Rushaga has the most gorilla families. Ruhija is at higher altitude with different forest scenery. Nkuringo offers a more remote, adventurous experience.",
      },
    ],
    seoTitle: "Bwindi Impenetrable National Park | Lodge Guide Uganda",
    seoDescription:
      "Explore lodges and accommodation in Bwindi Impenetrable National Park. Compare options across Buhoma, Ruhija, Rushaga and Nkuringo sectors for gorilla trekking.",
    heroImage: "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780945967518_2os1.jpg",
  },
  {
    id: "mgahinga",
    name: "Mgahinga Gorilla National Park",
    slug: "mgahinga",
    description:
      "Uganda's smallest national park, set among the Virunga volcanoes. Mgahinga offers gorilla trekking, golden monkey tracking, and volcano hiking in a dramatic volcanic landscape.",
    longDescription:
      "Mgahinga Gorilla National Park covers just 33.7 square kilometres at the border of Uganda, Rwanda, and the Democratic Republic of Congo. Despite its small size, it is home to one habituated gorilla family and offers unique experiences not found elsewhere in Uganda, including golden monkey tracking and hikes up the Virunga volcanoes — Mount Muhabura, Mount Gahinga, and Mount Sabinyo.\n\nThe park's high-altitude bamboo and hagenia forests create a landscape quite different from Bwindi. The Batwa people have deep cultural ties to this area, and the Batwa trail through the park offers insight into their traditional forest-dwelling way of life.",
    highlights: [
      "Gorilla trekking",
      "Golden monkey tracking",
      "Virunga volcano hikes",
      "Batwa cultural trail",
      "Border of three countries",
    ],
    activities: [
      "Gorilla trekking",
      "Golden monkey tracking",
      "Volcano hiking",
      "Batwa trail",
      "Bird watching",
    ],
    bestTimeToVisit:
      "June to September and December to February. The dry seasons make volcano hikes and trekking more comfortable.",
    gettingThere:
      "Mgahinga is about 9–10 hours by road from Entebbe. The nearest airstrip is Kisoro, about 14 km from the park gate. It can also be reached from Kigali in about 3–4 hours.",
    faq: [
      {
        question: "How many gorilla families are in Mgahinga?",
        answer:
          "Mgahinga currently has one habituated gorilla group — the Nyakagezi family. Because they roam across the Virunga range, permits are occasionally unavailable when the group moves into neighbouring countries.",
      },
    ],
    seoTitle: "Mgahinga Gorilla National Park | Lodge Guide Uganda",
    seoDescription:
      "Find lodges near Mgahinga Gorilla National Park. Gorilla trekking, golden monkey tracking and volcano hikes in Uganda's Virunga mountains.",
    heroImage: "",
  },
  {
    id: "lake-mutanda",
    name: "Lake Mutanda",
    slug: "lake-mutanda",
    description:
      "A serene volcanic lake surrounded by the Virunga mountains near Kisoro. A peaceful base for gorilla trekking at Mgahinga or Bwindi's Nkuringo sector.",
    longDescription:
      "Lake Mutanda is one of Uganda's most scenic lakes, cradled by the three Virunga volcanoes and rolling green hills near the town of Kisoro. The lake is dotted with small islands and offers calm waters for canoeing and kayaking.\n\nSeveral lodges have been established along its shores, making it an attractive alternative base for visitors trekking at Mgahinga or the southern sectors of Bwindi. The area is quieter and less developed than Buhoma, appealing to travelers seeking a more off-the-beaten-path experience.",
    highlights: [
      "Scenic volcanic lake",
      "Views of Virunga volcanoes",
      "Canoeing and kayaking",
      "Close to Mgahinga and Bwindi",
      "Peaceful and remote setting",
    ],
    activities: [
      "Canoeing",
      "Kayaking",
      "Bird watching",
      "Community visits",
      "Gorilla trekking (nearby)",
    ],
    bestTimeToVisit: "Year-round, with drier conditions from June to September and December to February.",
    gettingThere:
      "Lake Mutanda is about 15 km from Kisoro town and approximately 9–10 hours from Entebbe by road. Charter flights to Kisoro airstrip are available.",
    faq: [],
    seoTitle: "Lake Mutanda | Lodge Guide Uganda",
    seoDescription:
      "Discover lodges on Lake Mutanda near Kisoro. A peaceful lakeside base for gorilla trekking at Mgahinga and Bwindi.",
    heroImage: "",
  },
  {
    id: "lake-bunyonyi",
    name: "Lake Bunyonyi",
    slug: "lake-bunyonyi",
    description:
      "One of Africa's deepest lakes, surrounded by terraced hillsides and dotted with 29 islands. A popular rest stop between Bwindi and Queen Elizabeth National Park.",
    longDescription:
      "Lake Bunyonyi lies in southwestern Uganda at an altitude of about 1,950 metres. Its name means 'place of many little birds' in the local Rukiga language, and the lake supports a rich birdlife across its islands and shoreline.\n\nThe lake has long been a favourite stopover for travellers on the gorilla trekking circuit. Its calm, bilharzia-free waters make it safe for swimming, and activities include canoeing between islands, visiting local communities, and simply relaxing in one of the most scenic settings in East Africa. Accommodation ranges from budget camps to comfortable mid-range lodges.",
    highlights: [
      "29 islands to explore",
      "Safe for swimming",
      "Rich birdlife",
      "Terraced hillside scenery",
      "Cultural island visits",
    ],
    activities: [
      "Canoeing",
      "Swimming",
      "Island hopping",
      "Bird watching",
      "Community visits",
      "Hiking",
    ],
    bestTimeToVisit: "Year-round. The dry seasons offer clearer skies and easier hiking.",
    gettingThere:
      "Lake Bunyonyi is about 7–8 hours from Entebbe by road and roughly 1.5 hours from Bwindi's Buhoma sector. The nearest town is Kabale.",
    faq: [],
    seoTitle: "Lake Bunyonyi | Lodge Guide Uganda",
    seoDescription:
      "Explore lodges and camps at Lake Bunyonyi. Island hopping, canoeing and relaxation on one of Africa's most beautiful lakes.",
    heroImage: "",
  },
  {
    id: "queen-elizabeth",
    name: "Queen Elizabeth National Park",
    slug: "queen-elizabeth",
    description:
      "Uganda's most visited national park, spanning nearly 2,000 square kilometres of savanna, wetlands, lakes and forest. Famous for the Kazinga Channel, tree-climbing lions, and exceptional biodiversity.",
    longDescription:
      "Queen Elizabeth National Park stretches across the equator in western Uganda, bordering the Democratic Republic of Congo. It encompasses a remarkable range of habitats — from open savanna and acacia woodland to dense tropical forest, crater lakes, and the shores of Lakes Edward and George connected by the Kazinga Channel.\n\nThe park is home to nearly 100 mammal species and over 600 bird species, making it one of the most biodiverse protected areas in Africa. Key attractions include boat cruises on the Kazinga Channel, game drives on the Kasenyi plains, chimpanzee trekking in Kyambura Gorge, and the famous tree-climbing lions of the Ishasha sector. Accommodation options range from budget bandas to exclusive safari lodges.",
    highlights: [
      "Kazinga Channel boat cruise",
      "Tree-climbing lions in Ishasha",
      "Over 600 bird species",
      "Chimpanzee trekking in Kyambura Gorge",
      "Crater lakes",
    ],
    activities: [
      "Game drives",
      "Boat cruise",
      "Chimpanzee trekking",
      "Bird watching",
      "Nature walks",
      "Community tourism",
    ],
    bestTimeToVisit:
      "June to September and December to February are ideal for game viewing. The park is accessible year-round.",
    gettingThere:
      "The park is about 6 hours from Entebbe by road. Charter flights to Kasese or Mweya airstrips are available. The main gate at Katunguru is along the Kampala–Fort Portal highway.",
    faq: [
      {
        question: "Can I see the Big Five in Queen Elizabeth National Park?",
        answer:
          "Queen Elizabeth National Park is home to four of the Big Five — lion, leopard, buffalo, and elephant. Rhinos are not found here but can be seen at Ziwa Rhino Sanctuary.",
      },
    ],
    seoTitle: "Queen Elizabeth National Park | Lodge Guide Uganda",
    seoDescription:
      "Find lodges in Queen Elizabeth National Park. Kazinga Channel cruises, game drives, tree-climbing lions and chimpanzee trekking accommodation.",
    heroImage: "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780844467713_c2mn.jpg",
  },
  {
    id: "ishasha",
    name: "Ishasha",
    slug: "ishasha",
    description:
      "The southern sector of Queen Elizabeth National Park, famous for its tree-climbing lions. A quieter, more exclusive safari experience away from the main tourist circuits.",
    longDescription:
      "Ishasha is the remote southern sector of Queen Elizabeth National Park, bordering the Democratic Republic of Congo. It is best known for its population of tree-climbing lions, which are regularly seen lounging in the branches of large fig trees — a behaviour rarely observed elsewhere in Africa.\n\nThe Ishasha plains also support large herds of buffalo, Uganda kob, topi, and elephant. The Ishasha River attracts hippos and provides excellent bird watching. Because of its remoteness, Ishasha sees fewer visitors than the northern sectors of Queen Elizabeth, offering a more exclusive and peaceful safari experience.",
    highlights: [
      "Tree-climbing lions",
      "Remote and exclusive",
      "Large buffalo herds",
      "Ishasha River wildlife",
      "Scenic fig tree landscapes",
    ],
    activities: ["Game drives", "Bird watching", "Nature walks"],
    bestTimeToVisit:
      "June to September and December to February for the best game viewing. Tree-climbing lions can be seen year-round.",
    gettingThere:
      "Ishasha is about 7–8 hours from Entebbe by road. It is often visited as part of a circuit between Queen Elizabeth National Park and Bwindi.",
    faq: [],
    seoTitle: "Ishasha Sector | Lodge Guide Uganda",
    seoDescription:
      "Lodges and camps in the Ishasha sector of Queen Elizabeth National Park. See tree-climbing lions in Uganda's most exclusive safari area.",
    heroImage: "",
  },
  {
    id: "kibale",
    name: "Kibale National Park",
    slug: "kibale",
    description:
      "Known as the primate capital of the world. Kibale protects one of the finest tropical forests in Africa, home to 13 primate species including habituated chimpanzees.",
    longDescription:
      "Kibale National Park covers 795 square kilometres of tropical rainforest in western Uganda near Fort Portal. It has one of the highest densities and diversities of primates in Africa, with an estimated 1,500 chimpanzees and 12 other primate species including the rare L'Hoest's monkey and red colobus.\n\nChimpanzee tracking is the main draw, but the park also offers a chimpanzee habituation experience, guided nature walks, a nocturnal primate walk, and excellent bird watching with over 375 species recorded. The Bigodi Wetland Sanctuary on the park's southern boundary is a community-managed wetland with outstanding primate and bird viewing.",
    highlights: [
      "Chimpanzee tracking",
      "13 primate species",
      "Bigodi Wetland Sanctuary",
      "Over 375 bird species",
      "Tropical rainforest walks",
    ],
    activities: [
      "Chimpanzee tracking",
      "Chimpanzee habituation",
      "Bird watching",
      "Nature walks",
      "Nocturnal primate walk",
      "Bigodi Wetland walk",
    ],
    bestTimeToVisit:
      "Year-round. Dry seasons (June–September, December–February) are slightly easier for forest walks, but chimps can be tracked in any season.",
    gettingThere:
      "Kibale is about 5–6 hours from Entebbe by road via Fort Portal. Charter flights to Kasese are available.",
    faq: [],
    seoTitle: "Kibale National Park | Lodge Guide Uganda",
    seoDescription:
      "Discover lodges near Kibale National Park for chimpanzee tracking. Accommodation options near the primate capital of the world.",
    heroImage: "",
  },
  {
    id: "fort-portal",
    name: "Fort Portal & Crater Lakes",
    slug: "fort-portal",
    description:
      "A charming town in western Uganda surrounded by tea plantations, crater lakes, and the Rwenzori foothills. A popular base for Kibale Forest and the crater lakes region.",
    longDescription:
      "Fort Portal is a pleasant, well-maintained town in the foothills of the Rwenzori Mountains. The surrounding area is famous for its cluster of over 50 crater lakes, many of which are nestled in lush green hills with views of the Rwenzori range.\n\nThe town serves as a convenient base for visiting Kibale National Park (about 30 km south), and for exploring the crater lakes on foot, by bike, or by car. Tea plantations, waterfalls, and community tourism projects add to the area's appeal. Accommodation includes guesthouses in town and lodges set among the crater lakes.",
    highlights: [
      "Over 50 crater lakes",
      "Tea plantation tours",
      "Rwenzori mountain views",
      "Base for Kibale Forest",
      "Community tourism",
    ],
    activities: [
      "Crater lake hiking",
      "Tea plantation visits",
      "Cycling",
      "Community walks",
      "Bird watching",
    ],
    bestTimeToVisit: "Year-round. Drier months offer better views of the Rwenzori Mountains.",
    gettingThere: "Fort Portal is about 5 hours from Entebbe by road via Mubende or Mityana.",
    faq: [],
    seoTitle: "Fort Portal & Crater Lakes | Lodge Guide Uganda",
    seoDescription:
      "Lodges and accommodation around Fort Portal and the crater lakes region. A scenic base for Kibale Forest and western Uganda.",
    heroImage: "",
  },
  {
    id: "murchison-falls",
    name: "Murchison Falls National Park",
    slug: "murchison-falls",
    description:
      "Uganda's largest national park, where the Victoria Nile forces through a narrow gorge to create one of the world's most powerful waterfalls.",
    longDescription:
      "Murchison Falls National Park covers over 3,800 square kilometres in northwestern Uganda. The park is bisected by the Victoria Nile, which plunges 43 metres through a gap just 7 metres wide — creating the dramatic Murchison Falls.\n\nThe northern bank offers classic savanna game drives with elephants, giraffes, lions, leopards, and large buffalo herds. Boat cruises upstream to the base of the falls are a park highlight, offering close encounters with hippos, crocodiles, and a wide variety of waterbirds. The southern bank features dense forest with chimpanzee tracking opportunities in the Budongo and Kaniyo Pabidi forests.",
    highlights: [
      "Murchison Falls",
      "Boat cruise to the falls",
      "Big game on northern bank",
      "Chimpanzee tracking in Budongo",
      "Nile Delta bird watching",
    ],
    activities: [
      "Game drives",
      "Boat cruise",
      "Hiking to the top of the falls",
      "Chimpanzee tracking",
      "Bird watching",
      "Sport fishing",
    ],
    bestTimeToVisit:
      "June to September and December to March for game viewing. The boat cruise operates year-round.",
    gettingThere:
      "About 5–6 hours from Entebbe by road. Charter flights to Pakuba or Bugungu airstrips are available. The Ziwa Rhino Sanctuary is a popular en-route stop.",
    faq: [],
    seoTitle: "Murchison Falls National Park | Lodge Guide Uganda",
    seoDescription:
      "Find lodges in Murchison Falls National Park. Game drives, Nile boat cruises and the mighty Murchison Falls in Uganda's largest park.",
    heroImage: "",
  },
  {
    id: "ziwa-rhino",
    name: "Ziwa Rhino Sanctuary",
    slug: "ziwa-rhino",
    description:
      "The only place in Uganda to see wild rhinos. A conservation project working to reintroduce white rhinos to Uganda's national parks.",
    longDescription:
      "Ziwa Rhino Sanctuary is a 70-square-kilometre fenced sanctuary in Nakasongola District, about halfway between Kampala and Murchison Falls. It was established in 2005 by the Rhino Fund Uganda and Uganda Wildlife Authority to breed southern white rhinos with the long-term goal of reintroducing them into Uganda's national parks.\n\nVisitors can go on guided rhino tracking walks to see the rhinos on foot — a rare and memorable experience. The sanctuary also supports shoebill storks, various antelope species, and over 300 bird species. It is a popular stop for travellers en route to Murchison Falls.",
    highlights: [
      "Rhino tracking on foot",
      "Conservation success story",
      "Shoebill stork sightings",
      "En route to Murchison Falls",
      "Over 300 bird species",
    ],
    activities: ["Rhino tracking", "Bird watching", "Nature walks", "Shoebill spotting"],
    bestTimeToVisit: "Year-round. Early morning walks offer the best rhino tracking conditions.",
    gettingThere:
      "Ziwa is about 2.5 hours from Kampala on the Kampala–Gulu highway, making it a convenient stop en route to Murchison Falls.",
    faq: [],
    seoTitle: "Ziwa Rhino Sanctuary | Lodge Guide Uganda",
    seoDescription:
      "Accommodation near Ziwa Rhino Sanctuary. Track white rhinos on foot at Uganda's only rhino conservation project.",
    heroImage: "",
  },
  {
    id: "lake-mburo",
    name: "Lake Mburo National Park",
    slug: "lake-mburo",
    description:
      "A compact savanna park close to Kampala, home to zebras, elands, giraffes, hippos, and over 350 bird species. Often used as a first or last safari stop.",
    longDescription:
      "Lake Mburo National Park is one of Uganda's smaller parks at 370 square kilometres, but it packs a surprising diversity of wildlife into a compact area. It is the closest savanna park to Kampala, making it a popular choice for short safaris and as a stopover between Kampala and the southwest.\n\nThe park is centred around Lake Mburo and four other lakes, which attract hippos, crocodiles, and a variety of waterbirds. It is one of the few parks in Uganda where you can see zebras and elands. Horseback safaris and walking safaris are available here — unusual for most East African parks. The surrounding acacia woodland supports impala, bushbuck, and several nocturnal species.",
    highlights: [
      "Zebras and elands",
      "Horseback safaris",
      "Walking safaris",
      "Lake Mburo boat trip",
      "Close to Kampala",
    ],
    activities: [
      "Game drives",
      "Boat trip",
      "Horseback safari",
      "Walking safari",
      "Night game drive",
      "Bird watching",
    ],
    bestTimeToVisit: "Year-round. Dry seasons offer better game viewing around the lake.",
    gettingThere:
      "About 3.5–4 hours from Kampala by road. The park is along the main highway to southwestern Uganda.",
    faq: [],
    seoTitle: "Lake Mburo National Park | Lodge Guide Uganda",
    seoDescription:
      "Lodges and camps in Lake Mburo National Park. Walking safaris, horseback rides and zebra sightings near Kampala.",
    heroImage: "",
  },
  {
    id: "kidepo",
    name: "Kidepo Valley National Park",
    slug: "kidepo",
    description:
      "A remote and strikingly beautiful park in Uganda's far northeast. Often ranked among Africa's finest wilderness areas, with wildlife found nowhere else in Uganda.",
    longDescription:
      "Kidepo Valley National Park covers 1,442 square kilometres in the rugged Karamoja region, near the borders of South Sudan and Kenya. Its semi-arid landscape of open plains, rocky outcrops, and palm-lined valleys is unlike any other park in Uganda.\n\nKidepo is home to species found nowhere else in Uganda, including cheetah, striped hyena, aardwolf, caracal, and greater and lesser kudu. Large herds of buffalo, elephants, and Jackson's hartebeest roam the Narus Valley, while the seasonal Kidepo Valley to the north offers a more remote landscape. The Karamojong pastoralists who live around the park add a rich cultural dimension to visits.",
    highlights: [
      "Remote wilderness",
      "Unique species: cheetah, striped hyena",
      "Narus Valley game drives",
      "Karamojong cultural visits",
      "Dramatic scenery",
    ],
    activities: [
      "Game drives",
      "Nature walks",
      "Cultural visits to Karamojong communities",
      "Bird watching",
      "Hot springs visit",
    ],
    bestTimeToVisit:
      "December to March and June to September. The dry seasons concentrate wildlife around water sources in the Narus Valley.",
    gettingThere:
      "About 10–12 hours from Kampala by road, or 2 hours by charter flight to Apoka airstrip. The journey by road passes through the Karamoja region.",
    faq: [],
    seoTitle: "Kidepo Valley National Park | Lodge Guide Uganda",
    seoDescription:
      "Find lodges in Kidepo Valley National Park. Uganda's most remote and spectacular park with cheetah, striped hyena and vast savanna plains.",
    heroImage: "",
  },
  {
    id: "karamoja",
    name: "Karamoja",
    slug: "karamoja",
    description:
      "Uganda's wild northeast. A frontier region of dramatic landscapes, traditional pastoralist cultures, and emerging tourism opportunities.",
    longDescription:
      "Karamoja is Uganda's largest and least-visited sub-region, occupying much of the northeast. It is home to the Karamojong people, semi-nomadic pastoralists with a distinctive cultural identity. The landscape varies from dry plains and rocky mountains to seasonal rivers and scattered homesteads.\n\nTourism in Karamoja is still in its early stages, offering adventurous travellers an authentic and uncrowded experience. Highlights include Kidepo Valley National Park, the Pian Upe Wildlife Reserve, Mount Moroto, and cultural encounters with the Karamojong and Tepeth communities.",
    highlights: [
      "Karamojong cultural encounters",
      "Mount Moroto",
      "Frontier adventure travel",
      "Pian Upe Wildlife Reserve",
      "Off-the-beaten-path destination",
    ],
    activities: [
      "Cultural visits",
      "Hiking",
      "Wildlife viewing",
      "Photography",
      "Community tourism",
    ],
    bestTimeToVisit: "December to March and June to September.",
    gettingThere:
      "Moroto is about 8–10 hours from Kampala by road. Charter flights are available to Moroto and Kidepo.",
    faq: [],
    seoTitle: "Karamoja Region | Lodge Guide Uganda",
    seoDescription:
      "Discover accommodation in Uganda's Karamoja region. Cultural encounters, Mount Moroto and access to Kidepo Valley National Park.",
    heroImage: "",
  },
  {
    id: "sipi-falls",
    name: "Sipi Falls & Mount Elgon",
    slug: "sipi-falls",
    description:
      "A trio of stunning waterfalls on the slopes of Mount Elgon in eastern Uganda. Known for coffee tours, abseiling, and scenic hiking.",
    longDescription:
      "The Sipi Falls are three waterfalls on the western slopes of Mount Elgon, near the town of Kapchorwa in eastern Uganda. The tallest falls drops approximately 100 metres, and all three can be visited on a guided half-day hike. The surrounding landscape of steep green hills and coffee plantations is some of the most scenic in Uganda.\n\nMount Elgon itself is an ancient volcanic caldera straddling the Uganda–Kenya border. It offers multi-day hiking and climbing routes, hot springs, and caves. The Bagisu and Sabiny communities in the area offer cultural experiences including coffee tours — the region produces some of Uganda's best arabica coffee.",
    highlights: [
      "Three waterfalls",
      "Coffee plantation tours",
      "Mount Elgon hiking",
      "Abseiling at the falls",
      "Scenic eastern Uganda",
    ],
    activities: [
      "Waterfall hikes",
      "Coffee tours",
      "Abseiling",
      "Mount Elgon trekking",
      "Cultural visits",
      "Bird watching",
    ],
    bestTimeToVisit: "Year-round. June to August and December to February are the driest months.",
    gettingThere:
      "Sipi Falls is about 5–6 hours from Kampala by road via Mbale. The nearest major town is Mbale.",
    faq: [],
    seoTitle: "Sipi Falls & Mount Elgon | Lodge Guide Uganda",
    seoDescription:
      "Lodges and guesthouses near Sipi Falls and Mount Elgon. Waterfall hikes, coffee tours and abseiling in eastern Uganda.",
    heroImage: "",
  },
  {
    id: "jinja",
    name: "Jinja & River Nile",
    slug: "jinja",
    description:
      "Uganda's adventure capital at the source of the Nile. White-water rafting, bungee jumping, kayaking, and riverfront relaxation.",
    longDescription:
      "Jinja sits at the point where the Victoria Nile flows out of Lake Victoria, historically considered the source of the Nile. The town has become East Africa's premier adventure destination, offering world-class white-water rafting, kayaking, bungee jumping, jet boating, and stand-up paddleboarding on the Nile.\n\nBeyond adventure sports, Jinja offers a more relaxed side with riverfront lodges, sunset boat cruises, and visits to the source of the Nile. The town itself has a growing café and restaurant scene, and community tourism projects in the surrounding area provide cultural encounters.",
    highlights: [
      "Source of the Nile",
      "White-water rafting",
      "Bungee jumping",
      "Riverfront relaxation",
      "Adventure sports capital",
    ],
    activities: [
      "White-water rafting",
      "Kayaking",
      "Bungee jumping",
      "Boat cruise",
      "Stand-up paddleboarding",
      "Quad biking",
      "Horseback riding",
    ],
    bestTimeToVisit: "Year-round. Rafting and water activities operate in all seasons.",
    gettingThere: "About 2–2.5 hours from Kampala by road, or 3 hours from Entebbe.",
    faq: [],
    seoTitle: "Jinja & River Nile | Lodge Guide Uganda",
    seoDescription:
      "Accommodation in Jinja at the source of the Nile. White-water rafting, adventure sports and riverside lodges in Uganda's adventure capital.",
    heroImage: "",
  },
  {
    id: "entebbe",
    name: "Entebbe",
    slug: "entebbe",
    description:
      "Uganda's gateway city on the shores of Lake Victoria. Home to the international airport, botanical gardens, and a relaxed lakeside atmosphere.",
    longDescription:
      "Entebbe is a leafy peninsula town on the northern shore of Lake Victoria, about 40 km from Kampala. It is home to Uganda's only international airport and is the first and last stop for most visitors to the country.\n\nThe town has a relaxed, low-key atmosphere quite different from bustling Kampala. Attractions include the Uganda Wildlife Education Centre (zoo), the Entebbe Botanical Gardens, and sandy beaches along the lake. There is a good range of hotels and guesthouses from budget to high-end, making it a convenient place to spend a night before or after safari.",
    highlights: [
      "International airport gateway",
      "Botanical gardens",
      "Lake Victoria beaches",
      "Wildlife Education Centre",
      "Relaxed lakeside town",
    ],
    activities: [
      "Botanical gardens visit",
      "Wildlife centre visit",
      "Beach relaxation",
      "Boat rides on Lake Victoria",
      "Shopping",
    ],
    bestTimeToVisit: "Year-round.",
    gettingThere: "Entebbe International Airport is the main entry point into Uganda.",
    faq: [],
    seoTitle: "Entebbe | Lodge Guide Uganda",
    seoDescription:
      "Hotels and lodges in Entebbe near the international airport. Lake Victoria beaches, botanical gardens and a convenient gateway to Uganda.",
    heroImage: "",
  },
  {
    id: "kampala",
    name: "Kampala",
    slug: "kampala",
    description:
      "Uganda's vibrant capital city. A sprawling metropolis built on seven hills, with a growing food scene, cultural landmarks, and busy nightlife.",
    longDescription:
      "Kampala is Uganda's capital and largest city, home to an estimated 3 million people in the greater metropolitan area. Built on and around seven hills, the city is a dynamic mix of modern high-rises, colonial-era buildings, bustling markets, and green spaces.\n\nDriving through Kampala after arriving at Entebbe Airport is an experience in itself. During our January 2026 visit, we drove straight through the city centre — the roads were packed with cars, boda-bodas (motorcycle taxis) and bicycles weaving through traffic in what feels like organised chaos. Roadside stalls and small shops line every main road, and the energy is constant. It is loud, busy, and unmistakably alive.\n\nNeighbourhoods like Kamwokya — home to the Uganda Wildlife Education Centre — and the leafy hills of Kololo and Nakasero offer a quieter side of the city. The Kasubi Tombs (a UNESCO World Heritage Site), the Uganda Museum, and the vibrant Owino Market are all worth visiting. Kampala also has an excellent and growing food scene, with restaurants serving everything from local rolex (a chapati-and-egg street snack) to contemporary East African cuisine.\n\nMost safari travellers spend one or two nights in Kampala at the start or end of their trip. The city is a practical base for organising permits, meeting tour operators, and stocking up on supplies before heading west to the national parks.",
    highlights: [
      "Kasubi Tombs (UNESCO)",
      "Uganda Museum",
      "Vibrant markets and street food",
      "Food and nightlife scene",
      "Seven hills cityscape",
      "Kamwokya and Uganda Wildlife Education Centre",
    ],
    activities: [
      "City tours",
      "Market visits",
      "Cultural sites",
      "Food tours",
      "Shopping",
      "Nightlife",
    ],
    bestTimeToVisit: "Year-round. Kampala has a tropical climate with temperatures around 25-28°C. The drier months (June-September and December-February) are slightly more comfortable for walking tours.",
    gettingThere: "About 40 minutes from Entebbe International Airport by car. Boda-bodas (motorcycle taxis) and ride-hailing apps like SafeBoda operate throughout the city. For onward travel, domestic flights depart from Entebbe to Bwindi (Kisoro/Kihihi), Murchison Falls, and Kidepo.",
    faq: [
      {
        question: "How many lodges are there in Kampala?",
        answer: "This guide lists hotels and lodges in Kampala ranging from international chain hotels to boutique guesthouses. Options include the Sheraton Kampala, Speke Resort Munyonyo on the shores of Lake Victoria, and smaller properties in the Kololo and Nakasero neighbourhoods.",
      },
      {
        question: "Is Kampala worth visiting on a Uganda safari?",
        answer: "Kampala is worth a day or two at the start or end of a safari. The Kasubi Tombs (UNESCO), Uganda Museum, and Owino Market offer genuine cultural experiences. The city also has Uganda's best restaurant scene and is a practical place to organise permits and supplies.",
      },
      {
        question: "How do you get from Kampala to Bwindi?",
        answer: "The drive from Kampala to Bwindi takes 8-10 hours via Mbarara and Kabale. Alternatively, fly from Entebbe to Kisoro or Kihihi airstrip (about 1.5 hours) with Aerolink Uganda. Most travellers break the drive with a night at Lake Bunyonyi.",
      },
    ],
    seoTitle: "Lodges in Kampala — Hotels & Accommodation Guide",
    seoDescription:
      "Find lodges and hotels in Kampala, Uganda's capital. From city hotels to guesthouses — independent guide with no booking fees.",
    heroImage: "",
  },
  {
    id: "ssese-islands",
    name: "Victoria Lake Islands",
    slug: "ssese-islands",
    description:
      "The Ssese Islands and other Lake Victoria islands offer beaches, fishing, forest walks, and a laid-back island atmosphere off Uganda's southern coast.",
    longDescription:
      "The Ssese Islands are an archipelago of 84 islands in the northwestern part of Lake Victoria. The largest and most visited is Bugala Island, accessible by ferry from Bukakata or Entebbe. The islands offer sandy beaches, palm-fringed shores, forest walks, and a slower pace of life.\n\nOther Lake Victoria islands — including Ngamba Island Chimpanzee Sanctuary — offer day trips from Entebbe. The islands appeal to travellers looking for a beach getaway, fishing trips, or a break from the safari circuit. Accommodation ranges from basic camps to comfortable lodges.",
    highlights: [
      "Sandy beaches",
      "Island atmosphere",
      "Ngamba Island chimps",
      "Fishing trips",
      "Forest walks on Bugala",
    ],
    activities: [
      "Beach relaxation",
      "Fishing",
      "Forest walks",
      "Ngamba Island visit",
      "Canoeing",
      "Bird watching",
    ],
    bestTimeToVisit: "Year-round, though December to February and June to August tend to be drier.",
    gettingThere:
      "Bugala Island is reached by ferry from Bukakata (about 3.5 hours from Kampala) or Entebbe. Ngamba Island is a short boat ride from Entebbe.",
    faq: [],
    seoTitle: "Victoria Lake Islands | Lodge Guide Uganda",
    seoDescription:
      "Accommodation on Uganda's Lake Victoria islands including the Ssese Islands. Beaches, fishing and island getaways.",
    heroImage: "",
  },
];

export const regionsMap: Record<string, Region> = Object.fromEntries(
  regions.map((r) => [r.slug, r])
);
