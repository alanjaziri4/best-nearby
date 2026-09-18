// Best Nearby — resilient Google Sheets sync
// The current sponsor list is embedded as a fallback so the site never shows "No Options".
// Google Sheets then refreshes the list automatically in the background.

window.BEST_NEARBY = {
  siteTitle: "Best Nearby",
  subtitle: "Our local picks for your stay",
  disclosure: "Sponsored local partner — we may receive compensation for this recommendation.",
  categories: [
{
  "category": "Best of the Best",
  "emoji": "🥇",
  "business": "Mahzu Japanese Restaurant",
  "blurb": "Our gold-medal pick. This is how we roll.",
  "perk": "",
  "website": "https://www.google.com/maps/search/?api=1&query=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360",
  "directions": "https://www.google.com/maps/dir/?api=1&destination=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
},
{
  "category": "Chinese",
  "emoji": "🥡",
  "business": "Golden Palace",
  "blurb": "Our local pick for a golden little takeout night.",
  "perk": "",
  "website": "https://www.goldenpalace-ct.com/",
  "directions": "https://www.google.com/maps/dir/?api=1&destination=Golden%20Palace%2C%202173%20Norwich-New%20London%20Turnpike%2C%20Uncasville%2C%20CT%2006382"
},
  {
    "category": "Pizza",
    "emoji": "🍕",
    "business": "Illiano's Grill",
    "blurb": "Our pick for a little slice of local happiness.",
    "perk": "",
    "website": "https://illianosgrill.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Illiano%27s%20Grill%2C%20257%20W%20Town%20St%2C%20Norwich%2C%20CT%2006389"
  },
  {
    "category": "Pasta",
    "emoji": "🍝",
    "business": "Jack's Brick Oven",
    "blurb": "Our choice for a forkful of comfort with a local twirl.",
    "perk": "",
    "website": "https://jacksbrickoven.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Jack%27s%20Brick%20Oven%2C%20493%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Sushi",
    "emoji": "🍣",
    "business": "Mahzu Japanese Restaurant",
    "blurb": "Our local pick for good rolls and even better moods.",
    "perk": "",
    "website": "https://www.google.com/maps/search/?api=1&query=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Cocktails",
    "emoji": "🍸",
    "business": "Your Cocktail Sponsor",
    "blurb": "Our pick for a little local spirit, on the rocks.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Breakfast",
    "emoji": "🥞",
    "business": "Your Breakfast Sponsor",
    "blurb": "Our sunny-side-up choice for starting the day right.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Coffee",
    "emoji": "☕",
    "business": "Your Coffee Sponsor",
    "blurb": "Our go-to for a cup of joe and a little get-up-and-go.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Steak",
    "emoji": "🥩",
    "business": "Your Steak Sponsor",
    "blurb": "Our pick for a sizzling night out. Well done, you.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Late Night",
    "emoji": "🌙",
    "business": "Your Late-Night Sponsor",
    "blurb": "Our pick for when your pajamas are on but your appetite isn't off.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Spa & Massage",
    "emoji": "💆",
    "business": "Your Wellness Sponsor",
    "blurb": "Our go-to for fewer knots and more ahhhs.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Golf",
    "emoji": "⛳",
    "business": "Your Golf Sponsor",
    "blurb": "Our pick for fairways, fresh air, and the occasional mulligan.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Entertainment",
    "emoji": "🎟️",
    "business": "Your Entertainment Sponsor",
    "blurb": "Our choice for turning a night out into a story worth telling.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Transportation",
    "emoji": "🚙",
    "business": "Your Transportation Sponsor",
    "blurb": "Our choice for getting around without going in circles.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Thai",
    "emoji": "🍜",
    "business": "Thai by Thai",
    "blurb": "Our choice for a little spice and everything rice.",
    "perk": "",
    "website": "https://lovethaibythai.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Thai%20by%20Thai%2C%20631%20N%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Sandwiches",
    "emoji": "🥪",
    "business": "VOC's Westside Pizza",
    "blurb": "Our go-to for happiness stacked between two slices.",
    "perk": "",
    "website": "https://www.vocswestsidepizza.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=VOC%27s%20Westside%20Pizza%2C%20273%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  }
]
};

(function () {
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/12moshgznXZRxywLvHyTAre4Z40oQxN1kebrRRIpIuFM/gviz/tq?tqx=out:json&sheet=Sponsors";

  function refreshExistingPage() {
    const picker = document.getElementById("picker");
    if (!picker) return;

    const selectedCategory =
      picker.options[picker.selectedIndex] &&
      picker.options[picker.selectedIndex].dataset.category
        ? picker.options[picker.selectedIndex].dataset.category
        : "";

    picker.innerHTML = "";

    window.BEST_NEARBY.categories.forEach((x, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.dataset.category = x.category;
      option.textContent = `${x.emoji || ""} ${x.category}`.trim();
      picker.appendChild(option);
    });

    let selectedIndex = window.BEST_NEARBY.categories.findIndex(
      x => x.category === selectedCategory
    );
    if (selectedIndex < 0) selectedIndex = 0;
    picker.value = String(selectedIndex);

    if (typeof window.render === "function" && window.BEST_NEARBY.categories.length) {
      window.render(selectedIndex);
    }
  }

  window.google = window.google || {};
  google.visualization = google.visualization || {};
  google.visualization.Query = google.visualization.Query || {};

  google.visualization.Query.setResponse = function (response) {
    try {
      if (!response || response.status === "error" || !response.table) return;

      const headers = response.table.cols.map(col => (col.label || "").trim());
      const index = Object.fromEntries(headers.map((name, i) => [name, i]));

      function get(row, name) {
        const i = index[name];
        if (i === undefined) return "";
        const cell = row.c[i];
        if (!cell || cell.v == null) return "";
        return String(cell.v).trim();
      }

      const live = response.table.rows
        .filter(row => get(row, "Active").toUpperCase() === "TRUE")
        .map(row => ({
          category: get(row, "Category"),
          emoji: get(row, "Emoji"),
          business: get(row, "Business"),
          blurb: get(row, "Description"),
          perk: get(row, "Guest Perk"),
          website: get(row, "Link"),
          directions: get(row, "Directions")
        }))
        .filter(item => item.category && item.business);

      if (live.length) {
        window.BEST_NEARBY.categories = live;
        refreshExistingPage();
      }
    } catch (err) {
      console.error("Best Nearby Sheet sync failed; using fallback data.", err);
    }
  };

  // Load Sheet asynchronously. The fallback data above means the page is usable immediately.
  const script = document.createElement("script");
  script.src = SHEET_URL + "&_=" + Date.now();
  script.async = true;
  script.onerror = function () {
    console.warn("Best Nearby Sheet unavailable; using fallback data.");
  };
  document.head.appendChild(script);
})();
