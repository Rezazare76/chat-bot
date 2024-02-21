# Live Demo

🔗 [Mint's Sign up page](https://rezazare76.github.io/chat-bot/)

# VideoRepute Interview Chatbot

Welcome to the VideoRepute Interview Chatbot repository! This chatbot project is designed for interview preparation and includes features such as accepting images and saving data to local storage.

## Features

- **Accept Images**: Users can send images to the chatbot.
- **Local Storage**: Messages are saved to local storage, allowing users to resume conversations later.
- **RTL Support**: The chatbot supports right-to-left (RTL) text direction.

## Installation

To run the chatbot locally, follow these steps:

1. Clone this repository

   ```bash
   https://github.com/Rezazare76/chat-bot.git
   ```

3. Navigate  to the project directory

   ```bash
   cd chat-bot
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To start the development server and use this project, simply run the following command:

```bash
npm run start
```
now open
[localhost](http://localhost:3000/)

To integrate the chatbot into your project, you can use the Chat component provided by videorepute-chat-interview package.

```tsx
import { Chat } from "videorepute-chat-interview";
import logo from "./assets/images/logo.svg";

function App() {
  // Define functions to save and clear messages in local storage
  const saveMessage = (messages: messageType[]) => {
    localStorage.setItem("dataMessage", JSON.stringify(messages));
  };

  const clearMessage = () => {
    localStorage.removeItem("dataMessage");
  };

  return (
    <Chat
      greetingMessage="Hello! Welcome to the interview chatbot."
      logo={logo}
      clear={clearMessage}
      onChange={saveMessage}
      dir="rtl"
    />
  );
}

export default App;

```
## Props

* greetingMessage: The initial message displayed by the chatbot.
* image displayed in the chatbot.
* clear: Function to clear messages from local storage.
* onChange: Function called when messages are updated.
* dir: Text direction (rtl or ltr).
