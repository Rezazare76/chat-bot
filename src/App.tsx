import { Chat } from "videorepute-chat-interview";
import logo from "./assets/images/logo.svg";
interface messageType {
  text: string;
  position: "user" | "bot";
  type: "text" | "image" | "pdf";
  time: string;
}
function App() {
  const storedData = localStorage.getItem("dataMessage");
  const saveMessage = (elm: messageType[]) => {
    localStorage.setItem("dataMessage", JSON.stringify(elm));
  };
  const clearMessage = () => {
    localStorage.removeItem("dataMessage");
  };
  return (
    <Chat
      messageList={storedData ? JSON.parse(storedData) : undefined}
      greetingMessage="hello Welcome to chat bot"
      positions={{ right: "10px", bottom: "10px" }}
      logo={logo}
      clear={clearMessage}
      onChange={(elm) => saveMessage(elm)}
      dir="rtl"
    />
  );
}

export default App;
