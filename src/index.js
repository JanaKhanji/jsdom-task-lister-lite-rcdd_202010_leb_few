document.addEventListener("DOMContentLoaded", () => {
    //form and relevant input fields
  const form = document.getElementById("create-task-form");
  const task = document.getElementById("new-task-description");


  //attach event listeners
  newTaskForm.addEventListener("submit", AddTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

   document.getElementById("tasks").appendChild(task);
};
