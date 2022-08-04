import React, { useState, useEffect } from 'react'
import { RiAddFill } from 'react-icons/ri'
import Todo from './dashboard/Todo'
import { db } from '../firebase/firebase.js'
import { query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	//Function that creates the todo

	const createTodo = async (e) => {
		e.preventDefault(e)
		if (!input) {
			alert('Please enter a task')
			return
		}
		await addDoc(collection(db, 'todos'), {
			text: input,
			completed: false,
		})

		setInput('')
	}

	//useEffect case that allows us to read the todos from the firebase database
	useEffect(() => {
		const path = query(collection(db, 'todos'))
		const unsubscribe = onSnapshot(path, (QuerySnapshot) => {
			let todosArr = []
			QuerySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id })
			})
			setTodos(todosArr)
		})
		return () => unsubscribe()
	}, [])

	//Update todo in firebase
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, 'todos', todo.id), {
			completed: !todo.completed,
		})
	}

	// Delete todo from firebase
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, 'todos', id))
	}

	return (
		<div
			data-aos="fade-down"
			data-aos-duration="1000"
			className="flex flex-col gap-2 bg-[#ffffff4b] w-full m-auto rounded-sm border border-[#ffffff4b] shadow-xl p-4"
		>
			<h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="text-3xl font-semibold text-left text-[#ffffff] p-2">
				Task Creator
			</h3>
			<form data-aos="fade-in" data-aos-duration="1000" onSubmit={createTodo} className="flex justify-between px-1">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="border p-3 w-full text-lg outline-none bg-[#ffffffb9] placeholder:text-[#c0bdbdcc] placeholder:font-normal"
					type="text"
					placeholder="Add Task"
				/>
				<button data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200" className="border p-4 bg-indigo-500 text-slate-100">
					<RiAddFill color="white" size={25} />
				</button>
			</form>
			<ul className="px-1 ">
				{todos.map((todo, index) => (
					<Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
				))}
			</ul>
			{todos.length < 1 ? null : <p className="text-center p-2 text-white font-medium text-xl">You have {todos.length} tasks</p>}
		</div>
	)
}

export default TodoList
