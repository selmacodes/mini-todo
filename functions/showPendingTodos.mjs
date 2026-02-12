// 8. Visa bara todos som inte är klara
export function showPendingTodos(todosArray = []) {
    // filter används för att få alla ej avklarade todos
    const pending = todosArray.filter(todo => !todo.completed);

    if (pending.length === 0) {
        console.log("All todos are completed!");
        return;
    }

    pending.forEach((todo, i) => {
        console.log(`${i}: ${todo.title} | Deadline: ${todo.deadline}`);
    });
}