const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
let counterValue = 0;

const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
