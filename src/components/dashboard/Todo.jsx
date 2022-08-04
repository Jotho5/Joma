import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
	const Styling = {
		liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize duration-500 ease-in-out`,
		textComplete: `ml-2 cursor-pointer line-through duration-500 ease-in-out`,
	}

	return (
		<li className={todo.completed ? Styling.liComplete : 'flex justify-between bg-slate-200 p-4 my-2 capitalize duration-500 ease-in-out  '}>
			<div className="flex">
				<input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''} className="rounded-full" />

				<div onClick={() => toggleComplete(todo)} className={todo.completed ? Styling.textComplete : 'ml-2 cursor-pointer duration-500 ease-in-out'}>
					<p className="break-all">{todo.text}</p>
				</div>
			</div>
			<button onClick={() => deleteTodo(todo.id)} className="cursor-pointer flex items-center duration-500 ease-in-out relative">
				{<FaRegTrashAlt />}
			</button>
		</li>
	)
}

export default Todo
