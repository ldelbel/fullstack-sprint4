import "./styles/globals.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Messages } from "./components/Messages";
import { MessagesProvider } from "./contexts/MessagesContext";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <MessagesProvider>
        <Messages />
        <SearchProvider>
          <Header />
          <Main />
        </SearchProvider>
      </MessagesProvider>
      <Footer />
    </>
  );
}

export default App;
