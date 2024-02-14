browser.tabs.onCreated.addListener((tab) => {
  if (!tab.url || tab.url === "about:blank") {
    browser.tabs.update(tab.id, { url: "https://pathofexile.media" });
  }
});

browser.windows.onCreated.addListener(() => {
  browser.tabs.create({ url: "https://pathofexile.media" });
});


// browser.windows.onCreated.addListener((window) => {
//   browser.tabs.create({
//     url: browser.runtime.getURL("https://pathofexile.media"),
//     windowId: window.id,
//     active: true,
//   });
// });

// browser.browserAction.onClicked.addListener(() => {
//   browser.tabs.create({ url: browser.runtime.getURL("https://pathofexile.media") });
// });