"use client";

import React, { useState, useEffect } from "react";

const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showPopup, setShowPopup] = useState(true); // State for popup visibility

  // Add "Hello" message when the component is mounted
  useEffect(() => {
    setMessages(["Bot: Hello! How can I assist you today?"]);

    // Automatically hide the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, `You: ${userInput}`]);
      setMessages((prev) => [...prev, "Bot: How can I assist you?"]);
      setUserInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-16 right-0 bg-transparent text-black px-4 py-2 rounded shadow-lg">
          Hello! How can I assist you today?
        </div>
      )}

      {/* Bot Icon */}
      <div
        className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        onClick={handleBotClick}
      >
        <img
          src="/bot-icon.png"
          alt="Chat Bot"
          className="w-8 h-8"
        />
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="w-72 bg-white shadow-lg rounded-lg p-4 mt-2">
          <div className="h-48 overflow-y-auto border-b border-gray-200 mb-2">
            {messages.map((msg, index) => (
              <p key={index} className="text-sm text-gray-700">
                {msg}
              </p>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;