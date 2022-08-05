import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

import { Timeline, Event } from 'react-timeline-scribble'
const about = () => {
	return (
		<div>
			<div className="h-screen w-full bg-gradient-to-br from-[#21464b] to-[#3860a4]  ">
				<Navbar />
				<div className="grid mx-auto z-0 my-10 px-4 md:px-2 md:py-10 md:mt-20  ">
					<div className="text-center">
						<h1 className="text-[#FFF] text-2xl">The Development of Joma Task Tracker</h1>
						<p className="text-[#FFF] text-sm mt-2 font-light">Observe how this project came together.</p>
					</div>

					<div>
						<Fragment>
							<h1 className="my-10 px-4 md:px-2 md:py-10 md:mt-20 text-[#FFF] text-xl ">Timeline</h1>
							<Timeline>
								<Event interval={'2016 – 2018'} title={'Lorem'} subtitle={'Ipsum'}>
									dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum.
								</Event>
								<Event interval={'2015 – 2016'} title={'Lorem'} subtitle={'Ipsum'}>
									dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum.
								</Event>
							</Timeline>
						</Fragment>
					</div>
				</div>
			</div>
		</div>
	)
}

export default about
