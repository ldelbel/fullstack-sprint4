import menuImg from "../../../assets/menu.svg";
import closeImg from "../../../assets/close.svg";
import rchloImg from "../../../assets/rchlo.svg";
import riachueloImg from "../../../assets/riachuelo.svg";

import { SearchBar } from "./SearchBar";

export function Head() {
  return (
    <>
      <div className="header__mobile">
        <div className="header__drawer menu header__drawer--active">
          <img className="menu__img" src={menuImg} />
          <p className="menu__title">menu</p>
        </div>
        <div className="header__drawer close">
          <img src={closeImg} />
          <p className="close__title">fechar</p>
        </div>
        <h1 className="header__logo">
          <img className="header__img" src={rchloImg} alt="Logo" />
        </h1>
      </div>
      <div className="header__desktop">
        <h1 className="header__logo">
          <img className="header__img" src={riachueloImg} alt="Logo" />
        </h1>
      </div>
      <SearchBar />
    </>
  );
}
