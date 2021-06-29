import "./styles/globals.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Messages } from "./components/Messages";
import { MessagesProvider } from "./contexts/MessagesContext";
import { ContentProvider } from "./contexts/ContentProvider";

function App() {
  return (
    <>
      <MessagesProvider>
        <Messages />

        <ContentProvider>
          <Header />
          <Main />
        </ContentProvider>
      </MessagesProvider>

      <Footer />
    </>
  );
}

export default App;
