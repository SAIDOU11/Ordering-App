import { menuArray } from "./data.js";

const sectionOrder = document.querySelector(".section-order");
const orderMeal = document.getElementById("order-meal");
const modal = document.getElementById("dialog");
const input = document.getElementsByTagName("input");

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    getOrder(e.target.dataset.add);
    updateTotal(e.target.dataset.add);
    sectionOrder.classList.remove("hidden");
    orderMeal.classList.remove("hidden");
  } else if (e.target.id === "remove") {
    let removeClicked = e.target;
    let removeParents = removeClicked.parentElement.parentElement.parentElement;
    removeParents.remove();
    updateTotal();
  } else if (e.target.id === "order-btn") {
    modal.showModal();
    orderMeal.classList.add("hidden");
    sectionOrder.classList.add("hidden");
  } else if (!input.value && e.target.id === "pay-btn") {
    modal.close();
    const thanks = document.querySelector(".thanks");
    thanks.classList.remove("hidden");
    return setTimeout(function () {
      window.location.reload();
    }, 3000);
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
            <h3 id="meal">${meal.name}</h3>
            <p  class="ingredients">${meal.ingredients}</p>
            <p class="price">$${meal.price}</p>
          </div>
          <div id="plus-btn">
          <button data-add="${meal.id}"   id="command-btn">
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

function getOrder(tweetId) {
  let orderHtml = "";
  const targetMealId = menuArray.filter((meal) => {
    return tweetId == meal.id;
  })[0];

  orderHtml += `
    <div id="order-content" class=" command-order">
          <div class="name-hidden">
            <h3> ${targetMealId.name} <span id="remove">remove</span></h3>
          </div>
          <div id="price">
            <p data-price="${targetMealId.price}" class="price-order">$${targetMealId.price}</p>
          </div>
          </div>
    `;

  return (document.getElementById("order-meal").innerHTML += orderHtml);
}

function updateTotal() {
  let mealCart = document.getElementsByClassName("meal-cart")[0];
  let total = 0;
  let cartCommand = mealCart.getElementsByClassName("command-order");
  for (let i = 0; i < cartCommand.length; i++) {
    let oneMeal = cartCommand[i];
    let priceElement = oneMeal.getElementsByClassName("price-order")[0];
    let quantity = cartCommand.length;
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    total += price;
    total = total + quantity - cartCommand.length;
    if (cartCommand.length === 0) {
      return sectionOrder.classList.add("hidden");
    }
  }

  let totalHtml = "";
  totalHtml += `
  <div class="total">
    <p>Total price:</p>
  </div>
  <div class="total">
    <p class="total-price">$${total}</p>
  </div>

  `;

  document.querySelector(".total-price").innerHTML = totalHtml;
}
