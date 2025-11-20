

import { generateCards } from "./cardGenerator.js";

const container = document.querySelector(".container");

generateCards(container);

const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark" || 
   (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});