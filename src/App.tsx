import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		new Todo(1, '✅ Click on a task to mark it as done'),
		new Todo(2, '♻️ Click on a completed task to undo it'),
		new Todo(3, '➕ Use the form below to add your own tasks'),
		new Todo(4, `💾 Your todos are saved in the browser automatically, try to restart this page`),
		new Todo(5, '⬆️ Tasks are sorted to keep unfinished ones at the top')
	]);

	const toggleTodo = (id: number) => {
		setTodos(prev =>
			prev.map(todo => {
				if (todo.id === id) {
					const updated = new Todo(todo.id, todo.text, !todo.done);
					return updated;
				}
				return todo;
			})
		);
	};

	return (
		<div>
			<h1>My Todos</h1>
		</div>
	);
}

export default App;
