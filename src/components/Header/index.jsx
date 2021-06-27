import './styles.scss';
import menuImg from '../../assets/menu.svg';
import closeImg from '../../assets/close.svg';
import rchloImg from '../../assets/rchlo.svg';
import riachueloImg from '../../assets/riachuelo.svg';
import searchImg from '../../assets/search.svg';

export function Header() {
    return (
      <header className="header">
        <div className="header__container">
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
          <div className="header__search">
            <img className="header__icon" src={searchImg} />
            <input className="header__input" type="search" placeholder="O que você está procurando?" />
          </div>
  
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span>Novidades</span>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Feminino</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Masculino</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Infantil</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Moda Íntima</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Calçados</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Acessórios e Relógios</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Beleza e Perfume</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Casa Riachuelo</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Eletrônicos</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Personagens</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Outlet</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}