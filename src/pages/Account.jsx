import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashNavbar from '../components/Sidebar'
import { UserAuth } from '../context/AuthContext'
import { MdOutlineLogout } from 'react-icons/md'

const Account = () => {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
			console.log('You are logged out')
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<div className="flex h-screen w-full bg-gradient-to-br from-[#222222] to-[#171d2c]">
			<DashNavbar profile="font-bold" />
			<div className="h-screen flex-1 p-7 place-items-center">
				<h1
					className="text-2xl font-light
				 text-[#ffffff] pb-2 mb-4 border-b"
				>
					Account
				</h1>
				<div className="grid gap-4 lg:grid-cols-2">
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						className="bg-[#19191bc4] w-full m-auto rounded-sm border border-[#ffffff11] shadow-xl p-4 text-left"
					>
						<p
							data-aos="fade-in"
							data-aos-delay="400"
							data-aos-duration="800"
							className="text-2xl font-light mb-3 text-[#ffffff] p-2 border-b border-[#ffffff59]"
						>
							User Email
						</p>
						<div className="px-3 flex justify-between">
							<p className="text-xl font-medium mb-3 text-[#ffffff] capitalize p-2">{user && user.email}</p>
							<button
								data-aos="fade-left"
								data-aos-delay="400"
								data-aos-duration="1200"
								onClick={handleLogout}
								className="border px-5 bg-[#17161d] text-slate-100"
							>
								<MdOutlineLogout size={15} color="white" />
							</button>
						</div>
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						className="bg-[#19191bc4] w-full m-auto rounded-sm border border-[#ffffff11] shadow-xl p-4 text-left"
					>
						<p
							data-aos="fade-in"
							data-aos-delay="400"
							data-aos-duration="800"
							className="text-2xl font-light mb-3 text-[#ffffff] p-2 border-b border-[#ffffff59]"
						>
							User Email
						</p>
						<div className="px-3 flex justify-between">
							<p className="text-xl font-medium mb-3 text-[#ffffff] capitalize p-2">{user && user.email}</p>
							<button
								data-aos="fade-left"
								data-aos-delay="400"
								data-aos-duration="1200"
								onClick={handleLogout}
								className="border px-5 bg-[#17161d] text-slate-100"
							>
								<MdOutlineLogout size={15} color="white" />
							</button>
						</div>
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						className="bg-[#19191bc4] w-full m-auto rounded-sm border border-[#ffffff11] shadow-xl p-4 text-left"
					>
						<p
							data-aos="fade-in"
							data-aos-delay="400"
							data-aos-duration="800"
							className="text-2xl font-light mb-3 text-[#ffffff] p-2 border-b border-[#ffffff59]"
						>
							User Email
						</p>
						<div className="px-3 flex justify-between">
							<p className="text-xl font-medium mb-3 text-[#ffffff] capitalize p-2">{user && user.email}</p>
							<button
								data-aos="fade-left"
								data-aos-delay="400"
								data-aos-duration="1200"
								onClick={handleLogout}
								className="border px-5 bg-[#17161d] text-slate-100"
							>
								<MdOutlineLogout size={15} color="white" />
							</button>
						</div>
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						className="bg-[#19191bc4] w-full m-auto rounded-sm border border-[#ffffff11] shadow-xl p-4 text-left"
					>
						<p
							data-aos="fade-in"
							data-aos-delay="400"
							data-aos-duration="800"
							className="text-2xl font-light mb-3 text-[#ffffff] p-2 border-b border-[#ffffff59]"
						>
							User Email
						</p>
						<div className="px-3 flex justify-between">
							<p className="text-xl font-medium mb-3 text-[#ffffff] capitalize p-2">{user && user.email}</p>
							<button
								data-aos="fade-left"
								data-aos-delay="400"
								data-aos-duration="1200"
								onClick={handleLogout}
								className="border px-5 bg-[#17161d] text-slate-100"
							>
								<MdOutlineLogout size={15} color="white" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account
