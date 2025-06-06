import { useState } from 'react';
import Todo from './models/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
	// Default todo list
	const [todos, setTodos] = useState<Todo[]>([
		new Todo(1, '✅ Click on a task to mark it as done'),
		new Todo(2, '♻️ Click on a completed task to undo it'),
		new Todo(3, '➕ Use the form below to add your own tasks'),
		new Todo(4, '⬆️ Tasks are sorted to keep unfinished ones at the top'),
		new Todo(5, `💾 Your todos are saved in the browser automatically, try to restart this page`)
	]);

	// Toggle done/un-done a todo by ID
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

	// Add new todo to list and give it a unique ID
	const addTodo = (text: string) => {
		const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
		const newTodo = new Todo(newId, text);
		setTodos([newTodo, ...todos]);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-slate-600'>
			{/* Todo Card */}
			<div className='bg-white rounded-xl shadow-lg w-full m-5 max-w-lg p-8'>
				<h1>To-dos</h1>
				<TodoList
					// Sorting, completed tasks on the bottom, non-completed on top
					todos={[...todos].sort((a, b) => Number(a.done) - Number(b.done))}
					
					/* todos={[...todos].sort((a,b) => {
					if (a.done === false && b.done === true) {
						return -1;
					} else if (a.done === true && b.done === false) {
						return 1;
					} else {
						return 0;
					}
					})} */
					onToggle={toggleTodo}
				/>
				<TodoForm onAddTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
