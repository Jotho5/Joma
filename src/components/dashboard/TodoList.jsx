import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
	const Styling = {
		liComplete: `flex justify-between bg-[#555558] p-4 my-2 capitalize duration-500 ease-in-out`,
		textComplete: `ml-2 cursor-pointer line-through duration-500 ease-in-out`,
	}

	return (
		<li className={todo.completed ? Styling.liComplete : 'flex justify-between bg-[#26252e]  p-4 my-2  duration-500 ease-in-out custom-radius '}>
			<div className="flex gap-2">
				<input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''} className="rounded-full" />

				<div onClick={() => toggleComplete(todo)} className={todo.completed ? Styling.textComplete : 'ml-2 cursor-pointer duration-500 ease-in-out'}>
					<h1 className="break-all text-[#ebeaee] font-bold border-[#ffffff38] leading-loose capitalize">{todo.head}</h1>
					<p className="first-letter:capitalize break-all md:pl-1 text-[#ebeaee]">{todo.text}</p>
				</div>
			</div>
			<button onClick={() => deleteTodo(todo.id)} className="cursor-pointer flex items-center duration-500 ease-in-out relative">
				{<FaRegTrashAlt color="white" />}
			</button>
		</li>
	)
}

export default Todo
