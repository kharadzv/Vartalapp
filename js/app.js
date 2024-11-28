// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
  
    // Display user message
    addMessageToChat("user-message", userInput);
  
    // Clear input field
    document.getElementById("userInput").value = "";
  
    // Simple chatbot response logic
    let botResponse = getBotResponse(userInput);
    setTimeout(() => addMessageToChat("bot-message", botResponse), 500);
  }
  
  // Function to generate bot response based on user input
  function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      return "Hello there! How can I help you?";
    } else if (input.includes("how are you")) {
      return "I'm just a bot, but I'm here to help!";
    } else if (input.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm not sure how to respond to that.";
    }
  }
  
  // Function to add a message to the chatbox
  function addMessageToChat(className, message) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
  
    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  // Enable sending message with Enter key
  document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });  