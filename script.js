"use strict";
let color = 'red';

const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");

container.style.animation = 'shuffle 2s infinite';
container.style.animationDelay = '-1.75s';

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

cards.forEach(card => {
  card.addEventListener('click', () => {
    if(color == 'blue') {
      document.documentElement.style.setProperty('--bright', 'red');
      document.documentElement.style.setProperty('--dark', 'rgb(100, 0, 0');
      document.documentElement.style.setProperty('--darker', 'rgb(50, 0, 0');
      color = 'red'
    } else if(color == 'red') {
      document.documentElement.style.setProperty('--bright', 'orange');
      document.documentElement.style.setProperty('--dark', 'rgb(100, 64, 0)');
      document.documentElement.style.setProperty('--darker', 'rgb(50, 32, 0)');
      color = 'orange'
    } else if(color == 'orange') {
      document.documentElement.style.setProperty('--bright', 'yellow');
      document.documentElement.style.setProperty('--dark', 'rgb(100, 100, 0)');
      document.documentElement.style.setProperty('--darker', 'rgb(50, 50, 0)');
      color = 'yellow'
    } else if(color == 'yellow') {
      document.documentElement.style.setProperty('--bright', 'rgb(0, 255, 0)');
      document.documentElement.style.setProperty('--dark', 'rgb(0, 100, 0)');
      document.documentElement.style.setProperty('--darker', 'rgb(0, 50, 0)');
      color = 'green'
    } else if(color == 'green') {
      document.documentElement.style.setProperty('--bright', 'aqua');
      document.documentElement.style.setProperty('--dark', 'rgb(0, 100, 100');
      document.documentElement.style.setProperty('--darker', 'rgb(0, 50, 50');
      color = 'blue'
    }
  })
});