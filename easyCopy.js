shortcut.add("Ctrl+Alt+C", copyToClipboard);

function copyToClipboard() {
  var selection = window.getSelection();
  var text = selection.toString();
  console.log(text);
  
  chrome.extension.sendRequest({ textToCopy: text });
}