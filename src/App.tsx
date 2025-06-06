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
				<div className='flex justify-center mt-10'>
					<button className='flex items-center justify-center bg-rose-200 text-white font-bold rounded-full w-16 h-16 hover:scale-110 transition cursor-pointer'>
						<svg
							className='w-7 h-7'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='4'>
							<path
								d='M12 5v14M5 12h14'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
