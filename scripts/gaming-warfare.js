import { weaponry, addtoWeaponry, saveToStorage } from "../data/weaponry.js";
import { weapons } from "../data/weapons.js";

let productsHTML = "";

function updateWeaponry() {
  let weaponryQuantity = 0;
  weaponry.forEach((item) => {
    weaponryQuantity += item.quantity;
  });

  document.querySelector(".js-weaponry-quantity").innerHTML = weaponryQuantity;
  // });
  saveToStorage();
}

weapons.forEach((weapon) => {
  productsHTML += `<div class="weapon-container">
  <div class="weapon-name">
    ${weapon.name}
  </div>
  <div class="img-container">
    <img class="videocard-img" src="${weapon.image}" />
  </div>
  <div class="details-container">
    <div class="old-price"><s>₱${weapon.oldPrice.toLocaleString()}</s></div>
    <div class="details-subcon">
      <div class="new-price">
        <div>₱${weapon.newPrice.toLocaleString()}</div>
      </div>

      <div class="add-weapon">
        <img class="plus-icon" src="images/icons/plus-icon.png" />
        <button class="weapon-link js-add-to-weaponry" data-weapon-id="${
          weapon.id
        }">Add to Weaponry</button>
      </div>
    </div>
  </div>
</div>`;
});

document.querySelector(".js-main-container").innerHTML = productsHTML;
updateWeaponry(); //para pag nireload may laman na agad yung weaponry
document.querySelectorAll(".js-add-to-weaponry").forEach((button) => {
  button.addEventListener("click", () => {
    const weaponId = button.dataset.weaponId;
    addtoWeaponry(weaponId);
    updateWeaponry();
  });
});
