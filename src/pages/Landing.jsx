import React from 'react'
import ButtonCTA from '../components/ButtonCTA.jsx'
import HomeImage from '../assets/landing-picture.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos'

import Navbar from '../components/Navbar'

const landing = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-[1400px] mx-auto z-0 my-10 px-4 md:px-2 md:py-10 md:mt-20 ">
				<div className="grid gap-10 md:grid-cols-2 px-4">
					<div className="grid gap-10 md:flex md:flex-col md:gap-8 md:mt-10">
						<div
							data-aos="fade-down"
							data-aos-duration="800"
							data-aos-once="true"
							data-aos-delay="1300"
							className="bubble rounded-lg bg-[#55adf5] mx-auto w-[200px] flex justify-center place-items-center md:ml-[1px] "
						>
							<p className="text-[#FFF] font-semibold px-1 py-1.5 text-center text-sm">No Credit Card Needed</p>
						</div>

						<div data-aos="fade-up-right" data-aos-duration="800" data-aos-once="true" className="flex flex-col gap-5 mx-auto text-center mb-4 md:text-left">
							<h1 className="text-3xl text-[#ffffff] font-black sm:text-3xl md:text-6xl">The Daily Planner For The Busiest People</h1>
							<p className="font-medium text-basemd:text-lg md:w-[80%] text-[#e9e8e8]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.{' '}
							</p>
						</div>

						<div data-aos="fade-up-left" data-aos-duration="800" data-aos-once="true" className="mx-auto place-items-center grid md:mx-0 md:place-items-start">
							<ButtonCTA />
						</div>
					</div>
					<div data-aos="flip-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="true" className="mx-auto place-items-center justify-center grid">
						<img src={HomeImage} alt="Illustration" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default landing
