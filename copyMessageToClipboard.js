chrome.extension.onRequest.addListener(function (msg, sender, sendResponse) {

      var textarea = document.getElementById("tmp-clipboard");

      // now we put the message in the textarea
      textarea.value = msg.textToCopy;

      // and copy the text from the textarea
      textarea.select();
      document.execCommand("copy", false, null);

	  textarea.innerHTMl = ""
      // finally, cleanup / close the connection
      sendResponse({});
    });