// 6. Visa specifik todo efter titel
export function showTodoByTitle(todosArray = []) {
    const title = prompt("Enter the title of the todo to view:");

    // find används för att hitta en matchning
    const todo = todosArray.find(todo => todo.title === title);

    if (todo) {
        console.log(`Title: ${todo.title}`);
        console.log(`Deadline: ${todo.deadline}`);
        console.log(`Completed: ${todo.completed}`);
    } else {
        console.log("Todo not found.");
    }
}