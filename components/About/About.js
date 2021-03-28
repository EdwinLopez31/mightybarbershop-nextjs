import styles from '../../styles/About.module.scss'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

const About = () => {
	return (
		<div className={styles.aboutSection}>
			<SectionTitle className="mb-8 text-transparent">
				For all kinds of gentlemen
			</SectionTitle>

			<div className="grid items-center justify-center h-full grid-cols-1 mx-12 md:mx-6 xl:mt-20 lg:gap-x-24 md:grid-cols-2">
				<div className="relative grid w-full h-full grid-cols-1 mb-10 xl:-mt-28 gap-y-5 md:order-2">
					<div className="w-[200px] lg:w-[250px] lg:h-[190px]  xl:w-[370px] xl:h-[280px] mx-auto relative h-[140px] md:absolute md:top-20 md:left-8 z-10 transform duration-300 border-2 border-transparent md:hover:z-50 md:hover:-translate-y-1 md:hover:scale-110 md:hover:border-yellow-900">
						<Image
							src="/haircut_adult.png"
							layout="fill"
							className="absolute"
						/>
					</div>

					<div className="w-[200px] lg:w-[250px] lg:h-[190px] mx-auto xl:left-44 xl:w-[370px] xl:h-[280px] relative h-[140px] md:absolute md:top-16 md:left-36 z-20 0 transform duration-300 border-2 border-transparent md:hover:z-50 md:hover:-translate-y-1 md:hover:scale-110 md:hover:border-yellow-900">
						<Image
							src="/haircut_teen.png"
							layout="fill"
							className="absolute"
						/>
					</div>
					<div className="w-[200px] mx-auto lg:w-[250px] lg:h-[190px]  xl:w-[370px] xl:h-[280px] relative h-[140px] md:absolute md:top-28 md:left-28 z-30  transform duration-300 border-2 border-transparent md:hover:z-50 md:hover:-translate-y-1 md:hover:scale-110 md:hover:border-yellow-900">
						<Image
							src="/haircut_child.png"
							layout="fill"
							className="absolute"
						/>
					</div>
				</div>

				<div className="col-span-1 text-sm lg:text-base md:order-1">
					<div className="mb-10">
						<h3 className="mb-5 font-bold md:mb-3">TITLE 1</h3>
						<p className="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequuntur modi possimus nulla illum praesentium quos
							commodi. Explicabo dolorum corporis impedit enim. Reiciendis,
							quam fuga maiores commodi expedita tempore sit.
						</p>
					</div>

					<div className="mb-10">
						<h3 className="mb-5 font-bold md:mb-3">TITLE 2</h3>
						<p className="">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequuntur modi possimus nulla illum praesentium quos
							commodi. Explicabo dolorum corporis impedit enim.
						</p>
					</div>
				</div>

				<button className="border-b-2 xl:mt-24 order-12 md:col-span-2 text-sm lg:text-base text-gray-600 rounded-sm focus:outline-none border-[#433323] w-28 justify-self-center hover:bg-[#433323] transition-all duration-300 hover:text-white mb-4 md:mt-5">
					Learn More
				</button>
			</div>
		</div>
	)
}

export default About
