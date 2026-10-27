const cfg = {
  font: "Open Sans",
  background: null,
  axis: { grid: false, labelColor: "#555", titleColor: "#333", domainColor: "#bbb", tickColor: "#bbb" },
  view: { stroke: null },
  title: { anchor: "start", fontSize: 15, fontWeight: 600, subtitleColor: "#666", subtitleFontSize: 12 }
};

const charts = [
  ["#ch1", "specs/01_genres_overview.vl.json"],
  ["#ch2", "specs/02_heatmap.vl.json"]
  // ["#ch3", "specs/03_treemap.vg.json"],
  // ["#ch4", "specs/04_bump.vl.json"],
  // ["#ch5", "specs/05_waffle.vl.json"],
  // ["#ch6", "specs/06_choropleth.vl.json"],
  // ["#ch7", "specs/07_symbols.vl.json"],
  // ["#ch8", "specs/08_tilegrid.vl.json"],
  // ["#ch9", "specs/09_dumbbell.vl.json"],
  // ["#ch10", "specs/10_slope.vl.json"]
];

charts.forEach(([el, url]) => {
  vegaEmbed(el, url, { config: cfg, actions: false }).catch(console.error);
});
