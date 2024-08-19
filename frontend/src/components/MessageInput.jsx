import React, { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-2 ">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-4 rounded"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
