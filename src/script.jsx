import React from "react";

const script = () => {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  return burger.addEventListener("click", () => {
    if (menu.classList.contains(hidden)) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
};

export default script;
