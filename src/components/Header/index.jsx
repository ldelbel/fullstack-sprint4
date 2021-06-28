import "./styles.scss";
import { Menu } from "./Menu";
import { Head } from "./Head";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Head />
        <Menu />
      </div>
    </header>
  );
}
