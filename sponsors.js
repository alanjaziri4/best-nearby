// Best Nearby — live sponsor data from Google Sheets
// This is designed to work with the existing index.html without changing the QR.

window.BEST_NEARBY = {
  siteTitle: "Best Nearby",
  subtitle: "Our local picks for your stay",
  disclosure: "Sponsored local partner — we may receive compensation for this recommendation.",
  categories: []
};

window.google = window.google || {};
google.visualization = google.visualization || {};
google.visualization.Query = google.visualization.Query || {};

google.visualization.Query.setResponse = function (response) {
  if (!response || response.status === "error" || !response.table) {
    console.error("Could not load Best Nearby sponsor data.");
    return;
  }

  const table = response.table;
  const headers = table.cols.map(col => (col.label || "").trim());
  const index = Object.fromEntries(headers.map((name, i) => [name, i]));

  function get(row, name) {
    const cell = row.c[index[name]];
    if (!cell || cell.v == null) return "";
    return String(cell.v).trim();
  }

  window.BEST_NEARBY.categories = table.rows
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
};

// document.write keeps loading synchronous here, so the existing index.html
// sees the Sheet data before it builds the dropdown.
document.write(
  '<script src="https://docs.google.com/spreadsheets/d/12moshgznXZRxywLvHyTAre4Z40oQxN1kebrRRIpIuFM/gviz/tq?tqx=out:json&amp;sheet=Sponsors"><\\/script>'
);
