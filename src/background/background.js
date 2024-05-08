chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "https://github.com/sapondanaisriwan/copy-instagram-image",
    });
  }
});
