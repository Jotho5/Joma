import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dashboard/dashLogo.png'
import Calendar from '../assets/dashboard/Calendar.png'
import Chart_fill from '../assets/dashboard/Chart_fill.png'
import Chart from '../assets/dashboard/Chart.png'
import Control from '../assets/dashboard/control.png'
import Folder from '../assets/dashboard/Folder.png'
import Search from '../assets/dashboard/Search.png'
import Setting from '../assets/dashboard/Setting.png'
import User from '../assets/dashboard/User.png'

const DashNavbar = (props) => {
	const [open, setOpen] = useState(false)
	const [task, setTask] = useState('')

	const Style = {
		list: 'flex rounded-md cursor-pointer hover:bg-light-white text-[#FFF] text-base items-center gap-x-4 border-b border-[#ffffff0e] mt-5',
		span: `${!open && 'hidden'} origin-left duration-200`,
		ul: `pt-20 flex flex-col gap-5 justify-between`,
	}

	return (
		<div className={` ${open ? 'w-72 ' : 'w-20 '} bg-[rgba(90,90,90,0.13)] border-r border-[#d6d6d6] h-screen p-5 relative duration-300 flex flex-col `}>
			<img
				src={Control}
				className={`absolute cursor-pointer -right-3 top- w-7 border-[#0000000e]
           border-2 rounded-full  ${!open && 'rotate-180'}`}
				onClick={() => setOpen(!open)}
			/>
			<div className="flex gap-x-4">
				<img src={Logo} className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'} mx-auto`} />
				<h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'} pt-10`}></h1>
			</div>
			<div className="grid justify-between mt-5">
				<ul className={Style.ul}>
					<Link to="/dashboard">
						<li className={Style.list}>
							<img src={Calendar} alt="Calendar" />
							<span className={`${!open && 'hidden'} origin-left duration-200 ${props.dashboard || ''}`}>Dashboard</span>
						</li>
					</Link>
					<Link to="/dashboard/account">
						<li className={Style.list}>
							<img src={User} alt="Setting" />
							<span className={`${!open && 'hidden'} origin-left duration-200 ${props.profile || ''}`}>Profile</span>
						</li>
					</Link>

					<Link to="">
						<li className={Style.list}>
							<img src={Calendar} alt="Calendar" />
							<span className={`${!open && 'hidden'} origin-left duration-200`}>Home</span>
						</li>
					</Link>

					<Link to="/about">
						<li className={Style.list}>
							<img src={Calendar} alt="Calendar" />
							<span className={`${!open && 'hidden'} origin-left duration-200`}>About </span>
						</li>
					</Link>
					<Link to="/contact">
						<li className={Style.list}>
							<img src={Calendar} alt="Calendar" />
							<span className={`${!open && 'hidden'} origin-left duration-200`}>Contact</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default DashNavbar
