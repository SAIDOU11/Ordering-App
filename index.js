import { menuArray } from "./data.js";

console.log(menuArray);

function getDivHtml() {
  let commandHtml = "";
  menuArray.forEach((meal) => {
    console.log(meal.ingredients);
    meal.ingredients.forEach((furniture) => {
      console.log(furniture);
    });
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
          <button>
          <i class="data-plus fa-solid fa-plus"></i>
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
