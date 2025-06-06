import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '✅ Click on a task to mark it as done',
			done: false
		},
		{
			id: 2,
			text: '➕ Use the form below to add your own tasks',
			done: false
		},
		{
			id: 3,
			text: '♻️ Click on a completed task to undo it',
			done: false
		},
		{
			id: 4,
			text: `💾 Your todos are saved in the browser automatically, try to restart this page`,
			done: false
		},
		{
			id: 5,
			text: '⬆️ Tasks are sorted to keep unfinished ones at the top',
			done: false
		}
	]);

	return (
		<div>
			<h1>My Todos</h1>
		</div>
	);
}

export default App;
