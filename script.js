document.querySelector("#addTaskBtn").addEventListener("click", function () {
    document.querySelector("#formContainer").style.display = "flex";
});
document.querySelector("#cancelBtn").addEventListener("click", () => {
    document.querySelector("#formContainer").style.display = "none";
});

let todoCount = 0, doingCount = 0, doneCount = 0;

const form = document.querySelector("#inputForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskTitle = document.querySelector("#title");
    const taskDeadline = document.querySelector("#deadline");
    const taskDescription = document.querySelector("#description");
    const taskPriority = document.querySelector("#priority");

    const selectedDate = new Date(taskDeadline.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
        alert("Please select a valid a date.");
        return;
    }

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

    // creating buttons and date for task
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
    let cardPriority = taskPriority.value;
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
    }

    card.classList.add(borderColor);
    cardTitle.classList.add(bgColor);
    let cardStatus = "1";

    document.querySelector("#todoContainer").appendChild(card);
    updateCount(cardStatus, 1)

    //make delete button work
    deleteBtn.addEventListener("click", function () {
        const confirmation = confirm("Are you sure you want to delete this task?");
        if (confirmation) {
            card.remove(); 
            updateCount(cardStatus, -1);
        }
    });

    //make edit form show
    editBtn.addEventListener("click", () => {
        document.querySelector("#editContainer").style.display = "flex";

        document.querySelector("#editTitle").value = cardTitle.textContent;
        document.querySelector("#editDeadline").value = cardDeadline.textContent;
        document.querySelector("#editDescription").value = cardDescription.textContent;
        document.querySelector("#editPriority").value = cardPriority;
        document.querySelector("#editStatus").value = cardStatus;

        //editing the tasks   
        const editForm = document.querySelector("#editForm");

        document.querySelector("#editForm").onsubmit = (event) => {
            event.preventDefault();
            const newTitle = document.querySelector("#editTitle").value;
            const newDescription = document.querySelector("#editDescription").value;
            const newDeadline = document.querySelector("#editDeadline").value;

            cardTitle.textContent = newTitle;
            cardDescription.textContent = newDescription;
            cardDeadline.textContent = newDeadline;
            cardPriority = document.querySelector("#editPriority").value;

            card.classList.remove("border-red-600", "border-orange-500", "border-green-600");
            cardTitle.classList.remove("bg-red-600", "bg-orange-500", "bg-green-600");

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
            }
            card.classList.add(borderColor);
            cardTitle.classList.add(bgColor);

            const newStatus = document.querySelector("#editStatus").value;
            if (cardStatus != newStatus) {
                switch (newStatus) {
                    case "1": document.querySelector("#todoContainer").appendChild(card);
                        break;
                    case "2": document.querySelector("#doingContainer").appendChild(card);
                        break;
                    case "3": document.querySelector("#doneContainer").appendChild(card);
                        break;
                }
                updateCount(cardStatus, -1);
                updateCount(newStatus, +1);
                cardStatus = newStatus;
            }
            document.querySelector("#editContainer").style.display = "none";
        };
    });

    document.querySelector("#cancelEditBtn").addEventListener("click", () => {
        document.querySelector("#editContainer").style.display = "none";
    });

    form.reset();
    document.querySelector("#formContainer").style.display = "none";
});

function updateCount(status, change) {
    if (status === "1") {
        todoCount += change;
    } else if (status === "2") {
        doingCount += change;
    }
    else if (status === "3") {
        doneCount += change;
    }
    document.querySelector("#todoCount").innerText = todoCount;
    document.querySelector("#doingCount").innerText = doingCount;
    document.querySelector("#doneCount").innerText = doneCount;
}