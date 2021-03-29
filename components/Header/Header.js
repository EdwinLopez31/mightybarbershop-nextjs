import styles from '../../styles/Header.module.scss'
import { motion } from 'framer-motion'

const Header = () => {
	return (
		<div className={styles.headerSection}>
			<div>
				<motion.h1 initial={{opacity: 0}} animate={{opacity: 100}} transition={{type: 'spring', stiffness: 120}}  className="text-[2.70rem] md:text-6xl xl:text-8xl font-bold text-white text-center leading-[3rem]">
					Mighty Barbershop
				</motion.h1>
			</div>
			<div>
				<h4 className="mt-2 text-xl font-thin tracking-widest text-center text-white uppercase xl:text-4xl md:mt-4 md:font-light md:text-2xl">
					Only the mightiest haircut
				</h4>
			</div>
			<div className="flex flex-row mt-10 md:mt-12 xl:mt-14 gap-x-7">
				<button className="px-6 py-2 text-sm font-semibold text-white transition duration-500 bg-yellow-500 rounded-lg xl:px-12 xl:text-lg focus:outline-none md:text-base hover:bg-yellow-600">
					Book Now
				</button>
				<button className="px-6 py-2 text-sm text-white transition duration-500 border border-yellow-500 rounded-lg xl:px-12 xl:text-lg hover:border-yellow-600 hover:bg-yellow-600 focus:outline-none md:text-base">
					Haircut Gallery
				</button>
			</div>
		</div>
	)
}

export default Header
