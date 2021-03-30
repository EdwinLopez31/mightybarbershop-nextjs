import styles from '../../styles/Header.module.scss'
import Logo from '../Logo/Logo'
import { Link, animateScroll as scroll }  from 'react-scroll'

const Header = () => {
	return (
		<div className={styles.headerSection}>
			<div className="relative">
				<Logo className="absolute hidden md:-left-24 md:w-24 md:h-24 xl:w-36 xl:h-36 xl:-left-32 md:block" />
				<h1 className="text-[2.70rem] md:text-6xl xl:text-[5.5rem] font-base text-white text-center leading-[3rem]">
					Mighty Barbershop
				</h1>
			</div>
			<div>
				<h4 className="mt-2 text-xl font-thin tracking-tight text-center text-white uppercase md:tracking-wider xl:text-4xl md:mt-4 md:font-light md:text-2xl">
					The home of the mightiest haircut
				</h4>
			</div>
			<div className="flex flex-row mt-10 md:mt-12 xl:mt-14 gap-x-7">
				<Link
					to="booking"
					activeClass="border-white"
					smooth={true}
					spy={true}
					duration={500}
				>
					<button className="px-6 py-2 text-sm font-semibold text-white transition duration-500 bg-yellow-500 rounded-lg xl:px-12 xl:text-lg focus:outline-none md:text-base hover:bg-yellow-600">
						Book Now
					</button>
				</Link>
				<button className="px-6 py-2 text-sm text-white transition duration-500 border border-yellow-500 rounded-lg xl:px-12 xl:text-lg hover:border-yellow-600 hover:bg-yellow-600 focus:outline-none md:text-base">
					Haircut Gallery
				</button>
			</div>
		</div>
	)
}

export default Header
