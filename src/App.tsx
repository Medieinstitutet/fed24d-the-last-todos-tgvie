import { useState } from 'react';
import Todo from './models/Todo';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		new Todo(1, '✅ Click on a task to mark it as done'),
		new Todo(2, '♻️ Click on a completed task to undo it'),
		new Todo(3, '➕ Use the form below to add your own tasks'),
		new Todo(4, `💾 Your todos are saved in the browser automatically, try to restart this page`),
		new Todo(5, '⬆️ Tasks are sorted to keep unfinished ones at the top')
	]);

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					const updated = new Todo(todo.id, todo.text, !todo.done);
					return updated;
				}
				return todo;
			})
		);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-slate-600'>
			<div className='bg-white rounded-xl shadow-lg w-full m-5 max-w-lg p-8'>
				<h1>To-dos</h1>
				<TodoList
					todos={todos}
					onToggle={toggleTodo}
				/>
			</div>
		</div>
	);
}

export default App;
