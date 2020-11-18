const form = document.querySelector("#JEForm");
const input = document.querySelector("input");
const ul = document.querySelector("#JEList");

/*
1. create li
------------
*/

function createLi() {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.textContent = input.value;

   const editBtn = document.createElement("button");
   editBtn.textContent = "edit";
   const removeBtn = document.createElement("button");
   removeBtn.textContent = "remove";

   li.appendChild(span);
   li.appendChild(editBtn);
   li.appendChild(removeBtn);

   return li;
}

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const li = createLi();

   if (input.value === "") {
      alert("Journal is empty.");
   } else {
      ul.appendChild(li);
   }
});

/*
2. Button actions
-----------------
*/

ul.addEventListener("click", (event) => {
   if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if (button.textContent === "remove") {
         ul.removeChild(li);
      } else if (button.textContent === "edit") {
         const span = li.firstElementChild;
         const input = document.createElement("input");
         input.type = "text";
         input.value = span.textContent;
         li.insertBefore(input, span);
         li.removeChild(span);
         button.textContent = "save";
      } else if (button.textContent === "save") {
         const input = li.firstElementChild;
         const span = document.createElement("span");
         span.textContent = input.value;
         li.insertBefore(span, input);
         li.removeChild(input);
         button.textContent = "edit";
      }
   }
});

/*
4. create and append elements
-----------------------------
*/

const div = document.createElement("div");
div.className = "showHide";
