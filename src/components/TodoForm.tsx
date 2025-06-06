import { useState } from 'react';

interface IProps {
	onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: IProps) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim()) {
			onAddTodo(text);
			setText('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center mt-10'>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='click here to add new task...'
				className='w-full outline-0 text-center'
            />

            {/* SVG button */}
			<div className='flex justify-center mt-5'>
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
		</form>
	);
};

export default TodoForm;
