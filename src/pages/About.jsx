import React from 'react'
import Navbar from '../components/Navbar'
import 'react-vertical-timeline-component/style.min.css'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoReact, IoLogoFirebase } from 'react-icons/io5'
import { FiFigma } from 'react-icons/fi'
import { SiTailwindcss } from 'react-icons/si'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

const about = () => {
	//an array of objects to store props for Timeline components
	const timelineData = [
		{
			title: 'UI/UX Design',
			text: 'At the initial stage, the Joma web applications template was developed using Figma, with the theme and design created from scratch',
			icon: <FiFigma />,
			date: 'August 1st',
		},
		{
			title: 'Project Environment',
			text: 'To streamline the development process, ReactJS and Tailwind CSS were utilized as the CSS framework for the Joma project.',
			icon: <SiTailwindcss />,
			position: 'right',
			date: 'August 2nd',
		},
		{
			title: 'Frontend Development',
			text: 'The frontend was given top priority in the fullstack application development process. The main pages of the website were created with a focus on ensuring they were mobile-friendly. Following this, the dashboard and associated pages were built from scratch.',
			icon: <IoLogoReact />,
			date: 'August 2nd',
		},
		{
			title: 'User Authentication',
			text: 'Upon completion of the Joma website layout, Firebase was employed to establish user authentication, protecting the pages that required a logged-in user. Additional time was dedicated to ensuring the smooth handling of errors.',
			icon: <IoLogoFirebase />,
			position: 'right',
			date: 'August 4th',
		},
		{
			title: 'User Database',
			text: "Firebase Realtime Database was utilized for the database handling of the Joma application. I utilized a useEffect hook to observe whether a user logs in to ensure each user holds their own database. Upon logging in, the user's account ID was passed into the database, creating and/or retrieving their database.",
			icon: <IoLogoFirebase />,
			date: 'August 5th',
		},
		{
			title: 'Bug Testing',
			text: "I spent several hours manually testing the Joma website for bugs on both mobile and full-screen renders. In addition, the project's code was optimized and shortened.",
			icon: <IoLogoJavascript />,
			position: 'right',
			date: 'August 7th',
		},
		{
			title: 'Future Implementations',
			text: 'I plan to implement new technologies and features to the Joma application in the future.',
			icon: <IoLogoJavascript />,
			date: 'Current',
			color: '#09BC8A',
			animate: 'animate-bounce',
		},
	]

	return (
		<div>
			<div className="max-w-[1400px]  mx-auto">
				<Navbar />
				<div className="">
					<div className="grid gap-5 ">
						<div className="headline text-white mx-auto text-center">
							<h1 data-aos="fade" data-aos-duration="500" className="text-2xl mb-2 sm:text-3xl md:text-4xl font-light">
								The Development of Joma
							</h1>
							<p data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" className="font-light text-sm md:text-base">
								Front row seats of the Joma's development.
							</p>
						</div>

						<div>
							<div>
								{/* Use map to render a Timeline component for each object in timelineData */}
								{timelineData.map((data, index) => (
									<Timeline
										key={index}
										title={data.title}
										text={data.text}
										icon={data.icon}
										date={data.date}
										position={data.position}
										color={data.color}
										animate={data.animate}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default about
