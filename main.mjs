import { createTodo } from "./functions/createTodo.mjs";
import { deleteTodo } from "./functions/deleteTodo.mjs";
import { showAllTodos } from "./functions/showAllTodos.mjs"
import { showTodoTitles } from "./functions/showTodoTitles.mjs";
import { showTodoByIndex } from "./functions/showTodoByIndex.mjs";
import { showTodoByTitle } from "./functions/showTodoByTitle.mjs";
import { completeTodo } from "./functions/completeTodo.mjs";
import { showPendingTodos } from "./functions/showPendingTodos.mjs";

// Temporär datastruktur
let todos = [];

// Meny
function menu() {
    let running = true;

    while (running) {
        const choice = prompt(
            "TODO APP\n\n" +
            "1. Create todo\n" +
            "2. Delete todo\n" +
            "3. Show all todos\n" +
            "4. Show only titles\n" +
            "5. Show specific todo (by index)\n" +
            "6. Show specific todo (by title)\n" +
            "7. Complete todo\n" +
            "8. Show pending todos\n" +
            "9. Exit\n\n" +
            "Choose an option:"
        );

        switch (choice) {
            case "1":
                createTodo(todos);
                break;
            case "2":
                deleteTodo(todos);
                break;
            case "3":
                showAllTodos(todos);
                break;
            case "4":
                showTodoTitles(todos);
                break;
            case "5":
                showTodoByIndex(todos);
                break;
            case "6":
                showTodoByTitle(todos);
                break;
            case "7":
                completeTodo(todos);
                break;
            case "8":
                showPendingTodos(todos);
                break;
            case "9":
                running = false;
                break;
            default:
                console.log("Invalid choice.");
        }
    }
}

// Starta programmet
menu();

