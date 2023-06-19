import { menuArray } from "./data.js";

const modal = document.querySelector(".dialog");
const orderBtn = document.getElementById("order-btn");
const pay = document.getElementById("pay-btn");
let addToOrder = document.getElementById("order");
document.addEventListener("click", (e) => {
  if (e.target.id === "command-btn") {
    console.log("BOUTON ");

    addToOrder.classList.remove("hidden");
  } else if (e.target.id === "order-btn") {
    modal.showModal();
  } else if (e.target.id === "pay-btn") {
    console.log("PAY");
    const input = document.getElementsByTagName("input");
    if (!input.value) {
      console.log(input);
      modal.close();
      const thanks = document.querySelector(".thanks");
      addToOrder.classList.add("hidden");
      thanks.classList.remove("hidden");
    }
  }
});

function getDivHtml() {
  let commandHtml = "";
  menuArray.forEach((meal) => {
    meal.ingredients.forEach((furniture) => {});
    commandHtml += `
        <div class="command">
          <div id="emoji">
            <p class="emoji-size">${meal.emoji}</p>
          </div>
          <div id="details">
            <h3 data-name>${meal.name}</h3>
            <p class="ingredients">${meal.ingredients}</p>
            <p data-price class="price">$${meal.price}</p>
          </div>
          <div id="plus-btn">
          <button id="command-btn">
          +
        </button>
          </div>
        </div>
      `;
  });
  return commandHtml;
}

function render() {
  document.getElementById("section").innerHTML = getDivHtml();
}
render();
