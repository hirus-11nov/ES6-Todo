export class ToDo {
    arrTask = [];
    addTask = (newTask) => {
        this.arrTask.push(newTask);
    }

    setStore() {
        localStorage.setItem('arrTask', JSON.stringify(this.arrTask))
    }

    getStore() {
        if (!localStorage.getItem('arrTask')) return;
        this.arrTask = JSON.parse(localStorage.getItem('arrTask'));
    }

    deleteTask(taskId) {
        this.arrTask = this.arrTask.filter((item) => item.id != taskId);
    }

    completedTask(taskId) {
        this.arrTask = this.arrTask.map((item) => {
            return item.id == taskId ? {...item, taskCompleted: !item.taskCompleted} : item;
        })
    }

    renderTask(selector) {
        let arrRender = JSON.parse(JSON.stringify(this.arrTask));
        selector === "#completed" ? arrRender = arrRender.filter((item) => item.taskCompleted) :
                                    arrRender = arrRender.filter((item) => !item.taskCompleted);
        let iconClass = selector === "#completed" ? "fas" : "far";
        let htmlContent = arrRender.reduce((html, item) => {
                return html + `
                    <li>
                        <span>${item.newTask}</span>
                        <div>
                            <i class="far fa-trash-alt" onclick="deleteTask('${item.id}')"></i>
                            <i class="${iconClass} fa-check-circle" onclick="completedTask('${item.id}')"></i>
                        </div>
                    </li>
                `
        }, '');
        document.querySelector(selector).innerHTML = htmlContent;
    }

    sortTask(type) {
        type === 'asc' ? this.arrTask = _.orderBy(this.arrTask, ['newTask'], ['asc']) : this.arrTask = _.orderBy(this.arrTask, ['newTask'], ['desc']);
    }
}