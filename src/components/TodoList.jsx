import React, { useState, useEffect, useContext, createContext } from 'react'
import { RiAddFill } from 'react-icons/ri'
import Todo from './dashboard/Todo'
import { db } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc, orderBy, where, getDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import StatCard from './StatCard'

const TodoContext = createContext()

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [completed, setCompleted] = useState([])
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
			onSnapshot(path, (QuerySnapshot) => {
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

	let taskCreated

	return (
		<div className="grid gap-2">
			<div className="grid gap-2 p-2">
				<StatCard title="Active Tasks" value={todos.length || 0} />
			</div>

			<div className="flex flex-col gap-2 bg-[#19191bc4] w-full m-auto shadow-xl p-4 rounded-md">
				<div className="flex">
					<h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="text-2xl font-light text-left text-[#ffffff] p-2">
						Task Creator
					</h3>
				</div>
				<form data-aos="fade-in" data-aos-duration="1000" onSubmit={createTodo} className="flex justify-between px-1">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="border border-[#ffffff13] p-3 w-full text-md outline-none text-white bg-[#ffffff0e] placeholder:text-[#f8f8f8cc] placeholder:font-normal"
						type="text"
						placeholder="Create your task"
					/>
					<button
						onClick={() => ++taskCreated}
						data-aos="fade"
						data-aos-delay="400"
						data-aos-duration="1200"
						className="border border-[#ffffff2c] p-4 bg-[#3579a7] outline-none text-slate-100"
					>
						<RiAddFill color="white" size={25} />
					</button>
				</form>
				<ul className="px-1 ">
					{todos.map((todo, index) => (
						<Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoList
