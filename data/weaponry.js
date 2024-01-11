export let weaponry = JSON.parse(localStorage.getItem("weaponry")) || [];

export function saveToStorage() {
  localStorage.setItem("weaponry", JSON.stringify(weaponry));
}

export function addtoWeaponry(weaponId) {
  let matchingItem;

  weaponry.forEach((weaponryItem) => {
    if (weaponId === weaponryItem.weaponId) {
      matchingItem = weaponryItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    weaponry.push({
      weaponId: weaponId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromWeaponry(weaponId) {
  const newWeaponry = [];
  weaponry.forEach((weaponryItem) => {
    if (weaponryItem.weaponId !== weaponId) {
      newWeaponry.push(weaponryItem);
    }
  });

  weaponry = newWeaponry;
  saveToStorage();
}
