

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'text-to-speech') {
    // Get the selected text on the page
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      // Speak the selected text
      speak(selectedText);
      sendResponse({status: 'success'});
    }
  } else if (request.action === 'stop-speech') {
    // Stop the speech synthesis
    speechSynthesis.cancel();
    sendResponse({status: 'success'});
  }
});

// Speak function
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  // Set the voice to Google US English
  utterance.voiceURI = 'Google US English';
  utterance.lang = 'en-US';
  utterance.rate = 1.0; // Set the speech rate
  synth.speak(utterance);
}
