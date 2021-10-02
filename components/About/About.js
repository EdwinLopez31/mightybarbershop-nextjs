import styles from '../../styles/About.module.scss'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

const About = () => {
	return (
		<div className={styles.aboutSection} id="about">
			<SectionTitle className="mb-8 text-transparent">
				For all kinds of gentlemen
			</SectionTitle>

			<div className="grid items-center justify-center h-full grid-cols-1 mx-12 mt-16 md:mx-6 xl:mt-20 lg:gap-x-24 md:grid-cols-2">
				<div className="relative grid w-full h-full grid-cols-1 mb-10 xl:-mt-28 gap-y-5 md:order-2">
					<div className={`z-10 md:top-20 md:left-8 w-[200px] lg:w-[250px] lg:h-[190px] xl:w-[370px] xl:h-[280px]  h-[140px] ${styles.aboutImages}`}>
						<Image
							src="/haircut_adult.png"
							layout="fill"
							className="absolute"
						/>
					</div>

					<div className={`xl:left-48 md:top-12 z-20 md:left-36 w-[200px] lg:w-[250px] lg:h-[190px] xl:w-[370px] xl:h-[280px]  h-[140px] ${styles.aboutImages}`}>
						<Image
							src="/haircut_teen.png"
							layout="fill"
							className="absolute"
						/>
					</div>
					<div className={`z-30 md:top-28 md:left-28 w-[200px] lg:w-[250px] lg:h-[190px] xl:w-[370px] xl:h-[280px]  h-[140px] ${styles.aboutImages}`}>
						<Image
							src="/haircut_child.png"
							layout="fill"
							className="absolute"
						/>
					</div>
				</div>

				<div className="col-span-1 mt-12 text-sm lg:text-base md:mt-0 md:order-1">
					<div className="mb-10">
						<h3 className="mb-5 font-bold md:mb-3">TITLE 1</h3>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere esse sint sit vero omnis nam voluptate consectetur nobis iste placeat aliquam tempore itaque atque, quo, maiores porro! Illo aliquam excepturi, amet dolorem accusantium debitis alias labore necessitatibus quam enim commodi voluptas sapiente modi doloribus voluptatibus repellendus, corporis quaerat eos?
						</p>
					</div>

					<div className="mb-10">
						<h3 className="mb-5 font-bold md:mb-3">TITLE 2</h3>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente possimus, soluta impedit exercitationem, suscipit temporibus iure illo fugit modi, sequi perferendis eveniet distinctio accusantium assumenda ea vitae. Porro enim, tenetur dolorem saepe maiores quasi nisi ratione praesentium, exercitationem illum omnis inventore! Impedit ipsam amet debitis eveniet in, omnis quo mollitia ullam ad, officiis ipsum assumenda explicabo necessitatibus sapiente non, nobis dolores dolorem dicta expedita?
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
