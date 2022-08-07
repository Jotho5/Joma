import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashNavbar from '../components/Sidebar'
import { UserAuth } from '../context/AuthContext'
import { MdOutlineLogout } from 'react-icons/md'
import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Dialog, Text, Modal } from '@mantine/core'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { openModal, closeAllModals } from '@mantine/modals'
import { getAuth, updateEmail } from 'firebase/auth'

const Account = () => {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()
	const [Email, setEmail] = useState('')
	const [opened, setOpened] = useState(false)

	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
			console.log('You are logged out')
		} catch (e) {
			console.log(e.message)
		}
	}

	const form = useForm({
		initialValues: {
			name: '',
			email: '',
		},
	})

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setEmail(currentUser.email)
		})
	}, [])

	const auth = getAuth()

	const updateUserEmail = () => {
		updateEmail(auth.currentUser, Email)

		setOpened(false)
	}

	return (
		<div className="flex h-screen w-full bg-[#171820]">
			<DashNavbar profile="font-bold" />
			<div className="h-screen flex-1 p-7 place-items-center">
				<h1
					className="text-2xl font-light
				 text-[#ffffff] pb-2 mb-4 border-b"
				>
					Account
				</h1>

				<div className="grid gap-4 w-[80%] mx-auto mt-32">
					<div className="bg-[#21222D] rounded-sm border border-[#ffffff11] shadow-xl p-4">
						<div className="bg-[#FFF] rounded-full mx-auto w-[30%] h-44 relative bottom-20 border border-[#FFF]">Holder</div>

						<div>
							<form className="grid gap-10 mx-auto w-[80%]">
								<div className="grid">
									<label className="pb-3  text-[#FFF]">Full Name</label>
									<input
										className="bg-[#d9d9d91f] border border-[#ffffff52] rounded-lg outline-none py-3 px-4 placeholder:text-[#dbdbdb81] placeholder:font-medium"
										placeholder={auth.currentUser.email}
										disabled={true}
										type={'text'}
									/>

									<Modal onSubmit={updateUserEmail} opened={opened} onClose={() => setOpened(false)} title="Modify Your Email">
										<div className="grid place-items-start gap-3 p-2">
											<div className="w-full">
												<input
													value={Email}
													onChange={(e) => setEmail(e.target.value)}
													className="placeholder:text-[#00000093] outline-none border p-2 w-full rounded-md"
													type="email"
													placeholder="Enter Task Name"
													required={true}
												/>
											</div>

											<Button className="bg-[#3c74db] duration-150" onClick={() => setOpened(false)}>
												Save Changes
											</Button>
										</div>
									</Modal>

									<Group position="center">
										<Button onClick={() => setOpened(true)}>Open Modal</Button>
									</Group>
								</div>

								<div className="grid">
									<label className="pb-3  text-[#FFF]">Password</label>
									<input
										className="bg-[#d9d9d91f] border border-[#ffffff52] rounded-lg outline-none py-3 px-4 placeholder:text-[#dbdbdb81] placeholder:font-medium"
										placeholder={'••••••••••'}
										disabled={true}
										type="password"
									/>
								</div>

								<div className="pb-5">
									<button
										onClick={handleLogout}
										className="bg-[#32336e] p-4 w-[30%] max-w-[200px] rounded-lg text-[#FFF] hover:bg-[#262755] font-medium duration-150 ease-out"
									>
										Logout
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account
