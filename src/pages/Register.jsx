import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import TodoImage from '../assets/todo-image.svg'
import Navbar from '../components/Navbar'

const Register = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-[1400px] mx-auto z-0 my-10 px-6 md:px-2  md:mt-20">
				<div className="grid gap-20 px-4 lg:flex place-items-center">
					<div>
						<h1
							data-aos="fade-in"
							data-aos-duration="800"
							data-aos-once="true"
							className="text-white text-center font-black text-4xl py-2 lg:text-left lg:text-5xl"
						>
							Set up your <span className="text-[#61c4e2]">Joma</span> Account
							<span className="text-[#6AC6FB]">.</span>
						</h1>
						<p data-aos="fade-in" data-aos-duration="800" data-aos-once="true" className="text-white text-center font-light py-2 mb-5 lg:text-left ">
							Please enter your details to proceed with signing up.
						</p>

						<div
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-once="true"
							data-aos-delay="600"
							className="form sm:grid sm:place-items-center lg:place-items-start"
						>
							<RegisterForm />

							<p className="text-white pt-6 font-light">
								Already have an account?{' '}
								<a href="#">
									<span className="text-[#ffffff] font-medium">Sign In</span>
								</a>
							</p>
						</div>
					</div>

					<div data-aos="fade-down-left" data-aos-duration="800" data-aos-once="true" data-aos-delay="1200" className="flex place-items-start mx-auto">
						<img className="max-h-[600px] grid" src={TodoImage} alt="signup image" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
