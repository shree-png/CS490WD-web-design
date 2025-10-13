/* Shree Khambekar
   10/09/2025 */

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const counter = document.getElementById("counter")

function updateCounter() {
    const items = document.querySelectorAll("li");
    if (items.length === 1)
        counter.textContent = `${items.length} item`;
    else
        counter.textContent = `${items.length} items`;
}

addBtn.addEventListener("click", () => {
    if (input.value.trim() === "")
        return;
    const text = input.value.trim();
    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "\u2716";
    //^googled this, wasn't saving without the unicode for some reason smh

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        list.removeChild(li);
        updateCounter();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
    updateCounter();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        addBtn.click();
});

clearBtn.addEventListener("click", () => {
    list.innerText = "";
    updateCounter();
})

updateCounter();
