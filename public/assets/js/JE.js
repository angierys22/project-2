
const form = document.querySelector("#JEForm");
const input = document.querySelector("input");
const ul = document.querySelector("#JEList");


/*
1. create li
------------
*/ 
function createLi() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  // span.textContent = input.value;
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const user = document.createElement('span')
  user.textContent = document.getElementById("users").value;
  const title = document.createElement('span')
  title.textContent = document.getElementById("title").value;
  const journalInput = document.createElement('span')
  journalInput.textContent = document.getElementById("journalInput").value;
  // to here
  
  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  
  
  li.appendChild(user)
  li.appendChild(title)
  li.appendChild(journalInput)
  
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  
  return li;
  }

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const li = createLi();

   if(input.value === "") {
      alert("Journal is empty.");
   } else {
     const JournalEntry = document.getElementsByTagName('input');
     const JournalObject = {title:JournalEntry[1].value,body:JournalEntry[2].value}
     // ul.appendChild(li);
   }

   
}); 



/*
2. Button actions
-----------------
*/ 
ul.addEventListener("click", (event) => {
   if(event.target.tagName === "BUTTON") {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === "remove") {
         ul.removeChild(li);

      } else if(button.textContent === "edit") {
         const span = li.firstElementChild;
         const input = document.createElement("input");
         input.type = "text";
         input.value = span.textContent;
         li.insertBefore(input, span);
         li.removeChild(span);
         button.textContent = "save";
      } else if(button.textContent === "save") {
         const input = li.firstElementChild;
         const span = document.createElement("span");
         span.textContent = input.value;
        // for DB
        submitJE({title: "title", body: input.value});
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

// app.post app.get
// save JE data to DB

// fuction submitJE(journalEntry) {
//   $post("/api/JE/", journalEntry, (req,res) => {
//     return res;
//   });
// };
// //pu;; JE data
// function pastJEdata(journalENtry) {
//   $get("/api/JE/", journalENtry, (req,res) => {
//     return res;
//   });
// };

