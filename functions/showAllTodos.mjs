// 3. Visa alla todos
export function showAllTodos(todosArray = []) {
    // Kontrollera om arrayen är tom
    if (todosArray.length === 0) {
        console.log("No todos to show.");
        return;
    }

    // Gå igenom hela todosArray
    todosArray
        // map() skapar en NY array baserat på den ursprungliga
        // För varje todo-objekt omvandlar det till en formaterad sträng
        .map((todo, i) =>
            // Skapar en läsbar text med index, titel, deadline och status
            `${i}: ${todo.title} | Deadline: ${todo.deadline} | Completed: ${todo.completed}`)

        // forEach() itererar över den nya arrayen (med strängar)
        // Varje rad skrivs ut i konsolen
        .forEach(line => console.log(line));
}

