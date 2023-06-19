import { menuArray } from "./data.js";

let sectionOrder = document.querySelector(".section-order");
let orderMeal = document.getElementById("order-meal");

document.addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  //  &&e.target.dataset.id === "0"
  if (e.target.dataset.id == "0" && e.target.id === "command-btn") {
    console.log("BOUTON ", orderMeal);
    orderMeal.classList.remove("hidden");
    sectionOrder.classList.remove("hidden");
    return getOrder(e.target.dataset.id);
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
  for (let meal of menuArray) {
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
          <div  id="plus-btn">
          <button data-id="${meal.id}" id="command-btn">
          +
        </button>
          </div>
        </div>
      `;
  }

  return commandHtml;
}

function render() {
  document.getElementById("section").innerHTML = getDivHtml();
}
render();

function getOrder() {
  let orderHtml = "";
  for (let meal of menuArray) {
    orderHtml += `
    <div id="order-content" class=" command-order">
          <div class="name-hidden">
            <h3>Name <span class="remove">remove</span></h3>
          </div>
          <div id="price">
            <p class="price-order">$</p>
          </div>

          <div class=" total-price">
            <div class="total">
              <p>Total price:</p>
            </div>
            <div class="total">
              <p>$</p>
            </div>
          </div>
        </div>
    `;
  }
  return (document.getElementById("order-meal").innerHTML = orderHtml);
}
