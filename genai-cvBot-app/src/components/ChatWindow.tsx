import React, { useState } from "react";
import { sendMessage } from "../services/ollamaApi";
import { Message } from "../types";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const response = await sendMessage(input);
    const botMessage: Message = { sender: "bot", text: response.content };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setInput("");
  };

  function formatBotResponseToHTML(response: string): string {
    let content = response.replace(/^Bot:\s*/, "");
    content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    content = content.replace(/(\d+\.\s[^\n]+)/g, "<li>$1</li>");
    content = content.replace(/(<li>.*<\/li>)/gs, "<ol>$1</ol>");
    content = content.replace(/\* ([^\n]+)/g, "<li>$1</li>");
    content = content.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");
    content = content.replace(/\n/g, "<br>");
    return `<div class="bot-response">${content}</div>`;
  }

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>{" "}
            {msg.sender === "bot" ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: formatBotResponseToHTML(msg.text),
                }}
              />
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
