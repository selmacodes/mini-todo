// 3. Visa alla todos
export function showAllTodos(todosArray = []) {
    // Kontrollera om arrayen är tom
    if (todosArray.length === 0) {
        console.log("No todos to show.");
        return;
    }

    for (let i = 0; i < todosArray.length; i++) {
        const todo = todosArray[i];

        console.log(
            `${i}: ${todo.title} | Deadline: ${todo.deadline} | Completed: ${todo.completed}`
        );
    }
}

