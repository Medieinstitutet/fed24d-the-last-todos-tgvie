import Todo from '../models/Todo';

interface IProps {
	todo: Todo;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: IProps) => {
	return (
		<li
			// Toggle
			onClick={() => onToggle(todo.id)}
			className='flex items-center gap-3 m-2 cursor-pointer'>
			
			{/* Checkbox */}
			<span
				className={`flex flex-shrink-0 h-5 w-5 items-center justify-center text-2xl border-2 rounded-md ${
					todo.done ? 'border-transparent' : 'border-slate-300'
				}`}>
				{todo.done && '👏'}
			</span>
			{/* Todo text */}
			<span
				className={`p-2 rounded-md ${
					todo.done ? 'text-slate-300 line-through bg-rose-50' : 'text-slate-800 hover:bg-rose-50'
				}`}>
				{todo.text}
			</span>
			{/* Delete button */}
			<button
				onClick={(e) => {
					e.stopPropagation(); // Prevent onToggle to run at the same time
					onDelete(todo.id);
				}}
				className='ml-auto cursor-pointer'>
				🗑️
			</button>
		</li>
	);
};

export default TodoItem;
