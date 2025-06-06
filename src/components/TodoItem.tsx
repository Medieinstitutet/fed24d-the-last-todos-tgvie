import Todo from '../models/Todo';

interface IProps {
	todo: Todo;
	onToggle: (id: number) => void;
}

const TodoItem = ({ todo, onToggle }: IProps) => {
	return (
		<li
			onClick={() => onToggle(todo.id)}
			className='flex items-center gap-3 m-2 cursor-pointer'>
			<span
				className={`flex flex-shrink-0 h-5 w-5 items-center justify-center text-2xl border-2 rounded-md ${
					todo.done ? 'border-transparent' : 'border-slate-300'
				}`}>
				{todo.done && '👏'}
			</span>
			<span
				className={`p-2 rounded-md ${
					todo.done ? 'text-slate-300 line-through bg-rose-50' : 'text-slate-800 hover:bg-rose-50'
				}`}>
				{todo.text}
			</span>
		</li>
	);
};

export default TodoItem;
