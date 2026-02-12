// Todo class - hur varje todo ser ut
export class Todo {
    constructor(title, deadline, completed = false) {
        this.title = title;         // Todons titel
        this.deadline = deadline;   // Deadline som sträng
        this.completed = completed; // Boolean om todo är avklarad
    }
}