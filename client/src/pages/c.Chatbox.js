import React, { useState } from "react";

function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "owner", text: "Hi! How can I help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "customer", text: newMessage }]);
      setNewMessage("");
      // Optionally, send the message to the owner via backend
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbox Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbox}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
        >
          Chat with us!
        </button>
      )}

      {/* Chatbox Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with the Owner</h3>
            <button onClick={toggleChatbox} className="text-white">
              ×
            </button>
          </div>

          <div className="p-3 max-h-60 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "customer" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`p-2 rounded-md text-white ${
                    message.sender === "customer"
                      ? "bg-indigo-600"
                      : "bg-gray-300 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-300">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
