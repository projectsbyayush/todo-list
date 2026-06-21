function addtask() {
    const tasks = document.querySelector("#task").value.trim();
    if (tasks === "") return;
    document.querySelector(".task-list").innerHTML +=
        `<li>${tasks} <button onclick="this.parentElement.remove()">X</button></li>`;
    document.querySelector("#task").value = "";
}
