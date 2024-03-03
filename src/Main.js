import { useState, useEffect } from "react";
import "./style/main.css";
import collab1 from "./img/1.svg";
import collab2 from "./img/2.svg";
import collab3 from "./img/3.svg";
import collab4 from "./img/4.svg";
import collab5 from "./img/5.svg";
import collab6 from "./img/6.svg";
import collab7 from "./img/7.svg";
import collab8 from "./img/8.svg";
import collab9 from "./img/9.svg";
import collab10 from "./img/10.svg";
import boardSale1 from "./img/board.png";
import buttonPrev from "./img/button-prev.svg";
import buttonNext from "./img/button-next.svg";
import newItem from "./img/image 9.png";
import star from "./img/star.svg";

function BigSlide() {
  return (
    <div className="big-slide">
      <div className="big-slide-item">Winter sale до 70%</div>
    </div>
  );
}

function BigSlider() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      setCount(0);
    } else if (count < 0) {
      setCount(2);
    }
  });
  return (
    <section>
      <div className="slider-container">
        <button
          className="big-slider-button big-slider-button--prev"
          onClick={() => {
            console.log(count);
            setCount(count - 1);
          }}
        >
          <img src={buttonPrev} />
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(-${count * 1400}px)`,
            transition: "transform 2s",
          }}
        >
          <BigSlide />
          <BigSlide />
          <BigSlide />
        </div>
        <button
          className="big-slider-button big-slider-button--next"
          onClick={() => {
            console.log(count);
            setCount(count + 1);
          }}
        >
          <img src={buttonNext} />
        </button>
      </div>
    </section>
  );
}

function Colabs() {
  return (
    <section>
      <div className="container">
        <ul className="collabs">
          <li>
            <a href="#">
              <img src={collab1} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab2} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab3} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab4} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab5} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab6} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab7} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab8} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab9} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={collab10} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function SaleItem() {
  return (
    <div className="sale--item">
      <img src={boardSale1} />
      <span>Название акции</span>
    </div>
  );
}

function Sale() {
  return (
    <section>
      <div className="container sale">
        <SaleItem />
        <SaleItem />
      </div>
    </section>
  );
}

function NewItem() {
  return (
    <div className="new-item">
      <img src={newItem} />
      <div className="favourites">
        <img src={star} />
      </div>
      <div className="item-description">
        <h3>Libtech</h3>
        <span className="category">Мужской сноуборд</span>
        <span className="cost">34392 ₽</span>
      </div>
    </div>
  );
}

function NewItems() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 6) {
      setCount(0);
    } else if (count < 0) {
      setCount(6);
    }
  });
  return (
    <section>
      <div className="container new-items">
        <h2>Новинки</h2>
        <button
          className="new-slider-button new-slider-button--prev"
          onClick={() => {
            setCount(count - 1);
            console.log(count);
          }}
        >
          <img src={buttonPrev} />
        </button>
        <div className="new-items-slider">
          <div
            className="new-items-slider--items"
            style={{
              transform: `translateX(-${count * 295}px)`,
              transition: "transform 2s",
            }}
          >
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
          </div>
        </div>

        <button
          className="new-slider-button new-slider-button--next"
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          <img src={buttonNext} />
        </button>
        <a className="seemore" href="#">
          Показать больше
        </a>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main>
      <BigSlider />
      <Colabs />
      <Sale />
      <NewItems />
    </main>
  );
}

export default Main;
