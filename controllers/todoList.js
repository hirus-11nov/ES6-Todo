import { Task } from "../models/Task.js";
import { ToDo } from "../models/ToDo.js";

let toDo  = new ToDo();
document.querySelector('#addItem').onclick = function() {
    let inputNewTask = document.querySelector('#newTask');
    let task = new Task();
    task.newTask = inputNewTask.value;
    toDo.addTask(task);
    toDo.renderTask('#todo');
    toDo.renderTask('#completed');
    toDo.setStore();
    inputNewTask.value = '';
    inputNewTask.focus();
}

window.deleteTask = id => {
    toDo.deleteTask(id);
    toDo.renderTask('#todo');
    toDo.renderTask('#completed');
    toDo.setStore();
}

window.completedTask = id => {
    toDo.completedTask(id);
    toDo.renderTask('#todo');
    toDo.renderTask('#completed');
    toDo.setStore();
}

window.sortTask = type => {
    toDo.sortTask(type);
    toDo.renderTask('#todo');
    toDo.renderTask('#completed');
}

window.onload = function () {
    toDo.getStore();
    toDo.renderTask('#todo');
    toDo.renderTask('#completed');
}