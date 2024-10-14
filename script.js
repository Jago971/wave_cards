"use strict";

const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");

container.style.animation = 'shuffle 2s infinite';
container.style.animationDelay = '-1.75s'

for(let i = 0; i < cards.length; i++) {
  cards[i].style.animation = 'wave 2s infinite'
  cards[i].style.animationDelay = `${i * 0.25 - 1.75}s`
}

container.addEventListener("mouseover", () => {
  container.style.removeProperty("animation");
  cards.forEach(card => {
    card.style.removeProperty("animation");
  });
})

container.addEventListener("mouseout", (e) => {
  for(let i = 0; i < cards.length; i++) {
    cards[i].style.animation = 'wave 2s infinite'
    cards[i].style.animationDelay = `${i * 0.25 - 1.75}s`
  }
  container.style.animation = 'shuffle 2s infinite';
  container.tyle.animationDelay = '-1.75s'
})