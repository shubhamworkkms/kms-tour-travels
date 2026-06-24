const packagesData = [
  {
    id: "kashmir-3d",
    name: "3 Days Kashmir Tour",
    duration: "2 Nights / 3 Days",
    placesCovered: ["Srinagar", "Gulmarg"],
    startingPrice: 8999,
    category: "Budget Tour",
    image: "assets/image/pkg_quick.png",
    overview: "Experience the ultimate quick getaway to Kashmir. Explore the charm of Srinagar's Dal Lake and the snow-capped peak excursions in Gulmarg in just 3 days.",
    inclusions: [
      "Hotel Accommodation in 3 Star / 4 Star / 5 Star (as selected)",
      "Daily Breakfast & Dinner",
      "Dal Lake Shikara Ride (1 Hour)",
      "Private Cab for Sightseeing",
      "Mughal Gardens Entry",
      "Airport Pickup & Drop",
      "Local Support & Customer Assistance"
    ],
    exclusions: [
      "Gondola Ride Tickets (can be pre-booked online)",
      "Lunch, snacks, and personal mineral water",
      "Tips, insurance, laundry, phone calls",
      "Airfare or Train fare",
      "Local guide fees or pony rides"
    ],
    prices: {
      budget: 8999,
      deluxe: 12999,
      luxury: 19999
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Sightseeing",
        travelTime: "Airport to Hotel (30-45 Minutes)",
        places: ["Dal Lake", "Shikara Ride", "Nishat Garden", "Shalimar Garden", "Nehru Park", "Nigeen Lake"],
        desc: "Meet our representative at Srinagar Airport and transfer to your hotel/houseboat. In the afternoon, enjoy a romantic 1-hour Shikara ride on Dal Lake. Later, visit the famous Mughal Gardens including Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love) built by Jahangir. Overnight stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 2,
        title: "Gulmarg Day Excursion",
        travelTime: "Srinagar to Gulmarg (2 Hours each way)",
        places: ["Tangmarg", "Gulmarg Valley", "Gondola Ride Point", "Golf Course", "Snow Point"],
        desc: "After breakfast, proceed for a full-day excursion to Gulmarg (Meadow of Flowers). Admire the scenic drive via Tangmarg. In Gulmarg, enjoy the world's second-highest cable car (Gondola ride) up to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak). Visit the historic golf course and capture stunning pictures of snow peaks. Return to Srinagar for overnight stay.",
        stay: "Srinagar"
      },
      {
        day: 3,
        title: "Srinagar Sightseeing & Departure",
        travelTime: "Hotel to Airport (45 Minutes)",
        places: ["Tulip Garden (Seasonal)", "Local Market shopping"],
        desc: "Enjoy a hearty breakfast, pack your bags, and check out. If time permits, visit the Indira Gandhi Memorial Tulip Garden (seasonal) or shop for authentic Kashmiri handicrafts, pashmina shawls, and dry fruits in Lal Chowk or local bazaar. Transfer to Srinagar Airport for your onward flight with wonderful memories.",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Is the Gondola ride included in the price?", a: "No, Gondola ride tickets are not included in the starting price. We recommend booking tickets online in advance through the official J&K tourism site due to high demand." },
      { q: "Can we customize this to stay in a houseboat?", a: "Absolutely! We can swap one night's stay in Srinagar hotel with a traditional luxury Dal Lake houseboat at a minimal extra cost." }
    ]
  },
  {
    id: "family-5d",
    name: "Kashmir Family Tour",
    duration: "4 Nights / 5 Days",
    placesCovered: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    startingPrice: 16300,
    category: "Family Tour",
    image: "assets/image/pkg_family.png",
    overview: "A perfectly paced, comfortable tour of the top destinations in Kashmir, ideal for families, kids, and senior citizens looking for premium comfort and beautiful memories.",
    inclusions: [
      "4 Nights accommodation (Srinagar base/Houseboat)",
      "Daily Breakfast & Dinner at all hotels",
      "All transfers & sightseeing in comfortable private sedan/SUV",
      "Driver Allowance, parking, toll taxes, fuel",
      "Shikara Ride on Dal Lake",
      "24x7 local support coordinator"
    ],
    exclusions: [
      "Gondola tickets, pony rides, local guide services",
      "Aru Valley, Betaab Valley local cabs in Pahalgam (JK Govt rules)",
      "Thajiwas Glacier sledge/pony in Sonamarg",
      "Lunch, laundry, personal items",
      "Any entry tickets to monuments or gardens"
    ],
    prices: {
      budget: 16300,
      deluxe: 19500,
      luxury: 31500
    },
    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Mughal Gardens",
        travelTime: "Airport to Hotel (30-45 Minutes)",
        places: ["Dal Lake", "Nishat Garden", "Shalimar Garden"],
        desc: "Arrive at Srinagar. Check in to your hotel/houseboat. Proceed to visit Nishat Garden, Shalimar Garden, and witness the beautiful sunset over the lake. Enjoy dinner at your hotel. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 2,
        title: "Gulmarg Excursion",
        travelTime: "Srinagar to Gulmarg (2 Hours each way)",
        places: ["Tangmarg", "Gondola Ride", "Snow Activities"],
        desc: "Drive to Gulmarg after breakfast. Capture pictures at the scenic Tangmarg view point. In Gulmarg, opt for Gondola cable car ride (Phase 1 & 2) and try snow sports like sledging or skiing if snow is available. Return to Srinagar for dinner and overnight stay.",
        stay: "Srinagar"
      },
      {
        day: 3,
        title: "Pahalgam Tour",
        travelTime: "Srinagar to Pahalgam (2.5 Hours each way)",
        places: ["Betaab Valley", "Aru Valley", "Lidder River", "Apple Valley"],
        desc: "Depart for Pahalgam (Valley of Shepherds) after breakfast. Cruise through Apple Orchards and Saffron fields. In Pahalgam, hire a local cab to visit the stunning Betaab Valley (where many Bollywood movies were shot) and Aru Valley. Take a peaceful stroll along the Lidder River. Return to Srinagar for overnight stay.",
        stay: "Srinagar"
      },
      {
        day: 4,
        title: "Sonamarg Tour",
        travelTime: "Srinagar to Sonamarg (3 Hours each way)",
        places: ["Sonamarg", "Thajiwas Glacier", "Sindh Valley"],
        desc: "Embark on a full-day tour to Sonamarg (Meadow of Gold). Walk along the roaring Sindh River. Hire ponies or local sledges to see the Thajiwas Glacier. The scenic backdrop is ideal for family photos. Return to Srinagar for dinner and night stay.",
        stay: "Srinagar"
      },
      {
        day: 5,
        title: "Departure from Srinagar",
        travelTime: "Hotel to Airport (45 Minutes)",
        places: ["Shankaracharya Temple", "Lal Chowk Market"],
        desc: "Visit the historical Shankaracharya Temple on a hilltop for a panoramic view of Srinagar. Shop for souvenirs at Lal Chowk before heading to the airport for your return journey home.",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Is this package suitable for old age family members?", a: "Yes, this package has minimal hotel changes, keeping Srinagar as the daily base. This reduces packing/unpacking hassle and ensures maximum rest." },
      { q: "Why are local cabs in Pahalgam excluded?", a: "Local union rules in Pahalgam do not permit outside vehicles to sightsee Betaab, Aru, and Chandanwari. Local union vehicles must be rented directly there." }
    ]
  },
  {
    id: "honeymoon-6d",
    name: "Romantic Kashmir Honeymoon Package",
    duration: "5 Nights / 6 Days",
    placesCovered: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    startingPrice: 28668,
    category: "Honeymoon Tour",
    image: "assets/image/pkg_honeymoon.png",
    overview: "A romantic, specially curated journey for couples. Features private luxury cab, candlelit dinners, room decorations, houseboat stay, and overnight stays in snowy Gulmarg and scenic Pahalgam.",
    inclusions: [
      "1 Night Luxury Houseboat in Srinagar",
      "2 Nights Mountain View Hotel in Pahalgam",
      "1 Night Cozy Snow-View Resort in Gulmarg",
      "1 Night Premium Hotel in Srinagar",
      "Daily Buffet Breakfast & Romantic Dinners",
      "1 Candle Light Dinner & Complimentary Cake",
      "Room Flower Decoration once during stay",
      "Private SUV (Innova/similar) for the entire tour",
      "All toll, parking, and driver allowances"
    ],
    exclusions: [
      "Gondola ride tickets",
      "Horse/Pony rides in Baisaran Valley or Sonamarg",
      "Pahalgam local union cab sightseeing",
      "Lunch, personal drinks, shopping, tips"
    ],
    prices: {
      budget: 28668,
      deluxe: 36500,
      luxury: 49000
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival + Romantic Houseboat & Shikara Ride",
        travelTime: "Airport to Houseboat (40 Minutes)",
        places: ["Dal Lake", "Houseboat", "Shikara Sunset Ride"],
        desc: "On arrival, transfer to your decorated premium Houseboat on Dal Lake. Check-in and relax. In the evening, enjoy a private 2-hour Shikara ride covering floating markets and Char Chinar. Overnight stay in Houseboat with a special candlelit dinner.",
        stay: "Srinagar (Houseboat)"
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        travelTime: "Srinagar City Tour",
        places: ["Nishat Garden", "Shalimar Garden", "Chashme Shahi", "Pari Mahal"],
        desc: "Relish your breakfast and check out from the houseboat. Transfer to hotel. Visit the historical Mughal Gardens, Shalimar Bagh, Chashme Shahi, and the terraced Pari Mahal (Abode of Fairies) offering romantic sunset views. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg (Overnight stay)",
        travelTime: "Srinagar to Gulmarg (2 Hours)",
        places: ["Gulmarg Valley", "Gondola ride", "Snow Point"],
        desc: "Travel to Gulmarg. Check in to your hotel amidst pine forests. Take the Gondola Cable car. Enjoy some quality private snow time. Relish a warm Kashmiri tea (Kahwa). Dinner and overnight stay in Gulmarg.",
        stay: "Gulmarg"
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam (Overnight stay)",
        travelTime: "Gulmarg to Pahalgam (4 Hours)",
        places: ["Lidder River", "Betaab Valley check-in", "Saffron fields"],
        desc: "After breakfast, take a scenic drive to Pahalgam. Enroute, visit Saffron fields in Pampore and Avantipura ruins. Check in to your luxury riverside hotel in Pahalgam. Relax beside the Lidder River. Overnight stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 5,
        title: "Pahalgam Local Sightseeing",
        travelTime: "Pahalgam Day Trip",
        places: ["Aru Valley", "Chandanwari", "Baisaran Valley (Mini Switzerland)"],
        desc: "Post breakfast, visit Aru Valley, Chandanwari (start point of Amarnath Yatra), and hire ponies to Baisaran Valley (known as Mini Switzerland for its beautiful pine meadows). Enjoy a quiet evening walking around Pahalgam market. Night stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar Airport Departure",
        travelTime: "Pahalgam to Airport (3 Hours)",
        places: ["Departure transfer"],
        desc: "Enjoy a final breakfast in Pahalgam. Drive back to Srinagar Airport directly for your flight back home, carrying lifetime romantic memories.",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Is the candlelit dinner included in the starting price?", a: "Yes, a romantic candlelit dinner, room decoration, and cake are included in the Honeymoon package price." },
      { q: "Are we going to stay in Gulmarg during peak winter?", a: "Yes, we book hotels with central heating or electric blankets in Gulmarg during winter to ensure a warm, comfortable stay." }
    ]
  },
  {
    id: "srinagar-gulmarg-pahalgam-6d",
    name: "Srinagar Gulmarg Pahalgam Tour",
    duration: "5 Nights / 6 Days",
    placesCovered: ["Srinagar", "Gulmarg", "Pahalgam"],
    startingPrice: 17999,
    category: "Deluxe Tour",
    image: "assets/image/pkg_classic.png",
    overview: "Our most popular tour configuration, linking the scenic heights of Gulmarg, the serene valleys of Pahalgam, and the classic sights of Srinagar.",
    inclusions: [
      "5 Nights accommodation (3N Srinagar, 2N Pahalgam)",
      "Daily Breakfast & Dinner",
      "Private cab for the entire duration",
      "Shikara ride on Dal Lake",
      "All tolls, parking fees, and driver allowances"
    ],
    exclusions: [
      "Flight tickets",
      "Sightseeing entry tickets to gardens",
      "Gondola and local transport fees",
      "Expenses of personal nature"
    ],
    prices: {
      budget: 17999,
      deluxe: 25999,
      luxury: 39999
    },
    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Local Sightseeing",
        travelTime: "Airport to Hotel (45 Minutes)",
        places: ["Dal Lake", "Mughal Gardens", "Shikara Ride"],
        desc: "On arrival, transfer to your hotel. Visit the grand Mughal gardens and experience a lovely Shikara ride on Dal Lake in the evening. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 2,
        title: "Srinagar Sights & Nigeen Lake",
        travelTime: "Srinagar City",
        places: ["Tulip Garden (Seasonal)", "Nigeen Lake", "Old City Craft tour"],
        desc: "Explore the peaceful Nigeen Lake, walk around historical sites, and visit the Tulip Garden (in April). Learn about local crafts. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 3,
        title: "Gulmarg Day Trip",
        travelTime: "Srinagar to Gulmarg (2 Hours each way)",
        places: ["Gulmarg Excursion", "Gondola cable car"],
        desc: "A day trip to Gulmarg. Take the Gondola ride to the Apharwat peak, walk in the lush meadows, and enjoy snow activities. Return to Srinagar for overnight stay.",
        stay: "Srinagar"
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam Transfer",
        travelTime: "Srinagar to Pahalgam (2.5 Hours)",
        places: ["Avantipura Ruins", "Saffron fields", "Pahalgam check-in"],
        desc: "Checkout and drive to Pahalgam. Stop to see the saffron fields and historic Avantipura ruins. Check in at your Pahalgam hotel. Spend a free evening by the river. Night stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 5,
        title: "Pahalgam Valley Exploration",
        travelTime: "Pahalgam local sightseeing",
        places: ["Betaab Valley", "Aru Valley", "Chandanwari"],
        desc: "Tour the beautiful valleys of Betaab and Aru. Enjoy the pristine water streams and lush coniferous forests. Overnight stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar Airport Departure",
        travelTime: "Pahalgam to Airport (3 Hours)",
        places: ["Departure transfer"],
        desc: "Check out and drive back directly to Srinagar Airport for your onward flight.",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Can we include Sonamarg in this 6-day package?", a: "Yes, we can adjust the itinerary to include a day trip to Sonamarg by replacing Day 2, or extending the trip to 7 days." }
    ]
  },
  {
    id: "complete-kashmir-7d",
    name: "Complete Kashmir Tour Package",
    duration: "6 Nights / 7 Days",
    placesCovered: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    startingPrice: 18600,
    category: "Standard Tour",
    image: "assets/image/pkg_complete.png",
    overview: "The ultimate 7-day tour that misses nothing. Overnight stays in Houseboat, Pahalgam, Gulmarg, and Srinagar. Fully loaded with special experiences.",
    inclusions: [
      "6 Nights accommodation (1N Houseboat, 2N Srinagar, 2N Pahalgam, 1N Gulmarg)",
      "Daily Breakfast & Dinner",
      "Private Deluxe Cab (Innova/Etios/similar)",
      "1-Hour Shikara Ride on Dal Lake",
      "Bonfire Night once in Pahalgam",
      "Mughal Garden entrance tickets",
      "Airport pick and drop services"
    ],
    exclusions: [
      "Flights or train tickets",
      "Gondola tickets, pony rides, local guide services",
      "Local union cabs in Pahalgam",
      "Lunch and personal tips"
    ],
    prices: {
      budget: 18600,
      deluxe: 24500,
      luxury: 38800
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Houseboat",
        travelTime: "Airport to Houseboat (40 mins)",
        places: ["Dal Lake", "Houseboat stay", "Shikara Ride"],
        desc: "Receive a warm traditional welcome at Srinagar and transfer to your houseboat on Dal Lake. Enjoy a relaxing sunset Shikara ride. Dinner and night stay in houseboat.",
        stay: "Srinagar (Houseboat)"
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        travelTime: "Srinagar City Tour",
        places: ["Nishat Garden", "Shalimar Garden", "Chashme Shahi", "Botanical Garden"],
        desc: "Move from houseboat to hotel. Explore all historical gardens built by the Mughals, and stroll through the green walkways of the Botanical Garden. Overnight stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 3,
        title: "Gulmarg Snow Adventures",
        travelTime: "Srinagar to Gulmarg (2 Hours)",
        places: ["Gondola Ride", "Snow activities", "Gulmarg stay"],
        desc: "Check out and drive to Gulmarg. Check into a beautiful valley resort. Experience the Gondola and enjoy snow tubing or sledging. Spend a cozy night in Gulmarg.",
        stay: "Gulmarg"
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam (Transfer & River Lidder)",
        travelTime: "Gulmarg to Pahalgam (4 Hours)",
        places: ["Apple Valley", "Lidder River bank", "Pahalgam check-in"],
        desc: "Drive to Pahalgam. Enroute drive past lush apple orchards. Relax in the hotel garden facing the Lidder River. Night stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 5,
        title: "Pahalgam Valleys Excursion",
        travelTime: "Pahalgam local sightseeing",
        places: ["Betaab Valley", "Aru Valley", "Chandanwari"],
        desc: "Spend a full day visiting Betaab Valley, Aru, and Chandanwari via local union vehicles. Enjoy a bonfire night back at the hotel in the evening. Night stay in Pahalgam.",
        stay: "Pahalgam"
      },
      {
        day: 6,
        title: "Sonamarg Excursion & Back to Srinagar",
        travelTime: "Pahalgam to Sonamarg (3.5 Hours, then to Srinagar 2 Hours)",
        places: ["Sonamarg", "Thajiwas Glacier", "Sindh Valley"],
        desc: "Checkout early. Visit Sonamarg (Meadow of Gold) and explore the Thajiwas Glacier. Later in the evening, drive back to Srinagar for your final night. Overnight in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 7,
        title: "Srinagar Airport Departure",
        travelTime: "Hotel to Airport (45 mins)",
        places: ["Departure"],
        desc: "Enjoy a leisurely breakfast. Check out and transfer to Srinagar Airport for your departure flight.",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Is the bonfire night included in all packages?", a: "The bonfire experience is complimentary specifically for this 7-day Complete Kashmir package in Pahalgam, subject to weather conditions." }
    ]
  },
  {
    id: "adventure-kashmir",
    name: "Adventure Kashmir Tour Package",
    duration: "6 Nights / 7 Days",
    placesCovered: ["Srinagar", "Gulmarg", "Sonamarg", "Zojila Pass", "Gurez Valley"],
    startingPrice: 24999,
    category: "Adventure Tour",
    image: "assets/image/pkg_adventure.png",
    overview: "For thrill-seekers and nature lovers. Trek high glaciers, experience snow skiing/boarding in Gulmarg, drive through the rugged Zojila Pass, and camp under the stars in Gurez Valley.",
    inclusions: [
      "6 Nights accommodation (including 1 Night camping in Gurez)",
      "Daily Breakfast & Dinner",
      "Special 4x4 Offroad SUV for high altitude travel (Zojila / Gurez)",
      "Trekking guide for Thajiwas Glacier",
      "Camping equipment (Tents, sleeping bags, mats)",
      "All permits for Gurez Valley and border areas"
    ],
    exclusions: [
      "Skiing/Snowboarding equipment hire and training costs",
      "Gondola ride tickets",
      "Rafting fees in Sonamarg/Pahalgam",
      "Flight tickets"
    ],
    prices: {
      budget: 24999,
      deluxe: 32000,
      luxury: 45000
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Base Setup",
        travelTime: "Airport to Hotel (45 Minutes)",
        places: ["Srinagar base"],
        desc: "Arrive in Srinagar. Setup base at the hotel. Briefing with your adventure guide about the trip and gear checking. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 2,
        title: "Gulmarg Adventure (Skiing & Boarding)",
        travelTime: "Srinagar to Gulmarg (2 Hours)",
        places: ["Gulmarg", "Skiing slopes", "Snowboarding"],
        desc: "Drive to Gulmarg. Under the guidance of certified instructors, enjoy skiing or snowboarding lessons on the powder slopes of Gulmarg. Night stay in Gulmarg.",
        stay: "Gulmarg"
      },
      {
        day: 3,
        title: "Gondola High Ridge Trekking",
        travelTime: "Gulmarg Peak tour",
        places: ["Apharwat Peak trek", "Phase 2 Gondola"],
        desc: "Ride the Phase 2 Gondola to Apharwat Peak (3979m). Conduct a high-altitude ridge hike towards Frozen Alpather Lake (weather permitting). Return to Srinagar in evening. Night stay in Srinagar.",
        stay: "Srinagar"
      },
      {
        day: 4,
        title: "Sonamarg Glacier Trek",
        travelTime: "Srinagar to Sonamarg (3 Hours)",
        places: ["Sonamarg", "Thajiwas Glacier Trek"],
        desc: "Drive to Sonamarg. Embark on a physical trek to the foot of the Thajiwas Glacier with our guide. Explore ice crevasses and natural ice caves. Night stay in Sonamarg.",
        stay: "Sonamarg"
      },
      {
        day: 5,
        title: "Zojila Pass Offroading & Gateway to Ladakh",
        travelTime: "Sonamarg to Zojila Pass & Back (3 Hours)",
        places: ["Zoji La Pass (3528m)", "Zero Point"],
        desc: "Experience extreme off-roading in a 4x4 vehicle through the legendary Zojila Pass. Visit Zero Point, touch snow slabs, and enjoy tea at one of the highest roads in the world. Return to Sonamarg for night stay.",
        stay: "Sonamarg"
      },
      {
        day: 6,
        title: "Gurez Valley Camping",
        travelTime: "Sonamarg to Gurez Valley (5 Hours)",
        places: ["Razdan Pass", "Habba Khatoon Peak", "Kishenganga River"],
        desc: "Drive through the breathtaking Razdan Pass (3550m) to the hidden Gurez Valley. See the pyramid-shaped Habba Khatoon Peak. Setup adventure camps along the pristine Kishenganga River. Enjoy dinner under a starlit sky. Night stay in Gurez (Camps).",
        stay: "Gurez Valley (Camping)"
      },
      {
        day: 7,
        title: "Gurez to Srinagar Airport Departure",
        travelTime: "Gurez to Airport (6 Hours)",
        places: ["Departure transfer"],
        desc: "Wake up to a crisp morning in Gurez. Drive back directly to Srinagar Airport for your flight home (late afternoon flight recommended).",
        stay: "Departure"
      }
    ],
    faqs: [
      { q: "Is Gurez Valley safe for tourists?", a: "Yes, Gurez is extremely safe and peaceful. Border permits are managed by us. Due to proximity to the border, identity checks are done at entry checkpoints." },
      { q: "Is previous trekking experience required?", a: "No, the treks and snow activities are designed for beginners with good physical fitness. Professional guides accompany you throughout." }
    ]
  }
];
