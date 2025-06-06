import Todo from '../models/Todo';
import TodoItem from './TodoItem';

interface IProps {
	todos: Todo[];
	onToggle: (id: number) => void;
}

const TodoList = ({ todos, onToggle }: IProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
				/>
			))}
		</ul>
	);
};

export default TodoList;
