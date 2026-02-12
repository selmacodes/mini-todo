// 2. Radera todo
export function deleteTodo(todosArray = []) {
    // Kontrollera om arrayen är tom
    if (todosArray.length === 0) {
        console.log("No todos available.");
        return;
    }

    // För att användaren ska veta vilken som ska raderas visas alla todos med index
    todosArray.forEach((todo, i) => {
        console.log(`${i}: ${todo.title}`);
    });

    // Fråga användaren vilken todo (index) som ska raderas
    const index = Number(prompt("Which todo would you like to delete? Enter the index: "));

    // Validera index och ta bort todo
    if (index >= 0 && index < todosArray.length) {
        todosArray.splice(index, 1); // Från platsen index tas ett element bort
        console.log("The todo has been deleted.");
    } else {
        console.log("Invalid index.");
    }
}