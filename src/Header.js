import pointer from "./img/pointer.svg";
import logo from "./img/logo.svg";
import "./style/header.css";

function HeaderLeft() {
  return (
    <div className="header-left">
      <div className="header-left--1">
        <img src={pointer} className="location" alt="location" />
        <span>Ваш регион доставки: </span>
        <select>
          <option value="msk">Москва</option>
          <option value="spb">Санкт-Петербург</option>
          <option value="voronezh">Воронеж</option>
          <option value="stavropol">Ставрополь</option>
        </select>
      </div>
      <ul className="header-left--2">
        <li>
          <a href="#">Магазины</a>
        </li>
        <li>
          <a href="#">Помощь</a>
        </li>
        <li>
          <a href="#">Блоги</a>
        </li>
      </ul>
    </div>
  );
}

function HeaderRight() {
  return (
    <ul className="header-right">
      <li>Бесплатная доставка</li>
      <li>Оплата при получении</li>
      <li>Возврат в течении 14 дней</li>
    </ul>
  );
}

function HeaderTop() {
  return (
    <div className="header-top container">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}

function HeaderBottomTop() {
  return (
    <div className="container header-bottom-top">
      <ul className="gender">
        <li>
          <a href="#">Мужчинам</a>
        </li>
        <li>
          <a href="#">Женщинам</a>
        </li>
        <li>
          <a href="#">Детям</a>
        </li>
      </ul>

      <img src={logo} />

      <ul className="menu">
        <li>
          <a>Войти</a>
        </li>
        <li>
          <a>Избранное</a>
        </li>
        <li>
          <a>Корзина</a>
        </li>
        <li>
          <a>Поиск</a>
        </li>
      </ul>
    </div>
  );
}

function HeaderBottomBot() {
  return (
    <div className="container header-bottom-bot">
      <ul className='list-items'>
        <li>Новинки</li>
        <li>Сноуборд</li>
        <li>Лыжи</li>
        <li>Скейт</li>
        <li>Лонгборд</li>
        <li>Вейкборд</li>
        <li>Сёрф</li>
        <li>Sup</li>
        <li>Одежда</li>
        <li>Обувь</li>
        <li>Аксессуары</li>
        <li>Бренды</li>
        <li>Распродажа</li>
      </ul>
    </div>
  );
}

function HeaderBottom() {
  return (
    <>
      <HeaderBottomTop />
      <HeaderBottomBot />
    </>
  );
}

function Header() {
  return (
    <header>
      <section id="header--1">
        <HeaderTop />
      </section>

      <section id="header--2">
        <HeaderBottom />
      </section>
    </header>
  );
}

export default Header;
