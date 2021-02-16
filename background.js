console.log('start')
chrome.action.onClicked.addListener(tab => {
  chrome.tabs.executeScript(null, {

    // the script will click the button into the tab content
    code: "console.log(document)"
});

  console.log('click')
  console.log(tab)
  var el = document.createElement('textarea');
  var url = tab.url;
  console.log(url)
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(url.lastIndexOf('/') + 1, url.length)
  document.execCommand('copy');
  document.body.removeChild(el);
});
console.log('')