import Todo from '../models/Todo';
import TodoItem from './TodoItem';

interface IProps {
	todos: Todo[];
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: IProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

export default TodoList;
