import styles from '../../styles/Booking.module.scss'
import SectionTitle from '../SectionTitle'

const Booking = () => {
	return (
		<div className={styles.bookingSection}>
			<div className={styles.formContainer}>
				<div className={styles.formContainerBg}>
				<div className="mx-auto mt-8 md:absolute left-8 xl:left-10">
					<SectionTitle className="text-transparent">
						Make your reservation today!
					</SectionTitle>
					</div>
					<form
						className="flex flex-col justify-center w-full h-full p-4 -mt-12 md:mt-4 gap-y-8 md:max-w-xl md:w-1/2 "
						action=""
					>
						<input
							required
							className="block mx-auto w-11/12 p-2 border-b-4 border-transparent rounded-md focus:outline-none focus:invalid:outline-none focus:border-solid focus:border-[#3ead81] focus:invalid:border-[#ad3e3e]"
							type="text"
						/>
						<input
							required
							className="block mx-auto w-11/12 p-2 border-b-4 border-transparent rounded-md focus:outline-none focus:invalid:outline-none focus:border-solid focus:border-[#3ead81] focus:invalid:border-[#ad3e3e]"
							type="email"
						/>
						<select
							className="w-11/12 border-b-4 border-transparent p-2 mx-auto rounded-md focus:outline-none  focus:border-solid focus:border-[#3ead81]"
							name=""
							id=""
						>
							<option disabled hidden selected>
								Choose a service
							</option>
							<optgroup label="Haircut">
								<option value="Regular Haircut">Regular Haircut</option>
								<option value="Neat Haircut">Neat Haircut</option>
								<option value="Haircut Artistry">Haircut Artistry</option>
								<option value="Haircut and Rinse">Haircut & Rinse</option>
							</optgroup>
							<optgroup label="Shave">
								<option value="Regular Shave">Regular Shave</option>
								<option value="Goatee Artistry">Goatee Artistry</option>
								<option value="Head Shave">Head Shave</option>
							</optgroup>
							<optgroup label="Package Deal">
								<option value="Classic Man">Classic Man</option>
								<option value="Easy Slick">Easy Slick</option>
								<option value="Al-Mighty Shave">Al-Mighty Shave</option>
								<option value="Twins of Twins">Twins of Twins</option>
								<option value="Service Dessert">Service Dessert</option>
								<option value="Do and Dye">Do & Dye</option>
								<option value="1,2 Combo">1,2 Combo</option>
							</optgroup>
						</select>

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
