chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Translate ' + tab.url);
  chrome.tabs.executeScript(null, {
    file: 'translate.js'
  });
});