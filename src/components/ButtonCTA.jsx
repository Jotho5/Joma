import React from 'react'

const ButtonCTA = (props) => {
	return (
		<button
			className={`${
				props.color || ' bg-[#3588F3]'
			} hover:bg-[#4070B5] px-10 py-3 custom-radius contact-btn-backdrop border border-[#fdfdfd50] text-[#f7f6f6] font-medium tracking-wide duration-500`}
		>
			Get Started
		</button>
	)
}

export default ButtonCTA
