import React from 'react'

const ButtonCTA = (props) => {
	return (
		<button
			className={`${
				props.color || ' bg-[#345B92]'
			} hover:bg-[#4070B5] px-10 py-3 custom-radius contact-btn-backdrop border border-[#fdfdfd50] text-[#f7f6f6] font-bold tracking-wide duration-500`}
		>
			Get Started
		</button>
	)
}

export default ButtonCTA
