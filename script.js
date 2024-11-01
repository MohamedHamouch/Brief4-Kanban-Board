// document.querySelector("#addTaskBtn").addEventListener("click",function(){
//     document.querySelector("#formContainer").style.display = "flex";
// });
// document.querySelector("#cancelBtn").addEventListener("click",()=>{
//     document.querySelector("#formContainer").style.display = "none"
// });

const form = document.querySelector("#inputForm")
const taskTitle = document.querySelector("#title");
const taskDeadline = document.querySelector("#deadline");
const taskDescription = document.querySelector("#description");
const taskPriority = document.querySelector("#priority");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const card = document.createElement("li");
    card.className = "taskCard bg-stone-400 border-4 border-solid border-green-600 min-h-52 p-1";

    const cardTitle = document.createElement("p");
    cardTitle.textContent = taskTitle.value;
    cardTitle.className = "bg-green-600 text-white text-lg text-center";

    const cardDescription = document.createElement("p");
    cardDescription.textContent = taskDescription.value;
    cardDescription.className = "min-h-20 w-full pt-6";

    // creating buttons and date inside container 
    const cardBottom = document.creatElement("div");
    cardBottom.className = "flex items-center min-h-16 pt-6 w-full"

    const editBtn = document.createElement("button")
    editBtn.type = "button"
    editBtn.textContent = "Edit"
    editBtn.className = "h-9 w-16 mx-3 text-white text-sm font-medium bg-sky-500 rounded-md shadow shadow-teal-950 hover:opacity-75"

    const deleteBtn = document.createElement("button")
    editBtn.type = "button"
    editBtn.textContent = "Delete"
    editBtn.className = "h-9 w-16 mx-2 text-white text-sm font-medium bg-orange-600 rounded-md shadow shadow-teal-950 hover:opacity-75"
    cardBottom.appendChilde()



    console.log(cardTitle)
    
    
});
