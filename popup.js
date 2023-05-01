
document.addEventListener('DOMContentLoaded', function() {
  var textToSpeechButton = document.getElementById('text-to-speech');
  var stopSpeechButton = document.getElementById('stop-speech');

  textToSpeechButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'text-to-speech'}, function(response) {
        console.log(response);
      });
    });
  });

  stopSpeechButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'stop-speech'}, function(response) {
        console.log(response);
      });
    });
  });
});


