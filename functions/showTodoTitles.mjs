// 4. Visa bara titlar
export function showTodoTitles(todosArray = []) {
    if (todosArray.length === 0) {
        console.log("No todos to show.");
        return;
    }

    // map() används för att skapa en NY array med endast titlar
    // För varje todo-objekt i todosArray hämtas bara titeln
    const titles = todosArray.map(todo => todo.title);

    // join() slår ihop alla titlar, med kommatecken emellan
    console.log("Todo titles:", titles.join(", "));
}