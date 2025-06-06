import Todo from '../models/Todo';

interface IProps {
	todo: Todo;
	onToggle: (id: number) => void;
}

const TodoItem = ({ todo, onToggle }: IProps) => {
	return <li onClick={() => onToggle(todo.id)}>{todo.text}</li>;
};

export default TodoItem;
