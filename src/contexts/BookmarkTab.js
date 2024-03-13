// BookmarkTab.js
import React from "react";
import { useChat } from "./ChatContext";

function BookmarkTab() {
  const { bookmarkedMessages } = useChat();

  return (
    <div>
      <h2>Bookmarked Messages</h2>
      <ul>
        {bookmarkedMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkTab;
