import actions from "./actions";

async function fetchTodos() {
  try {
    let fetchedTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => data.slice(0, 10));
    console.log(fetchedTodos);
    return fetchedTodos;
  } catch (e) {
    console.log(e);
  }
}

export default async function getTodo(dispatch) {
  const fetchedTodos = await fetchTodos();
  fetchedTodos.map(todo => dispatch(actions.add(todo.title)));
}
