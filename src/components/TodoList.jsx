import React, { useState, useEffect } from 'react'
import { RiAddFill } from 'react-icons/ri'
import Todo from './dashboard/Todo'
import { db } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	//Function that creates the todo

	const { user } = UserAuth()
	const uid = user.uid

	const createTodo = async (e) => {
		e.preventDefault(e)
		if (!input) {
			alert('Please enter a task')
			return
		}
		await addDoc(collection(db, uid), {
			text: input,
			completed: false,
		})

		setInput('')
	}

	//useEffect case that allows us to read the todos from the firebase database

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			const path = query(collection(db, currentUser.uid))
			const unsubscribe = onSnapshot(path, (QuerySnapshot) => {
				let todosArr = []
				QuerySnapshot.forEach((doc) => {
					todosArr.push({ ...doc.data(), id: doc.id })
				})
				setTodos(todosArr)
			})
		})
	}, [])

	//Update todo in firebase
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, uid, todo.id), {
			completed: !todo.completed,
		})
	}

	// Delete todo from firebase
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, uid, id))
	}

	return (
		<div
			data-aos="fade-down"
			data-aos-duration="1000"
			className="flex flex-col gap-2 bg-[#ffffff3d] w-full m-auto rounded-sm border border-[#ffffff4b] shadow-xl p-4"
		>
			<div className="flex">
				<h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="text-3xl font-regular text-left text-[#ffffff] p-2">
					Task Creator
				</h3>
			</div>
			<form data-aos="fade-in" data-aos-duration="1000" onSubmit={createTodo} className="flex justify-between px-1">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="border border-[#ffffff91] p-3 w-full text-lg outline-none text-white bg-[#ffffff3d] placeholder:text-[#f8f8f8cc] placeholder:font-normal"
					type="text"
					placeholder="Add Task"
				/>
				<button
					data-aos="fade-left"
					data-aos-delay="400"
					data-aos-duration="1200"
					className="border border-[#ffffff91] p-4 bg-[#3b5fad] outline-none text-slate-100"
				>
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
