import React from 'react'
import { RiNumbersFill } from 'react-icons/ri'

const StatCard = (props) => {
	return (
		<div className="bg-[#1a1a1d] shadow-xl rounded-md">
			<div className="grid grid-cols-2 gap-2 justify-center items-center p-4">
				<div className="rounded-full bg-[#222222] grid place-items-center w-10 p-2">
					<RiNumbersFill color="#FFF" className="h-5" alt="Icon" />
				</div>
				<div className=" grid place-items-end">
					<div className="">
						<h1 className="text-[#ffffff] text-sm md:text-lg">{props.title}</h1>
						<h1 className="grid place-items-end text-white text-xl">{props.value}</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StatCard
