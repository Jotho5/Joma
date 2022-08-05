import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dashboard/dashLogo.png'
import { VscRocket } from 'react-icons/vsc'
import { IoPersonCircle, IoChatbubbles } from 'react-icons/io5'
import { BsFillHouseFill } from 'react-icons/bs'
import { MdContacts } from 'react-icons/md'
import control from '../assets/dashboard/control.png'

const DashNavbar = (props) => {
	const [open, setOpen] = useState(false)

	const Style = {
		list: 'flex rounded-md cursor-pointer hover:bg-light-white text-[#FFF] text-base items-center gap-x-4  mt-5',

		ul: `mt-2 flex flex-col gap-5 justify-between`,
		img: `cursor-pointer duration-1000 ${open && 'rotate-[360deg]'} mx-auto ${!open && 'h-10 duration-500 ease-in-out'}`,
		h1: `text-white text-4xl text-center font-semibold duration-200  pt-10 relative bottom-8`,
		p: `text-xs text-center relative bottom-7 text-white font-medium `,
		span: `${!open && 'hidden'} duration-200`,
	}

	return (
		<div
			className={` ${open ? 'w-72 ' : 'w-20 '} bg-[rgba(32,32,32,0.13)] border-r border-[#d6d6d62f] h-screen p-7 relative duration-300 flex flex-col ${
				!open && 'place-items-center'
			} `}
		>
			<img
				alt="Spinner Icon"
				src={control}
				className={`absolute cursor-pointer -right-3 top- w-7 border-[#0000000e] 
           border-2 rounded-full  ${!open && 'rotate-180'}`}
				onClick={() => setOpen(!open)}
			/>
			<div className={`grid pt-10 border-b border-[#ffffff15] ${!open && 'border-[#ffffff00] duration-150 ease-in-out'}`}>
				<img alt="JomaLogo" src={Logo} className={Style.img} />
				<div className={`${!open && 'scale-0 duration-150 ease-in-out'}`}>
					<h1 className={Style.h1}>Joma</h1>
					<p className={Style.p}>Tracking made easy</p>
				</div>
			</div>
			<div className={`grid justify-between  ${!open && 'duration-150 ease-in-out'}`}>
				<ul className={Style.ul}>
					<Link to="/dashboard">
						<li className={`${Style.list}`}>
							<VscRocket size={25} alt="Dashboard" />
							<span className={`${Style.span} ${props.dashboard || ''}`}>Dashboard</span>
						</li>
					</Link>
					<Link to="/dashboard/account">
						<li className={Style.list}>
							<IoPersonCircle size={25} alt="Profile" />
							<span className={`${Style.span} ${props.profile || ''}`}>Profile</span>
						</li>
					</Link>

					<Link to="/">
						<li className={Style.list}>
							<BsFillHouseFill size={25} alt="Home" />
							<span className={`${Style.span} duration-200`}>Home</span>
						</li>
					</Link>

					<Link to="/about">
						<li className={Style.list}>
							<IoChatbubbles size={25} alt="About" />
							<span className={`${Style.span} duration-200`}>About </span>
						</li>
					</Link>
					<Link to="/contact">
						<li className={Style.list}>
							<MdContacts size={25} alt="Contact" />
							<span className={`${Style.span} duration-200`}>Contact</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default DashNavbar
