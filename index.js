import { menuArray } from "./data.js";

let priceTotal = JSON.parse(localStorage.getItem("price"));
let cart = JSON.parse(localStorage.getItem("cart"));

const commandOrder = document.getElementsByClassName("command-order");
const sectionOrder = document.querySelector(".section-order");
const orderMeal = document.getElementById("order-meal");
const modal = document.getElementById("dialog");
const input = document.getElementsByTagName("input");

console.log(orderMeal);
console.log(sectionOrder);
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
  } else if (e.target.id === "order-btn") {
    modal.showModal();
    orderMeal.classList.add("hidden");
    sectionOrder.classList.add("hidden");
  } else if (!input.value && e.target.id === "pay-btn") {
    console.log(input, "PAY");
    modal.close();
    const thanks = document.querySelector(".thanks");
    thanks.classList.remove("hidden");
    return setTimeout(function () {
      window.location.reload();
    }, 5000);
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
  console.log(tweetId);
  let orderHtml = "";
  const targetMealId = menuArray.filter((meal) => {
    return tweetId == meal.id;
  })[0];

  console.log(targetMealId);

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

function updateTotal(tweetId) {
  console.log(tweetId);
  let cartItemContainer = document.getElementById("order").children[1];

  let getPrice = cartItemContainer.children[0].children[1];

  let pricePlace = getPrice;
  console.log(pricePlace);

  const totalMeal = menuArray.filter((meal) => {
    return tweetId == meal.id;
  })[0];

  let totalHtml = "";
  totalHtml += `
  <div class="total">
    <p>Total price:</p>
  </div>
  <div class="total">
    <p>$${totalMeal.price}</p>
  </div>

  `;
  console.log(totalHtml);
  document.querySelector(".total-price").innerHTML = totalHtml;
}
