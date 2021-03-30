import RatesCard from './RatesCard'
import styles from '../../styles/Rates.module.scss'
import SectionTitle from '../SectionTitle'

const Rates = () => {
	const inclusionsHaircut = ['Haircut', 'Towel', 'Massage']
	const inclusionsGoateeArtistry = [
		'Detailed Trim',
		'Sculpting',
		'Massage',
		'Hot Towel',
	]
	const inclusionsClassicMan = [
		'Cut & Rinse',
		'B & A Shave',
		'Massage',
		'Hot Towel',
		'40G Pomade',
	]

	return (
		<div className={styles.ratesSection} id="rates">

			<div className="mt-10 xl:col-span-3 ">
				<SectionTitle className="text-transparent">Rates</SectionTitle>
			</div>

			<RatesCard
				img={`${styles.image1} ${styles.image}`}
				className="bg-gradient-to-br text-white opacity-75 from-[#a37a4b] to-[#433323] "
				cardTitle="Neat Haircut"
				packagePrice="₱250"
			>
				{inclusionsHaircut.map((inclusion, index) => (
					<p
						key={index}
						className="p-4 border-b-[0.03rem] w-2/3 border-gray-100"
					>
						{inclusion}
					</p>
				))}
			</RatesCard>

			<RatesCard
				img={`${styles.image2} ${styles.image}`}
				className="bg-gradient-to-br text-white opacity-75 from-[#2d5286] to-[#1d3557]"
				cardTitle="Goatee Artistry"
				packagePrice="₱450"
			>
				{inclusionsGoateeArtistry.map((inclusion, index) => (
					<p
						key={index}
						className="p-4 border-b-[0.03rem] w-2/3 border-gray-100"
					>
						{inclusion}
					</p>
				))}
			</RatesCard>

			<RatesCard
				img={`${styles.image3} ${styles.image}`}
				className="bg-gradient-to-br text-white opacity-75 from-[#318a66] to-[#1b7752] "
				cardTitle="Classic Man"
				packagePrice="₱600"
			>
				{inclusionsClassicMan.map((inclusion, index) => (
					<p
						key={index}
						className="p-4 border-b-[0.03rem] w-2/3 border-gray-100"
					>
						{inclusion}
					</p>
				))}
			</RatesCard>

			<div className="mx-auto mb-10 xl:col-span-3">
				<button className="px-4 py-2 transform shadow rounded-3xl transition-all duration-300  bg-[#433323] text-white hover:shadow-md hover:-translate-y-1 focus:outline-none">
					View Complete Pricelist
				</button>
			</div>
		</div>
	)
}

export default Rates
