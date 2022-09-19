export class Task {
    id = new Date().getTime() * Math.random() * 100000;
    newTask = '';
    taskCompleted = false;
}