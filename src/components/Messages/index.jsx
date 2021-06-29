import { useMessages } from "../../contexts/MessagesContext";
import { Message } from "./Message";
import "./styles.scss";


export function Messages() {
  const { messages } = useMessages();
  const empty = messages.length === 0;

  if (empty) {
    return <div></div>;
  }

  return (
    <div className="alerts">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
