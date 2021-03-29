import styles from '../../styles/Testimonies.module.scss'
import CardTestimony from './CardTestimony'
import SectionTitle from '../SectionTitle'

const Testimonies = () => {
	return (
		<div className={styles.testimoniesSection} id="testimonies">
		<div className="mt-28">
			<SectionTitle className="text-white">Only the mightiest haircut</SectionTitle>
</div>
			<CardTestimony>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
				expedita est. Veniam, cum? Itaque officiis amet ducimus corporis harum
				facere, iure natus illo eius rem quis maxime quia nobis ea possimus
				dolores assumenda vel culpa ut, eligendi facilis quasi qui quisquam!
				Consectetur natus ex sit totam vitae qui laborum veniam.
			</CardTestimony>
			<CardTestimony className="mt-5 mb-12">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
				exercitationem harum repudiandae beatae. Beatae, eveniet. Quasi asperiores
				amet nostrum consequuntur quidem, maiores distinctio beatae maxime saepe
				reiciendis et illum animi!
			</CardTestimony>
		</div>
	)
}

export default Testimonies
