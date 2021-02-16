console.log('start')
console.log(chrome)
console.log(chrome.action)
chrome.action.onClicked.addListener(tab => {
    var el = document.createElement('textarea');
    var url = window.location.href;
    console.log(url)
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(url.lastIndexOf('/') + 1, url.length)
    document.execCommand('copy');
    document.body.removeChild(el);
});