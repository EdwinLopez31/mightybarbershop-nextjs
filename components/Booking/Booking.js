import styles from '../../styles/Booking.module.scss'
import SectionTitle from '../SectionTitle'

const Booking = () => {

	const handleSubmit = () => {
		
	}

	let options = {
		haircuts: [
			'Regular Haircut',
			'Neat Haircut',
			'Haircut Artistry',
			'Haircut & Rinse',
		],
		shaves: ['Regular Shave', 'Goatee Artistry', 'Head Shave'],
		packageDeals: [
			'Classic Man',
			'Easy Slick',
			'Al-mighty Shave',
			'Twins of Twins',
			'Service Dessert',
			'Do & Dye',
			'1,2 Combo',
		],
	}

	return (
		<div className={styles.bookingSection} id="booking">
			<div className={styles.formContainer}>
				<div className={styles.formContainerBg}>
					<div className="mx-auto mt-8 md:absolute left-8">
						<SectionTitle className="text-transparent">
							Make your reservation today
						</SectionTitle>
					</div>
					<form
						className="flex flex-col justify-center w-full h-full p-4 -mt-12 md:mt-4 gap-y-10 md:max-w-xl md:w-1/2 "
						action=""
					>
						<div className={`${styles.divFormField}`}>
							<input
								required
								className={`${styles.inputField} `}
								type="text"
								name="name"
								id="name"
								placeholder="Name"
							/>
							<label className={`${styles.inputLabel} `} htmlFor="name">Name</label>
						</div>
						<div className={`${styles.divFormField}`}>
							<input
								required
								className={`${styles.inputField} `}
								type="email"
								name="email"
								id="email"
								placeholder="Email"
							/>
							<label className={`${styles.inputLabel} `} htmlFor="email">Email</label>
						</div>
						<div className={`${styles.divFormField}`}>
						<select
							className={`${styles.selectService}`}
							name="service"
							id="service"
							defaultValue={'default'}
						>
							<option disabled hidden value="default">
								Choose a service
							</option>
							<optgroup label="Haircut">
								{options.haircuts.map((haircut, index) => (
									<option key={haircut.index} value={haircut}>
										{haircut}
									</option>
								))}
							</optgroup>
							<optgroup label="Shave">
								{options.shaves.map((shave, index) => (
									<option key={shave.index} value={shave}>
										{shave}
									</option>
								))}
							</optgroup>
							<optgroup label="Package Deal">
								{options.packageDeals.map((packageDeal, index) => (
									<option key={packageDeal.index} value={packageDeal}>
										{packageDeal}
									</option>
								))}
							</optgroup>
						</select>
						<label className={`${styles.inputLabel} `} htmlFor="service">Choose a service</label>
						</div>

						<button
							className={`${styles.circleScaleBtn} mx-auto w-52 xl:w-64  uppercase font-semibold tracking-wider mt-8`}
						>
							<span>Submit</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Booking
