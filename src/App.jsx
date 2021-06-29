import "./styles/globals.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Messages } from "./components/Messages";
import { MessagesProvider } from "./contexts/MessagesContext";

function App() {
  return (
    <div>
      <MessagesProvider>
        <Messages />
        <Header />
        <Main />
      </MessagesProvider>
      <Footer />
    </div>
  );
}

export default App;
