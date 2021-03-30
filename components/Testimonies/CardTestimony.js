import styles from '../../styles/Testimonies.module.scss'

const CardTestimony = props => {
	return (
		<div
			className={`${props.className} ${styles.cardTestimony}`}
		>
			<div className="mx-auto">
				<div
					className="flex items-center justify-center float-left m-2 text-xs bg-yellow-200 rounded-full w-28 h-28"
					style={{ shapeOutside: 'circle(50%)' }}
				>Picture here</div>
				<h5 className="text-sm font-bold uppercase lg:text-base">
					The Best Barbershop in town!
				</h5>
				<p className="text-sm lg:text-base max-w-prose">{props.children}</p>
			</div>
		</div>
	)
}

export default CardTestimony
