import React, { useState } from "react";

function ToRespond() {
  const [activeChats, setActiveChats] = useState([
    { userId: 1, userName: "User1", messages: [{ sender: "user", text: "Hi, can I know more about the Apple?" }] },
    { userId: 2, userName: "User2", messages: [{ sender: "user", text: "Is the Banana organic?" }] },
  ]);

  const [currentChatId, setCurrentChatId] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSelectChat = (userId) => {
    setCurrentChatId(userId);
  };

  const handleSendMessage = () => {
    if (responseMessage.trim() && currentChatId !== null) {
      setActiveChats((prevChats) =>
        prevChats.map((chat) =>
          chat.userId === currentChatId
            ? { ...chat, messages: [...chat.messages, { sender: "owner", text: responseMessage }] }
            : chat
        )
      );
      setResponseMessage("");
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chats to Respond</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chat List */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Chats</h3>
            <ul className="mt-4 space-y-2">
              {activeChats.map((chat) => (
                <li key={chat.userId}>
                  <button
                    onClick={() => handleSelectChat(chat.userId)}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      currentChatId === chat.userId ? "bg-blue-500 text-white" : "bg-white text-gray-800"
                    } hover:bg-blue-400 hover:text-white`}
                  >
                    {chat.userName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Window */}
          {currentChatId && (
            <div className="col-span-2 bg-white rounded-lg p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                Chat with {activeChats.find((chat) => chat.userId === currentChatId).userName}
              </h3>
              <div className="mt-4 max-h-60 overflow-y-auto">
                {activeChats
                  .find((chat) => chat.userId === currentChatId)
                  .messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === "owner" ? "justify-start" : "justify-end"
                      } mb-2`}
                    >
                      <div
                        className={`p-2 rounded-md text-white ${
                          message.sender === "owner"
                            ? "bg-gray-300 text-gray-900"
                            : "bg-indigo-600"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  value={responseMessage}
                  onChange={(e) => setResponseMessage(e.target.value)}
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
      </div>
    </div>
  );
}

export default ToRespond;
