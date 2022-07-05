import "../css/normalize.css";
import "../css/styles.css";
import { categories } from "./cards.js";
import {changeMode, fillCards} from "./helper.js";
import {toggleCheckbox, cardList, title} from "./elements.js";
// import {initGame} from "./startGame.js";
import {initNav} from "./nav.js";

const field = new URLSearchParams(window.location.search).get("title");
const category = categories.find(c => c.name === field);
const isPlayMode = JSON.parse(localStorage.getItem("isPlayMode"));

title.innerText = field;

setTimeout(() => {
  initNav();
  changeMode(isPlayMode, cardList, true);
  // initGame(cards[field]);
}, 0);

fillCards(category.cards, cardList);

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    changeMode(e.target.checked, cardList, true);
  });
