import { menuArray } from "./data.js";

let sectionOrder = document.querySelector(".section-order");
let orderMeal = document.getElementById("order-meal");

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    console.log("Numéro ID du repas - ", e.target.dataset.add);
    // console.log("BOUTON ", orderMeal);
    orderMeal.classList.remove("hidden");
    sectionOrder.classList.remove("hidden");
    return getOrder(e.target.dataset.add);
    // } else if (e.target.id === "order-btn") {
    //   modal.showModal();
    // } else if (e.target.id === "pay-btn") {
    //   console.log("PAY");
    //   const input = document.getElementsByTagName("input");
    //   if (!input.value) {
    //     console.log(input);
    //     modal.close();
    //     const thanks = document.querySelector(".thanks");
    //     addToOrder.classList.add("hidden");
    //     thanks.classList.remove("hidden");
    //   }
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

function getOrder() {
  let orderHtml = "";
  for (let meal of menuArray) {
    orderHtml += `
    <div id="order-content" class=" command-order">
          <div class="name-hidden">
            <h3> ${meal.name} <span class="remove">remove</span></h3>
          </div>
          <div id="price">
            <p class="price-order">$${meal.price}</p>
          </div>
          </div>
    `;
  }
  return (document.getElementById("order-meal").innerHTML = orderHtml);
}

// function renderTotal() {
//   let totalHtml = "";
//   totalHtml = `
//   <div class=" total-price">
//   <div class="total">
//     <p>Total price:</p>
//   </div>
//   <div class="total">
//     <p>$</p>
//   </div>
// </div>

// `;
//   totalHtml;
// }
// renderTotal();
