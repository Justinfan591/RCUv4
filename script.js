// Function to toggle chat box visibility
// Function to toggle the chat box visibility
function toggleChat() {
    const chatBox = document.querySelector('.chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex'; // Show the chat box
    } else {
        chatBox.style.display = 'none'; // Hide the chat box
    }
}


// Example function to call the Copilot API
async function callCopilotAPI(userInput) {
    try {
        const response = await fetch("https://<your-api-endpoint>", {
            method: "POST",
            headers: {
                "Authorization": "Bearer YOUR_API_KEY",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: userInput,
            }),
        });

        if (!response.ok) {
            console.error("API Error:", response.status);
            return "An error occurred while processing your request.";
        }

        const data = await response.json();
        return data.reply; // Adjust based on API response format
    } catch (error) {
        console.error("Error:", error);
        return "An error occurred. Please try again later.";
    }
}

// Handle sending messages
async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; // Clear the input field
    document.getElementById("agent-response").innerText = "Processing...";

    const response = await callCopilotAPI(userInput);
    document.getElementById("agent-response").innerText = response;
}

// Event listener for chat icon
document.querySelector('.chat-icon').addEventListener('click', toggleChat);
