// 5. Visa specifik todo efter index
export function showTodoByIndex(todosArray = []) {
    // Fråga vilken todo användaren vill se
    const index = Number(prompt("Enter the index of the todo to view:"));

    // Kontrollera att index är giltigt
    if (index >= 0 && index < todosArray.length) {
        const todo = todosArray[index];

        // Visa detaljer om todo
        console.log(`Title: ${todo.title}`);
        console.log(`Deadline: ${todo.deadline}`);
        console.log(`Completed: ${todo.completed}`);
    } else {
        console.log("Invalid index.")
    }
}