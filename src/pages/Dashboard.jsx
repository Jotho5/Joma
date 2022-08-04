import React, { useState } from 'react'

import TodoList from '../components/TodoList'
import DashNavbar from '../components/DashNavbar'

const Dashboard = () => {
	return (
		<div className="flex h-screen w-full bg-gradient-to-br from-[#A9A9A9] to-[#3860A4] ">
			<DashNavbar dashboard="font-bold" />
			<div className="h-screen flex-1 p-7">
				<h1 className="text-2xl font-semibold text-[#ffffff] pb-2 mb-4 border-b">Dashboard</h1>
				<div className="body p-1">
					<TodoList />
				</div>
			</div>
		</div>
	)
}
export default Dashboard
