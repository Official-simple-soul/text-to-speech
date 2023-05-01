// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.text) {
      speak(request.text);
      sendResponse({status: "success"});
    }
  });
  
  // Speak function
  function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[2]
    synth.speak(utterance);
  }
  


  