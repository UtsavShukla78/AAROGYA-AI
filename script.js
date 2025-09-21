const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage('user', text);      
  userInput.value = '';

  // space for dialogflow integration Send symptom to Dialogflow and get response
  getDiseaseFromDialogflow(text); // Replace this
}


// testing purpose->
function getDiseaseFromDialogflow(symptomText) {
  // this block is going to replace
  setTimeout(() => {
    // question answer time
    const exampleResponses = {
      "fever": "Lagta hai dimag ne zyada kaam kar liya, ab thoda rest kar!",
      "headache": "Vedant ne pakka diya hai",
      "stomach pain": "Mulli ke parathe khaye the kya.",
    };

    let response = "Sorry, I couldn't identify your symptom. Please try again.";
        for (let keyword in exampleResponses) {
      if (symptomText.toLowerCase().includes(keyword)) {
        response = exampleResponses[keyword];
        break;
      }
    }
   
    addMessage('bot', response)
  }, 1000);
}
  
  sendButton.addEventListener('click', sendMessage);


  userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });
