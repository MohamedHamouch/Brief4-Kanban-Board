document.querySelector("#addTaskBtn").addEventListener("click", function () {
    document.querySelector("#formContainer").style.display = "flex";
});
document.querySelector("#cancelBtn").addEventListener("click", () => {
    document.querySelector("#formContainer").style.display = "none";
});

const form = document.querySelector("#inputForm");
const taskTitle = document.querySelector("#title");
const taskDeadline = document.querySelector("#deadline");
const taskDescription = document.querySelector("#description");
const taskPriority = document.querySelector("#priority");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //create task cards
    const card = document.createElement("li");
    card.className = "taskCard bg-stone-400 border-4 border-solid min-h-52 p-1";

    const cardTitle = document.createElement("p");
    cardTitle.textContent = taskTitle.value;
    cardTitle.className = "text-white text-lg text-center";
    card.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = taskDescription.value;
    cardDescription.className = "min-h-20 w-full pt-6";
    card.appendChild(cardDescription);

    // creating buttons and date inside container
    const cardBottom = document.createElement("div");
    cardBottom.className = "flex items-center min-h-16 pt-6 w-full";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit";
    editBtn.className =
        "h-9 w-16 mx-3 text-white text-sm font-medium bg-sky-500 rounded-md shadow shadow-teal-950 hover:opacity-75";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
        "h-9 w-16 mx-2 text-white text-sm font-medium bg-orange-600 rounded-md shadow shadow-teal-950 hover:opacity-75";

    const cardDeadline = document.createElement("p");
    cardDeadline.textContent = taskDeadline.value;
    cardDeadline.className = "text-sm font-medium mx-6";

    cardBottom.appendChild(editBtn);
    cardBottom.appendChild(deleteBtn);
    cardBottom.appendChild(cardDeadline);
    card.appendChild(cardBottom);

    // adding priority color (li border/ title bg)
    const cardPriority = taskPriority.value;
    let bgColor, borderColor;
    switch (cardPriority) {
        case "1":
            borderColor = "border-red-600";
            bgColor = "bg-red-600";
            break;
        case "2":
            borderColor = "border-orange-500";
            bgColor = "bg-orange-500";
            break;
        case "3":
            borderColor = "border-green-600";
            bgColor = "bg-green-600";
            break;
        default:
            borderColor = "border-red-600";
            bgColor = "bg-red-600";
    }
    card.classList.add(borderColor);
    cardTitle.classList.add(bgColor);

    document.querySelector("#todoContainer").appendChild(card);
    let cardStatus = "1";

    //make delete button work
    deleteBtn.addEventListener("click", function () {
        card.remove();
    });

    //make edit form show
    editBtn.addEventListener("click", () => {
        document.querySelector("#editContainer").style.display = "flex";
    });
    document.querySelector("#cancelEditBtn").addEventListener("click", () => {
        document.querySelector("#editContainer").style.display = "none";
    });

    const editForm = document.querySelector("#editForm");
    editForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const editTitle = document.querySelector("#editTitle");
        const editDeadline = document.querySelector("#editDeadline");
        const editDescription = document.querySelector("#editDescription");
        const editPriority = document.querySelector("#editPriority");
        const editStatus = document.querySelector("#editStatus");
        const confirmEditBtn = document.querySelector("#confirmEditBtn");
        const cancelEditBtn = document.querySelector("#cancelEditBtn");

        cardTitle.textContent = editTitle.value;
        cardDescription.textContent = editDescription.value;
        cardDeadline.textContent = editDeadline.value;
        cardPriority.value = editPriority.value;

    switch (cardPriority) {
        case "1":
            borderColor = "border-red-600";
            bgColor = "bg-red-600";
            break;
        case "2":
            borderColor = "border-orange-500";
            bgColor = "bg-orange-500";
            break;
        case "3":
            borderColor = "border-green-600";
            bgColor = "bg-green-600";
            break;
        default:
            borderColor = "border-red-600";
            bgColor = "bg-red-600";
    }
    card.classList.add(borderColor);
    cardTitle.classList.add(bgColor);

    if (cardStatus != editStatus.value){
        cardStatus = editStatus.value
       switch(cardStatus){

       case "1": document.querySelector("#todoContainer").appendChild(card);
       case "2": document.querySelector("#todoContainer").appendChild(card);
      }
    }


    });

    form.reset();
    document.querySelector("#formContainer").style.display = "none";
});
