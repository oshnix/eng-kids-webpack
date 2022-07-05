import { categories } from "./cards.js";
import {toggleSidebar} from "./helper.js";
import {menuBtn, sidebar} from "./elements.js";

export const initNav = (isStatisticsPage) => {
  categories.forEach(({ name: title }) => {
    const activeClass =
      new URLSearchParams(window.location.search).get("title") === title
        ? "active"
        : "";
    const sideBarItem = `
    <li class="category-item ${activeClass}"">
      <a href="./category.html?title=${title}">
        ${title}
      </a>
    </li>`;

    sidebar
      .querySelector(".categories")
      .insertAdjacentHTML("beforeend", sideBarItem);
  });
  sidebar.querySelector(".categories").insertAdjacentHTML(
    "beforeend",
    `
      <li class="category-item ${isStatisticsPage ? "active" : ""}">
        <a href="./statistics.html">
          Statistics
        </a>
      </li>
    `
  );

  menuBtn.addEventListener("click", () => {
    toggleSidebar(true);
  });

  sidebar.querySelector(".backdrop").addEventListener("click", () => {
    toggleSidebar(false);
  });

  sidebar.querySelector(".sidebar-close").addEventListener("click", () => {
    toggleSidebar(false);
  });
};
