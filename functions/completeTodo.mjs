// 7. Markera todo som avklarad
export function completeTodo(todosArray = []) {
    const index = Number(prompt("Enter the index of the todo to mark as completed:"));

    if (index >= 0 && index < todosArray.length) {
        todosArray[index].completed = true;
        console.log("Todo marked as completed.");
    } else {
        console.log("Invalid index.")
    }
}