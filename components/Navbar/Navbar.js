import { useState } from 'react'
import Logo from '../Logo/Logo'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleClick = () => {
		console.log(isVisible)
		setIsVisible(!isVisible)
	}

	return (
		<>
			<div className="z-50 px-4 py-4 mx-auto max-w-screen-2xl md:px-2 md:py-2 ">
				<div className="flex items-center justify-end overflow-hidden md:justify-center">
					<div className="absolute inset-y-0 left-0 md:hidden">
						<Logo className="w-12 h-12 mt-2 md:w-24 md:h-24" />
					</div>
					<div className="hidden text-white gap-x-5 md:flex ">
						<Link
							to="about"
							activeClass="border-white"
							className="px-4 py-3 transition duration-300 border-b-2 border-transparent cursor-pointer hover:border-white md:px-5"
							smooth={true}
							spy={true}
							duration={500}
							offset={-220}
						>
							About
						</Link>
						<Link
							to="testimonies"
							activeClass="border-white"
							className="px-4 py-3 transition duration-300 border-b-2 border-transparent cursor-pointer hover:border-white md:px-5"
							smooth={true}
							spy={true}
							duration={500}
							offset={0}
						>
							Testimonies
						</Link>
						<Link
							to="rates"
							activeClass="border-white"
							className="px-4 py-3 transition duration-300 border-b-2 border-transparent cursor-pointer hover:border-white md:px-5"
							smooth={true}
							spy={true}
							duration={500}
							offset={-65}
						>
							Rates
						</Link>
						<Link
							to="booking"
							activeClass="border-white"
							className="px-4 py-3 transition duration-300 border-b-2 border-transparent cursor-pointer hover:border-white md:px-5"
							smooth={true}
							spy={true}
							duration={500}
							offset={-65}
						>
							Booking
						</Link>
					</div>
					{/* Hamburger Button */}
					<button
						className="md:hidden focus:outline-none "
						onClick={handleClick}
					>
						{isVisible !== true ? <svg
							className="text-white w-7 h-7 hover:text-gray-300"
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
						:
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="text-white w-7 h-7 hover:text-gray-300"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>}
					</button>
				</div>
			</div>
			{isVisible && (
				<div
					className={`flex flex-col items-center transform-all duration-1000 text-sm  text-white  md:hidden`}
				>
					<Link
						to="about"
						className="flex justify-center w-full px-4 py-2 cursor-pointer bg-[#594929] bg-opacity-0 hover:bg-opacity-70"
						smooth={true}
						spy={true}
						duration={500}
						offset={-60}
						onClick={handleClick}
					>
						About
					</Link>
					<Link
						to="testimonies"
						className="flex justify-center w-full px-4 py-2 cursor-pointer bg-[#594929] bg-opacity-0 hover:bg-opacity-70"
						smooth={true}
						spy={true}
						duration={500}
						offset={-60}
						onClick={handleClick}
					>
						Testimonies
					</Link>
					<Link
						to="rates"
						className="flex justify-center w-full px-4 py-2 cursor-pointer bg-[#594929] bg-opacity-0 hover:bg-opacity-70"
						smooth={true}
						spy={true}
						duration={500}
						offset={-60}
						onClick={handleClick}
					>
						Rates
					</Link>
					<Link
						to="booking"
						className="flex justify-center w-full px-4 py-2 cursor-pointer bg-[#594929] bg-opacity-0 hover:bg-opacity-70"
						smooth={true}
						spy={true}
						duration={500}
						offset={-60}
						onClick={handleClick}
					>
						Booking
					</Link>
				</div>
			)}
		</>
	)
}

export default Navbar
