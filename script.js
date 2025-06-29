const form = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clear = document.getElementById("clear");
const filter = document.getElementById("filter");

function addItem(event) {
    event.preventDefault();
    const newItem = itemInput.value.trim(); 

    if (newItem === "") {
        alert("Please enter an item.");
        return;
    }

    const li = document.createElement("li");
    const button = document.createElement("button");
    const icon = document.createElement("i");

    li.appendChild(document.createTextNode(newItem));
    button.classList.add("remove-item", "btn-link", "text-red");
    icon.classList.add("fa-solid", "fa-xmark");

    button.appendChild(icon);
    li.appendChild(button);
    itemList.appendChild(li);

    itemInput.value = "";
}

function removeAllItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains("remove-item")) {
        e.target.parentElement.parentElement.remove();
    }
}

function filterItems(e) {
    const items = document.querySelectorAll("#item-list li");
    const text = e.target.value.toLowerCase().trim();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase().trim();
        if (itemName.indexOf(text) !== -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

form.addEventListener("submit", addItem);
clear.addEventListener("click", removeAllItems);
itemList.addEventListener("click", removeItem);
filter.addEventListener("input", filterItems);
