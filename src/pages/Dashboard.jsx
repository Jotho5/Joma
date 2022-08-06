import React from 'react'
import TodoList from '../components/TodoContainer'
import DashNavbar from '../components/Sidebar'

const Dashboard = () => {
	return (
		<div className="flex min-h-screen w-full bg-gradient-to-br from-[#222222] to-[#171d2c] ">
			<DashNavbar dashboard="font-bold" />
			<div className="flex-1 md:p-5 gap-5">
				<h1 className="text-2xl font-light text-[#ffffff] pb-2 mb-4 border-b border-[#d6d6d62f]">Dashboard</h1>

				<div className="body p-1">
					<TodoList />
				</div>
			</div>
		</div>
	)
}
export default Dashboard
