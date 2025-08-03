
    let remove = true;
    
    const button = document.querySelector('.btn');
  const chatHistory = [
    { role: "system", content: "You are a helpful AI assistant." }
  ];
  async function sendMessage() {
    if(remove){
        document.querySelector('.h3').remove();
        remove = false;
    }
    const input = document.getElementById("userInput");
    const userText = input.value.trim();
    if (!userText) return;
    
    appendMessage("You", userText, "user");
    chatHistory.push({ role: "user", content: userText });
    input.value = "";

    try {

      const res = await fetch(proces.env.URL, {
  method: "POST",
  headers: {
    "Authorization": process.env.KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "google/gemini-2.5-flash-lite",
    "messages": chatHistory
  })
});


      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't understand the response.";
      chatHistory.push({ role: "assistant", content: reply });
      appendMessage("GPT 4o", reply, "bot");

    } catch (err) {
      console.error("ERROR:", err);
      appendMessage("GPT 4o", "Error contacting the AI.", "bot");
    }
  }

  function appendMessage(sender, text, className) {
   
    const msgBox = document.getElementById("messages");
    const div = document.createElement("div");
    div.className = `message ${className}`;
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    
    msgBox.appendChild(div);
    msgBox.scrollTop = msgBox.scrollHeight;
  }