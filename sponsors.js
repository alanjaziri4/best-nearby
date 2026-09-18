// Best Nearby — resilient Google Sheets sync
// The current sponsor list is embedded as a fallback so the site never shows "No Options".
// Google Sheets then refreshes the list automatically in the background.

window.BEST_NEARBY = {
  siteTitle: "Best Nearby",
  subtitle: "Our local picks for your stay",
  disclosure: "Sponsored local partner — we may receive compensation for this recommendation.",
  categories: [
  {
    "category": "Pizza",
    "emoji": "🍕",
    "business": "Illiano's Grill",
    "blurb": "Our local pizza pick.",
    "perk": "",
    "website": "https://illianosgrill.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Illiano%27s%20Grill%2C%20257%20W%20Town%20St%2C%20Norwich%2C%20CT%2006389"
  },
  {
    "category": "Pasta",
    "emoji": "🍝",
    "business": "Jack's Brick Oven",
    "blurb": "Our local pasta pick.",
    "perk": "",
    "website": "https://jacksbrickoven.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Jack%27s%20Brick%20Oven%2C%20493%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Sushi",
    "emoji": "🍣",
    "business": "Mahzu Japanese Restaurant",
    "blurb": "Our local sushi pick.",
    "perk": "",
    "website": "https://www.google.com/maps/search/?api=1&query=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Mahzu%20Japanese%20Restaurant%2C%20624%20W%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Cocktails",
    "emoji": "🍸",
    "business": "Your Cocktail Sponsor",
    "blurb": "Our local cocktail pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Breakfast",
    "emoji": "🥞",
    "business": "Your Breakfast Sponsor",
    "blurb": "Our local breakfast pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Coffee",
    "emoji": "☕",
    "business": "Your Coffee Sponsor",
    "blurb": "Our local coffee pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Steak",
    "emoji": "🥩",
    "business": "Your Steak Sponsor",
    "blurb": "Our local steak pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Late Night",
    "emoji": "🌙",
    "business": "Your Late-Night Sponsor",
    "blurb": "Our late-night pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Spa & Massage",
    "emoji": "💆",
    "business": "Your Wellness Sponsor",
    "blurb": "Our local wellness pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Golf",
    "emoji": "⛳",
    "business": "Your Golf Sponsor",
    "blurb": "Our local golf pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Entertainment",
    "emoji": "🎟️",
    "business": "Your Entertainment Sponsor",
    "blurb": "Our local entertainment pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Transportation",
    "emoji": "🚙",
    "business": "Your Transportation Sponsor",
    "blurb": "Our local transportation pick.",
    "perk": "Guest perk goes here",
    "website": "https://example.com",
    "directions": "https://maps.apple.com/"
  },
  {
    "category": "Thai",
    "emoji": "🍜",
    "business": "Thai by Thai",
    "blurb": "Our local Thai pick.",
    "perk": "",
    "website": "https://lovethaibythai.com/",
    "directions": "https://www.google.com/maps/dir/?api=1&destination=Thai%20by%20Thai%2C%20631%20N%20Main%20St%2C%20Norwich%2C%20CT%2006360"
  },
  {
    "category": "Sandwiches",
    "emoji": "🥪",
    "business": "VOC's Westside Pizza",
    "blurb": "Our local sandwich pick.",
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
      picker.options[picker.selectedIndex].textContent
        ? picker.options[picker.selectedIndex].textContent.replace(/^Best\s+/, "")
        : "";

    picker.innerHTML = "";

    window.BEST_NEARBY.categories.forEach((x, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `Best ${x.category}`;
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
