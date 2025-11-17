"use client";

import { SendIcon, XIcon } from "lucide-react";
import React, { useState, useEffect, FormEvent } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Message {
  type: "user" | "bot";
  content: string;
}

const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setMessages([
      { type: "bot", content: "Hello! How can I assist you today?" },
    ]);

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (userInput.trim()) {
      setMessages((prev) => [...prev, { type: "user", content: userInput }]);

      let botResponse = "Sorry, I don't understand that.";
      if (userInput.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
      } else if (userInput.toLowerCase().includes("help")) {
        botResponse =
          "Let me know what you need help with.\n1. Account\n2. Website\n3. Services";
      } else if (userInput.toLowerCase().includes("website")) {
        botResponse =
          "This website is designed to provide helpful tools and resources.";
      }

      setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);

      setUserInput("");
    }
  };

  const handleTemplateMessage = (templateMessage: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", content: templateMessage },
    ]);

    setMessages((prev) => [
      ...prev,
      { type: "bot", content: "Bot is typing..." },
    ]);

    setTimeout(() => {
      let botResponse = "Sorry, I don't understand that.";
      if (templateMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
      } else if (templateMessage.toLowerCase().includes("help")) {
        botResponse =
          "Let me know what you need help with.\n1. Account\n2. Website\n3. Services";
      } else if (templateMessage.toLowerCase().includes("website")) {
        botResponse =
          "This website is designed to provide helpful tools and resources.";
      }

      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1] = {
          type: "bot",
          content: botResponse,
        };
        return updatedMessages;
      });
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-9999">
      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-14 right-10 z-10 w-48 bg-blue-500 text-white px-4 py-2 rounded-xl rounded-br-none shadow-lg">
          Hello! How can I assist you today?
        </div>
      )}

      {/* Bot Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors",
          isChatOpen
            ? "bg-destructive/50 hover:bg-destructive/80"
            : "bg-secondary/50 hover:bg-secondary/80"
        )}
        onClick={handleBotClick}
      >
        {isChatOpen ? (
          <XIcon size={24} className="stroke-white" />
        ) : (
          <img src="/bot-icon.png" alt="Chat Bot" className="w-8 h-8" />
        )}
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 max-w-96 bg-white shadow-2xl rounded-lg p-4 z-50">
          {/* Messages Container */}
          <div className="min-h-48 max-h-96 overflow-y-auto border-b border-gray-200 mb-4 flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg wrap-break-word text-sm ${
                    msg.type === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Template Buttons */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <button
              onClick={() => handleTemplateMessage("What is this website for?")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Website
            </button>
            <button
              onClick={() => handleTemplateMessage("Can you help me?")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Help
            </button>
            <button
              onClick={() => handleTemplateMessage("Hello")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs transition-colors"
            >
              Hello
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your question..."
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button
              type="submit"
              variant="default"
              className="px-3 py-2 rounded-lg text-sm flex items-center bg-blue-500 hover:bg-blue-600"
            >
              <SendIcon size={14} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Bot;
