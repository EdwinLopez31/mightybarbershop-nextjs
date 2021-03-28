import { useState } from 'react'
import Logo from '../Logo/Logo'

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [slideIn, setIsSlideIn] = useState('-translate-y-full')

	const handleClick = () => {
		console.log(isVisible)
		setIsVisible(!isVisible)

	}

	return (
		<>
			<div className="px-4 py-4 mx-auto max-w-screen-2xl ">
				<div className="flex items-center justify-end overflow-hidden md:justify-between">
				<div className="absolute inset-y-0 left-0 md:relative">
					<Logo className="w-12 h-12 mt-2 md:w-24 md:h-24"/>
				</div>
				<div className="hidden text-white gap-x-5 md:flex">
					<a className="px-4 py-3 border-b-2 border-transparent hover:border-white" href="#">About</a>
					<a className="px-4 py-3 border-b-2 border-transparent hover:border-white" href="#">Testimonies</a>
					<a className="px-4 py-3 border-b-2 border-transparent hover:border-white" href="#">Rates</a>
					<a className="px-4 py-3 border-b-2 border-transparent hover:border-white" href="#">Booking</a>
				</div>
				{/* Hamburger Button */}
					<button className="md:hidden" onClick={handleClick}>
						<svg
							className="text-white w-7 h-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
      {
			isVisible === true ?    (<div className={`flex flex-col items-center transform-all duration-1000  ${isVisible === true ? 'max-h-80' : 'max-h-0'} text-sm  text-white  md:hidden`}>
				<a className="flex justify-center w-full px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10" href="#">About</a>
        <a className="flex justify-center w-full px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10" href="#">Testimonies</a>
        <a className="flex justify-center w-full px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10" href="#">Rates</a>
        <a className="flex justify-center w-full px-4 py-2 bg-black bg-opacity-0 hover:bg-opacity-10" href="#">Booking</a>
			</div>) : null
      }
			</>
	)
}

export default Navbar
