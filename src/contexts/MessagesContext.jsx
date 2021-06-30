import { createContext, useState, useContext } from "react";

const MessagesContext = createContext();

export function MessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((messages) => [...messages, message]);
    setTimeout(() => {
      removeMessage(message);
    }, 6000);
  }

  function removeMessage(message) {
    setMessages((messages) => messages.filter((mess) => mess !== message));
  }

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
}

export const useMessages = () => useContext(MessagesContext);
