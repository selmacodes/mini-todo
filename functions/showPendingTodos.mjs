// 8. Visa bara todos som inte är klara
export function showPendingTodos(todosArray = []) {
    // filter används för att få alla ej avklarade todos
    const pending = todosArray.filter(todo => !todo.completed);

    if (pending.length === 0) {
        console.log("All todos are completed!");
        return;
    }

    for (let i = 0; i < pending.length; i++) {
        console.log(`${i}: ${pending[i].title} | Deadline: ${pending[i].deadline}`);
    }
}