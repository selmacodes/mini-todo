import { Todo } from "../Todo.mjs";

// 1. Skapa todo
// (todosArray = []) ger ett defaultvärde om ingen array skickas in, då behöver man inte kontrollera undefined i början av varje funktion
export function createTodo(todosArray = []) {
    // Fråga användaren om todons title och deadline
    const title = prompt("Enter todo title:");
    const deadline = prompt("Enter deadline (YYYY-MM-DD) :");

    // Skapa ny Todo-objekt
    const newTodo = new Todo(title, deadline);

    // Lägg till todo i arrayen
    todosArray.push(newTodo);

    console.log("Todo created!");
}