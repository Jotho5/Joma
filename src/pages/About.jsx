import React from 'react'
import Navbar from '../components/Navbar'
import 'react-vertical-timeline-component/style.min.css'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoReact, IoLogoFirebase } from 'react-icons/io5'
import { FiFigma } from 'react-icons/fi'
import { SiTailwindcss } from 'react-icons/si'
import Timeline from '../components/Timeline'

const about = () => {
	return (
		<div className="bg-gradient-to-br from-[#7b9099] to-[#1b5fd4]">
			<div className="max-w-[1400px] mx-auto ">
				<Navbar />
				<div className="py-12">
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
							<Timeline
								title="UI/UX Design"
								text="Began the development of the template that would be used for this web application. The tools used to create this was Figma. The theme and
            						design was made from scratch."
								icon={<FiFigma />}
								date="August 1st"
							/>
							<Timeline
								title="Project Environment"
								text="
								CSS Frameworks are here to make life easier. For the framework of this project ReactJS and Tailwind CSS was used
								."
								icon={<SiTailwindcss />}
								position="right"
								date="August 2nd"
							/>
							<Timeline
								title="Frontend Development"
								text=" For fullstack applications, I always start with the frontend first. For this period I mainly focused on creating the main pages of the
								website, ensuring that they are mobile-friendly. Followed by this, the dashboard and the pages associated with it was created by scratch.
					"
								icon={<IoLogoReact />}
								date="August 2nd"
							/>
							<Timeline
								title="User Authentication"
								text="Once the layout for Joma was created; I used Firebase to establish user authentication and protect the routes of pages that required the
								user to be logged in. Additional time was spent to handle errors and make sure that everything running smoothly
					"
								icon={<IoLogoFirebase />}
								position="right"
								date="August 4th"
							/>
							<Timeline
								title="User Database"
								text="For the database handling of this application, Firebase Realtime Database was used. To ensure that each user holds their own database, I
								utilized a useEffect hook that observes if the user logs in. Once they are logged in, I pass the user's account id into the database where
								it creates and/or retrieve their database
					"
								icon={<IoLogoFirebase />}
								date="August 5th"
							/>
							<Timeline
								title="Bug Testing"
								text="Optimized and shortend the project's code and in addition to this I spent several hours manually bug testing the website on both mobile and
								full screen renders.
					"
								icon={<IoLogoJavascript />}
								position="right"
								date="August 7th"
							/>
							<Timeline
								title="Future Implementations"
								text="Looking to add more features and implement new technologies in the future."
								icon={<IoLogoJavascript />}
								date="Current"
								color="#09BC8A"
								animate="animate-bounce"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default about
