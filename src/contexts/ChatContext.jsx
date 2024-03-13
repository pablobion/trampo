"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [bookmarkedMessages, setBookmarkedMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
        console.log(messages)
    };
    useEffect(() => {
        console.log(messages);
    }, [messages]);

    const toggleBookmark = (message) => {
        if (bookmarkedMessages.includes(message)) {
            setBookmarkedMessages(bookmarkedMessages.filter((msg) => msg !== message));
        } else {
            setBookmarkedMessages([...bookmarkedMessages, message]);
        }
    };

    return (
        <ChatContext.Provider value={{ messages, addMessage, toggleBookmark, bookmarkedMessages }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}
