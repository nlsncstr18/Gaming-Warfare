import { weaponry, removeFromWeaponry } from "../data/weaponry.js";
import { weapons } from "../data/weapons.js";

let cartSummaryHTML = "";
weaponry.forEach((weaponryCart) => {
  const productId = weaponryCart.weaponId;

  let matchingProduct;

  weapons.forEach((weapon) => {
    if (weapon.id === productId) {
      matchingProduct = weapon;
    }
  });
  cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
    <img class="product-image" src="${matchingProduct.image}" />
    <div class="cart-item-details">
        <div>
        ${matchingProduct.name}
        </div>
        <br />
        <div>₱ ${matchingProduct.newPrice}</div>
        <br />
        <div>Delivery date: Tuesday, June 21, 2024</div>
        <br />
        <div class="quantity">Quantity: <span><button>-</button></span> <strong>${weaponryCart.quantity}</strong> <span><button>+</button></span></div>
        <button class="delete js-delete-button" data-product-id="${matchingProduct.id}">Delete</button>
    </div>
</div>`;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    removeFromWeaponry(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
    console.log(container);
  });
});
